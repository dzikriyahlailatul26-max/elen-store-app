import { NextResponse } from 'next/server';
import { supabase } from './supabase';

export async function POST(request: Request) {
  try {
    const { sku, changeQty, type, notes } = await request.json();

    // 1. Ambil data produk berdasarkan SKU
    const { data: variant, error: findError } = await supabase
      .from('product_variants')
      .select('*')
      .eq('sku', sku)
      .single();

    if (findError || !variant) {
      return NextResponse.json({ error: 'SKU produk tidak ditemukan!' }, { status: 404 });
    }

    // 2. Hitung & update stok baru
    const newStock = variant.stock_qty + changeQty;

    await supabase
      .from('product_variants')
      .update({ stock_qty: newStock })
      .eq('id', variant.id);

    // 3. Catat Riwayat Pengambilan/Penambahan Stok
    await supabase.from('stock_logs').insert({
      variant_id: variant.id,
      change_qty: changeQty,
      type: type,
      notes: notes
    });

    // 4. Kirim WA Auto-Broadcast via Fonnte Gateway (Jika token diisi)
    if (process.env.FONNTE_TOKEN) {
      const waMessage = `📢 *UPDATE STOK ELEN STORE*\n\n` +
        `📦 SKU: ${variant.sku}\n` +
        `👗 Produk: ${variant.product_name} (${variant.color} - ${variant.size})\n` +
        `🔄 Perubahan: ${changeQty > 0 ? '+' : ''}${changeQty} pcs (${type})\n` +
        `📊 Stok Sekarang: *${newStock} pcs*\n` +
        `📝 Catatan: ${notes || '-'}\n\n` +
        `_Sistem Otomatis Elen Store_`;

      await fetch('https://api.fonnte.com/send', {
        method: 'POST',
        headers: {
          'Authorization': process.env.FONNTE_TOKEN,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          target: process.env.WA_GROUP_ID || '',
          message: waMessage
        })
      });
    }

    return NextResponse.json({ success: true, newStock, productName: variant.product_name });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}