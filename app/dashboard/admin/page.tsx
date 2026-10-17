'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const router = useRouter();
  const [type, setType] = useState<'IN' | 'OUT'>('OUT');
  const [sku, setSku] = useState('');
  const [qty, setQty] = useState('1');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null);

  useEffect(() => {
    const isAuth = localStorage.getItem('elen_auth');
    if (!isAuth) {
      router.push('/login');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sku.trim()) {
      setMessage({ text: 'Kode SKU wajib diisi!', isError: true });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch('/api/stock/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sku: sku.trim(),
          type,
          qty: parseInt(qty) || 1,
          notes: notes.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Gagal memperbarui stok');
      }

      setMessage({ text: `Berhasil! Stok SKU ${sku} terbarui.`, isError: false });
      setSku('');
      setQty('1');
      setNotes('');
    } catch (err: any) {
      setMessage({ text: err.message || 'Terjadi kesalahan sistem', isError: true });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-black tracking-wider text-black">ELEN STORE</h1>
            <span className="bg-pink-100 text-pink-600 text-xs font-bold px-2 py-0.5 rounded-full">SYSTEM</span>
          </div>
          <div className="flex gap-2">
            <button className="bg-black text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1">
              <span>📦</span> Admin Gudang
            </button>
            <button 
              onClick={() => router.push('/dashboard/retur')}
              className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1"
            >
              <span>🔄</span> Retur & CS
            </button>
            <button 
              onClick={() => router.push('/dashboard/produksi')}
              className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1"
            >
              <span>✂️</span> Produksi & Kreatif
            </button>
          </div>
        </div>
      </header>

      {/* Main Form */}
      <main className="max-w-md mx-auto px-4 pt-8">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* JENIS TRANSAKSI */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Jenis Transaksi
              </label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-2xl">
                <button
                  type="button"
                  onClick={() => setType('OUT')}
                  className={`py-3 rounded-xl font-bold text-sm transition-all ${
                    type === 'OUT'
                      ? 'bg-pink-600 text-white shadow-sm'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  Ambil (Barang Keluar)
                </button>
                <button
                  type="button"
                  onClick={() => setType('IN')}
                  className={`py-3 rounded-xl font-bold text-sm transition-all ${
                    type === 'IN'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  Tambah (Restok)
                </button>
              </div>
            </div>

            {/* KODE SKU PRODUK */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Kode SKU Produk
              </label>
              <input
                type="text"
                value={sku}
                onChange={(e) => setSku(e.target.value)}
                placeholder="misal: lavie pants"
                style={{ color: '#000000' }}
                className="w-full bg-white border-2 border-gray-300 rounded-2xl py-3.5 px-4 font-bold text-base text-black placeholder-gray-500 focus:outline-none focus:border-black"
              />
            </div>

            {/* JUMLAH (PCS) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Jumlah (PCS)
              </label>
              <input
                type="number"
                min="1"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                style={{ color: '#000000' }}
                className="w-full bg-white border-2 border-gray-300 rounded-2xl py-3.5 px-4 font-bold text-lg text-black placeholder-gray-500 focus:outline-none focus:border-black"
              />
            </div>

            {/* CATATAN / KETERANGAN */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Catatan / Keterangan
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Misal: Diambil tim packing TikTok"
                style={{ color: '#000000' }}
                className="w-full bg-white border-2 border-gray-300 rounded-2xl py-3.5 px-4 font-bold text-sm text-black placeholder-gray-500 focus:outline-none focus:border-black"
              />
            </div>

            {/* NOTIFIKASI */}
            {message && (
              <div
                className={`p-4 rounded-2xl text-sm font-bold text-center ${
                  message.isError
                    ? 'bg-red-50 text-red-600 border border-red-100'
                    : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                }`}
              >
                {message.text}
              </div>
            )}

            {/* BUTTON SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-pink-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <span>Memproses...</span>
              ) : (
                <>
                  <span>🚀</span> Simpan & Auto Broadcast WA
                </>
              )}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}