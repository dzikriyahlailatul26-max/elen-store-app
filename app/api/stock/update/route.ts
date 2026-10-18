import { NextResponse } from 'next/server';
import { supabase } from './supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { sku, type, qty, notes } = body;

    if (!sku || !type || !qty) {
      return NextResponse.json(
        { error: 'SKU, jenis transaksi, dan jumlah wajib diisi!' },
        { status: 400 }
      );
    }

    const cleanSku = sku.trim();

    // 1. Cari produk berdasarkan SKU (abaikan huruf besar/kecil)
    const { data: existingProducts, error: searchError } = await supabase
      .from('products')
      .select('*')
      .ilike('sku', cleanSku);

    if (searchError) {
      return NextResponse.json(
        { error: `Gagal mencari produk: ${searchError.message}` },
        { status: 500 }
      );
    }

    let product = existingProducts && existingProducts.length > 0 ? existingProducts[0] : null;

    // 2. Jika SKU belum ada di Supabase, buatkan otomatis!
    if (!product) {
      const initialStock = type === 'IN' ? qty : 0;
      const { data: newProduct, error: createError } = await supabase
        .from('products')
        .insert([
          {
            sku: cleanSku,
            name: cleanSku,
            stock: initialStock,
          },
        ])
        .select()
        .single();

      if (createError) {
        return NextResponse.json(
          { error: `Gagal membuat SKU baru: ${createError.message}` },
          { status: 500 }
        );
      }

      product = newProduct;
    } else {
      // 3. Jika SKU sudah ada, update jumlah stoknya
      const currentStock = product.stock || 0;
      const newStock = type === 'IN' ? currentStock + qty : Math.max(0, currentStock - qty);

      const { error: updateError } = await supabase
        .from('products')
        .update({ stock: newStock })
        .eq('id', product.id);

      if (updateError) {
        return NextResponse.json(
          { error: `Gagal memperbarui stok: ${updateError.message}` },
          { status: 500 }
        );
      }
    }

    // 4. Catat riwayat log transaksi stok
    await supabase.from('stock_logs').insert([
      {
        product_id: product.id,
        sku: cleanSku,
        type,
        qty,
        notes: notes || '',
      },
    ]);

    return NextResponse.json({
      success: true,
      message: `Stok SKU ${cleanSku} berhasil diperbarui!`,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || 'Terjadi kesalahan pada server' },
      { status: 500 }
    );
  }
}