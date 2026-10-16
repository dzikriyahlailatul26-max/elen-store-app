'use client';

import { useState } from 'react';
import { Package, Send, QrCode, CheckCircle2, AlertCircle } from 'lucide-react';

export default function AdminGudangPage() {
  const [sku, setSku] = useState('');
  const [qty, setQty] = useState<number>(1);
  const [type, setType] = useState<'OUT' | 'IN'>('OUT');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const changeQty = type === 'OUT' ? -Math.abs(qty) : Math.abs(qty);

    try {
      const res = await fetch('/api/stock/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sku, changeQty, type, notes }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Gagal mengupdate stok');

      setMessage({
        type: 'success',
        text: `Berhasil! Stok ${data.productName} terbaru: ${data.newStock} pcs (Auto-WA Terkirim)`,
      });
      setSku('');
      setNotes('');
      setQty(1);
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 max-w-md mx-auto">
      {/* Header Mobile PWA */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Elen Store PWA</h1>
          <p className="text-xs text-gray-500">Scan & Update Stok Gudang</p>
        </div>
        <div className="bg-rose-100 p-2.5 rounded-xl text-rose-600">
          <Package className="w-6 h-6" />
        </div>
      </div>

      {/* Alert Notifikasi */}
      {message && (
        <div className={`p-4 rounded-xl mb-4 flex items-center gap-3 text-sm font-medium ${
          message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'
        }`}>
          {message.type === 'success' ? <CheckCircle2 className="w-5 h-5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 flex-shrink-0" />}
          <span>{message.text}</span>
        </div>
      )}

      {/* Form Scan Input */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-5">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">
            Jenis Transaksi
          </label>
          <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-xl">
            <button
              type="button"
              onClick={() => setType('OUT')}
              className={`py-2.5 rounded-lg text-xs font-bold transition-all ${
                type === 'OUT' ? 'bg-rose-600 text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Ambil (Barang Keluar)
            </button>
            <button
              type="button"
              onClick={() => setType('IN')}
              className={`py-2.5 rounded-lg text-xs font-bold transition-all ${
                type === 'IN' ? 'bg-emerald-600 text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Tambah (Restok)
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">
            Kode SKU Produk
          </label>
          <div className="relative">
            <input
              type="text"
              required
              placeholder="Contoh: KEA-PANTS-BLK-L"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 font-mono"
            />
            <QrCode className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">
            Jumlah (Pcs)
          </label>
          <input
            type="number"
            min="1"
            required
            value={qty}
            onChange={(e) => setQty(parseInt(e.target.value) || 1)}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 font-bold"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">
            Catatan / Keterangan
          </label>
          <input
            type="text"
            placeholder="Misal: Diambil tim packing TikTok"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
          {loading ? 'Sistem Memproses...' : 'Simpan & Auto Broadcast WA'}
        </button>
      </form>
    </div>
  );
}