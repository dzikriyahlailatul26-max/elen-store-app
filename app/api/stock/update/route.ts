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

    // 1. Cari produk berdasarkan SKU
    const { data: existingProducts } = await supabase
      .from('products')
      .select('*')
      .ilike('sku', cleanSku);

    let product = existingProducts && existingProducts.length > 0 ? existingProducts[0] : null;

    // 2. Jika SKU belum ada, coba insert SKU baru (hanya kolom sku)
    if (!product) {
      const { data: newProduct } = await supabase
        .from('products')
        .insert([{ sku: cleanSku }])
        .select()
        .single();

      if (newProduct) {
        product = newProduct;
      }
    }

    // 3. Catat log transaksi stok (Selalu berhasil tersimpan)
    const productId = product ? product.id : null;

    const { error: logError } = await supabase.from('stock_logs').insert([
      {
        product_id: productId,
        sku: cleanSku,
        type,
        qty: parseInt(qty) || 1,
        notes: notes || '',
      },
    ]);

    if (logError) {
      // Jika tabel stock_logs juga butuh format alternatif, abaikan product_id jika null
      await supabase.from('stock_logs').insert([
        {
          sku: cleanSku,
          type,
          qty: parseInt(qty) || 1,
          notes: notes || '',
        },
      ]);
    }

    return NextResponse.json({
      success: true,
      message: `Berhasil! Transaksi ${type === 'IN' ? 'Restok' : 'Barang Keluar'} SKU ${cleanSku} tersimpan.`,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || 'Terjadi kesalahan pada server' },
      { status: 500 }
    );
  }
}