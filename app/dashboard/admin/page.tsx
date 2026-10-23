'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function AdminGudangPage() {
  const router = useRouter();
  const [type, setType] = useState<'out' | 'in'>('out');
  const [sku, setSku] = useState('');
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMsg('');

    try {
      const res = await fetch('/api/stock/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sku, qty, type, note }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Gagal memperbarui stok');

      setMsg(`✅ Berhasil! Stok ${sku} kini: ${data.data.stock_akhir} pcs`);
      setSku('');
      setQty(1);
      setNote('');
    } catch (err: any) {
      setMsg(`❌ Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#4A3B2C] pb-12">
      {/* Navigation Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-[#EADEC9] sticky top-0 z-50 px-4 py-3">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#D4AF37]">
              <Image src="/logo-elenstore.jpeg" alt="Elen Store Logo" fill className="object-cover" />
            </div>
            <div>
              <h1 className="font-bold text-base tracking-widest text-[#5A4632]">ELEN STORE</h1>
              <p className="text-[9px] text-[#A38A68] tracking-wider uppercase font-semibold">Gudang & Inventaris</p>
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <button
              onClick={() => router.push('/dashboard/admin')}
              className="flex items-center gap-1.5 whitespace-nowrap bg-[#4A3B2C] text-white text-xs font-bold px-4 py-2 rounded-xl shadow-sm cursor-pointer"
            >
              📦 Admin Gudang
            </button>
            <button
              onClick={() => router.push('/dashboard/retur')}
              className="flex items-center gap-1.5 whitespace-nowrap bg-white hover:bg-[#F5EFE6] text-[#5A4632] border border-[#EADEC9] text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer"
            >
              🔄 Retur & CS
            </button>
            <button
              onClick={() => router.push('/dashboard/produksi')}
              className="flex items-center gap-1.5 whitespace-nowrap bg-white hover:bg-[#F5EFE6] text-[#5A4632] border border-[#EADEC9] text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer"
            >
              ✂️ Produksi & Kreatif
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-xl mx-auto px-4 mt-8">
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-[#EADEC9]">
          <h2 className="text-xl font-bold text-[#4A3B2C] mb-1 text-center">PWA Scanner & Input Stok</h2>
          <p className="text-xs text-[#8C7A6B] mb-6 text-center">Pencatatan real-time barang keluar/masuk gudang Elen Store.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-[#5A4632] uppercase tracking-wider mb-2">Jenis Transaksi</label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-[#F5EFE6] rounded-2xl">
                <button
                  type="button"
                  onClick={() => setType('out')}
                  className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                    type === 'out'
                      ? 'bg-[#C85A32] text-white shadow-md'
                      : 'text-[#7C6A58] hover:text-[#4A3B2C]'
                  }`}
                >
                  Ambil (Barang Keluar)
                </button>
                <button
                  type="button"
                  onClick={() => setType('in')}
                  className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                    type === 'in'
                      ? 'bg-[#5B8C5A] text-white shadow-md'
                      : 'text-[#7C6A58] hover:text-[#4A3B2C]'
                  }`}
                >
                  Tambah (Restok)
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#5A4632] uppercase tracking-wider mb-1">Kode SKU Produk</label>
              <input
                type="text"
                required
                value={sku}
                onChange={(e) => setSku(e.target.value)}
                placeholder="Misal: lavie pants black"
                className="w-full bg-[#FAF7F2] border border-[#EADEC9] rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#5A4632] uppercase tracking-wider mb-1">Jumlah (Pcs)</label>
              <input
                type="number"
                min="1"
                required
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                className="w-full bg-[#FAF7F2] border border-[#EADEC9] rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#5A4632] uppercase tracking-wider mb-1">Catatan / Keterangan</label>
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Misal: Diambil tim packing TikTok"
                className="w-full bg-[#FAF7F2] border border-[#EADEC9] rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#D4AF37] hover:bg-[#B8952B] text-white font-bold py-3.5 rounded-2xl text-sm transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              {loading ? 'Memproses...' : '🚀 Simpan & Auto Broadcast WA'}
            </button>
          </form>

          {msg && (
            <div className={`mt-5 p-3 rounded-2xl text-xs font-semibold text-center border ${
              msg.startsWith('✅') ? 'bg-[#F0F7F0] border-[#A8D5A8] text-[#2D5A2D]' : 'bg-[#FDF0ED] border-[#F5C2B8] text-[#A83222]'
            }`}>
              {msg}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}