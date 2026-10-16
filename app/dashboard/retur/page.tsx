'use client';

import { useState } from 'react';
import { RefreshCw, Star, AlertTriangle, CheckCircle } from 'lucide-react';

export default function ReturDanUlasanPage() {
  const [orderId, setOrderId] = useState('');
  const [sku, setSku] = useState('');
  const [reason, setReason] = useState('CACAT_PRODUKSI');
  const [reviewText, setReviewText] = useState('');
  const [starRating, setStarRating] = useState(1);
  const [platform, setPlatform] = useState<'TIKTOK' | 'SHOPEE'>('TIKTOK');
  const [successMsg, setSuccessMsg] = useState('');

  const handleReturSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg(`Retur Order ${orderId} berhasil dicatat & masuk antrean QC.`);
    setOrderId('');
    setSku('');
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg(`Tiket ulasan buruk (${platform}) berhasil dibuat & dialokasikan ke CS.`);
    setReviewText('');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 max-w-4xl mx-auto space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-800">Modul Retur (RMA) & Handling Ulasan CS</h1>
        <p className="text-sm text-gray-500">Pencatatan retur barang 2% harian & tiket penanganan ulasan buruk Elen Store.</p>
      </div>

      {successMsg && (
        <div className="p-4 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-200 flex items-center gap-2 font-medium text-sm">
          <CheckCircle className="w-5 h-5" />
          <span>{successMsg}</span>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Form Input Retur */}
        <form onSubmit={handleReturSubmit} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
          <div className="flex items-center gap-2 text-rose-600 font-bold">
            <RefreshCw className="w-5 h-5" />
            <h2>Pencatatan Barang Retur</h2>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">No. Pesanan / Order ID</label>
            <input
              type="text"
              required
              placeholder="Contoh: TT-20260920-001"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="w-full px-4 py-2.5 border rounded-xl text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">SKU Produk Retur</label>
            <input
              type="text"
              required
              placeholder="LAVIE-NEW-HTM-M"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              className="w-full px-4 py-2.5 border rounded-xl text-sm font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Alasan Retur</label>
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full px-4 py-2.5 border rounded-xl text-sm"
            >
              <option value="SALAH_KIRIM">Salah Kirim Warna/Ukuran</option>
              <option value="CACAT_PRODUKSI">Cacat Produksi / Jahitan Rusak</option>
              <option value="TIDAK_COCOK">Tidak Cocok / Berubah Pikiran</option>
              <option value="LAINNYA">Lainnya</option>
            </select>
          </div>

          <button type="submit" className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-gray-800">
            Simpan Data Retur
          </button>
        </form>

        {/* Form Tiket Ulasan Buruk CS */}
        <form onSubmit={handleReviewSubmit} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
          <div className="flex items-center gap-2 text-amber-600 font-bold">
            <AlertTriangle className="w-5 h-5" />
            <h2>Tiket Penanganan Ulasan Buruk</h2>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setPlatform('TIKTOK')}
              className={`py-2 rounded-lg text-xs font-bold border ${platform === 'TIKTOK' ? 'bg-black text-white' : 'bg-white text-gray-700'}`}
            >
              TikTok Shop
            </button>
            <button
              type="button"
              onClick={() => setPlatform('SHOPEE')}
              className={`py-2 rounded-lg text-xs font-bold border ${platform === 'SHOPEE' ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'}`}
            >
              Shopee
            </button>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Bintang Ulasan</label>
            <div className="flex gap-2">
              {[1, 2, 3].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setStarRating(star)}
                  className={`p-2 rounded-lg border flex items-center gap-1 text-xs ${starRating === star ? 'bg-amber-100 text-amber-700 font-bold' : 'bg-white'}`}
                >
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> {star} Bintang
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Isi Ulasan Pembeli</label>
            <textarea
              required
              rows={3}
              placeholder="Misal: Jahitan di bagian paha lepas saat pertama dipake..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="w-full px-4 py-2.5 border rounded-xl text-sm"
            />
          </div>

          <button type="submit" className="w-full py-3 bg-amber-500 text-white rounded-xl font-bold text-sm hover:bg-amber-600">
            Tugaskan ke CS untuk Follow Up
          </button>
        </form>
      </div>
    </div>
  );
}