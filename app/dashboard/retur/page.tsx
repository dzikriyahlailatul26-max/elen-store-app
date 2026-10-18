'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ReturPage() {
  const router = useRouter();

  // State Form Retur Barang
  const [orderId, setOrderId] = useState('');
  const [skuRetur, setSkuRetur] = useState('');
  const [alasanRetur, setAlasanRetur] = useState('Cacat Produksi / Jahitan Rusak');
  const [loadingRetur, setLoadingRetur] = useState(false);
  const [msgRetur, setMsgRetur] = useState<{ text: string; isError: boolean } | null>(null);

  // State Form Tiket Ulasan Buruk CS
  const [platform, setPlatform] = useState<'TikTok Shop' | 'Shopee'>('TikTok Shop');
  const [bintang, setBintang] = useState<number>(1);
  const [isiUlasan, setIsiUlasan] = useState('');
  const [loadingCS, setLoadingCS] = useState(false);
  const [msgCS, setMsgCS] = useState<{ text: string; isError: boolean } | null>(null);

  useEffect(() => {
    const isAuth = localStorage.getItem('elen_auth');
    if (!isAuth) {
      router.push('/login');
    }
  }, [router]);

  // Submit Data Retur
  const handleSimpanRetur = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId.trim() || !skuRetur.trim()) {
      setMsgRetur({ text: 'No. Pesanan dan SKU wajib diisi!', isError: true });
      return;
    }

    setLoadingRetur(true);
    setMsgRetur(null);

    try {
      // Simulasi/Penyimpanan data retur
      await new Promise((resolve) => setTimeout(resolve, 800));
      setMsgRetur({ text: 'Data retur berhasil dicatat!', isError: false });
      setOrderId('');
      setSkuRetur('');
    } catch (err: any) {
      setMsgRetur({ text: 'Gagal menyimpan data retur', isError: true });
    } finally {
      setLoadingRetur(false);
    }
  };

  // Submit Tiket CS
  const handleSimpanCS = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isiUlasan.trim()) {
      setMsgCS({ text: 'Isi ulasan pembeli wajib diisi!', isError: true });
      return;
    }

    setLoadingCS(true);
    setMsgCS(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setMsgCS({ text: 'Tiket berhasil ditugaskan ke CS!', isError: false });
      setIsiUlasan('');
    } catch (err: any) {
      setMsgCS({ text: 'Gagal membuat tiket CS', isError: true });
    } finally {
      setLoadingCS(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header Navigasi */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-black tracking-wider text-black">ELEN STORE</h1>
            <span className="bg-pink-100 text-pink-600 text-xs font-bold px-2 py-0.5 rounded-full">SYSTEM</span>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => router.push('/dashboard/admin')}
              className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1"
            >
              <span>📦</span> Admin Gudang
            </button>
            <button className="bg-black text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1">
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

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 pt-6">
        {/* Banner Judul */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 mb-6">
          <h2 className="text-2xl font-black text-gray-900 mb-1">
            Modul Retur (RMA) & Handling Ulasan CS
          </h2>
          <p className="text-sm font-semibold text-gray-500">
            Pencatatan retur barang 2% harian & tiket penanganan ulasan buruk Elen Store.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* FORM 1: PENCATATAN BARANG RETUR */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xl">🔄</span>
              <h3 className="text-lg font-black text-rose-600">Pencatatan Barang Retur</h3>
            </div>

            <form onSubmit={handleSimpanRetur} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  No. Pesanan / Order ID
                </label>
                <input
                  type="text"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="Contoh: TT-20260920-001"
                  style={{ color: '#000000' }}
                  className="w-full bg-white border-2 border-gray-300 rounded-2xl py-3.5 px-4 font-bold text-base text-black placeholder-gray-400 focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  SKU Produk Retur
                </label>
                <input
                  type="text"
                  value={skuRetur}
                  onChange={(e) => setSkuRetur(e.target.value)}
                  placeholder="Contoh: LAVIE-NEW-HITAM-M"
                  style={{ color: '#000000' }}
                  className="w-full bg-white border-2 border-gray-300 rounded-2xl py-3.5 px-4 font-bold text-base text-black placeholder-gray-400 focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Alasan Retur
                </label>
                <select
                  value={alasanRetur}
                  onChange={(e) => setAlasanRetur(e.target.value)}
                  style={{ color: '#000000' }}
                  className="w-full bg-white border-2 border-gray-300 rounded-2xl py-3.5 px-4 font-bold text-sm text-black focus:outline-none focus:border-black"
                >
                  <option value="Cacat Produksi / Jahitan Rusak">Cacat Produksi / Jahitan Rusak</option>
                  <option value="Salah Warna / Ukuran Kirim">Salah Warna / Ukuran Kirim</option>
                  <option value="Paket Rusak di Ekspedisi">Paket Rusak di Ekspedisi</option>
                  <option value="Pembeli Tukar Size">Pembeli Tukar Size</option>
                </select>
              </div>

              {msgRetur && (
                <div
                  className={`p-3.5 rounded-2xl text-xs font-bold text-center ${
                    msgRetur.isError
                      ? 'bg-red-50 text-red-600 border border-red-200'
                      : 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                  }`}
                >
                  {msgRetur.text}
                </div>
              )}

              <button
                type="submit"
                disabled={loadingRetur}
                className="w-full bg-slate-900 hover:bg-black text-white font-bold py-4 rounded-2xl transition-all shadow-md disabled:opacity-50"
              >
                {loadingRetur ? 'Memproses...' : 'Simpan Data Retur'}
              </button>
            </form>
          </div>

          {/* FORM 2: TIKET PENANGANAN ULASAN BURUK */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xl">⚠️</span>
              <h3 className="text-lg font-black text-amber-600">Tiket Penanganan Ulasan Buruk</h3>
            </div>

            <form onSubmit={handleSimpanCS} className="space-y-5">
              {/* Pilihan Platform */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Platform
                </label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-2xl">
                  <button
                    type="button"
                    onClick={() => setPlatform('TikTok Shop')}
                    className={`py-2.5 rounded-xl font-bold text-xs transition-all ${
                      platform === 'TikTok Shop'
                        ? 'bg-black text-white shadow-sm'
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    TikTok Shop
                  </button>
                  <button
                    type="button"
                    onClick={() => setPlatform('Shopee')}
                    className={`py-2.5 rounded-xl font-bold text-xs transition-all ${
                      platform === 'Shopee'
                        ? 'bg-orange-500 text-white shadow-sm'
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    Shopee
                  </button>
                </div>
              </div>

              {/* Rating Bintang */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Bintang Ulasan
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setBintang(star)}
                      className={`flex-1 py-2.5 rounded-xl font-bold text-xs border-2 transition-all flex items-center justify-center gap-1 ${
                        bintang === star
                          ? 'bg-amber-100 border-amber-500 text-amber-900'
                          : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'
                      }`}
                    >
                      <span>⭐</span> {star} Bintang
                    </button>
                  ))}
                </div>
              </div>

              {/* Isi Ulasan */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Isi Ulasan Pembeli
                </label>
                <textarea
                  rows={3}
                  value={isiUlasan}
                  onChange={(e) => setIsiUlasan(e.target.value)}
                  placeholder="Misal: Jelek banget kainnya tipis"
                  style={{ color: '#000000' }}
                  className="w-full bg-white border-2 border-gray-300 rounded-2xl py-3 px-4 font-bold text-sm text-black placeholder-gray-400 focus:outline-none focus:border-black resize-none"
                />
              </div>

              {msgCS && (
                <div
                  className={`p-3.5 rounded-2xl text-xs font-bold text-center ${
                    msgCS.isError
                      ? 'bg-red-50 text-red-600 border border-red-200'
                      : 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                  }`}
                >
                  {msgCS.text}
                </div>
              )}

              <button
                type="submit"
                disabled={loadingCS}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-2xl transition-all shadow-md shadow-orange-100 disabled:opacity-50"
              >
                {loadingCS ? 'Memproses...' : 'Tugaskan ke CS untuk Follow Up'}
              </button>
            </form>
          </div>

        </div>
      </main>
    </div>
  );
}