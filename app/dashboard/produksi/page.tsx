'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const dynamic = 'force-dynamic';

interface SPKItem {
  id: string;
  productName: string;
  qty: number;
  vendor: string;
  targetDate: string;
  status: 'POTONG KAIN' | 'PROSES JAHIT' | 'FINISHING' | 'SELESAI QC';
}

interface ContentItem {
  id: string;
  title: string;
  platform: 'TikTok' | 'Instagram Reels';
  talent: string;
  shootDate: string;
  status: 'DRAFT HOOK' | 'PROSES TAKE' | 'EDITING' | 'READY UPLOAD';
}

export default function ProduksiPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'CMT' | 'KREATIF'>('CMT');

  useEffect(() => {
    const isAuth = localStorage.getItem('elen_auth');
    if (!isAuth) {
      router.push('/login');
    }
  }, [router]);

  // Data State SPK CMT
  const [spkList, setSpkList] = useState<SPKItem[]>([
    {
      id: '1',
      productName: 'New Lavie Pants',
      qty: 500,
      vendor: 'CV Taylor Pekalongan',
      targetDate: '2026-10-25',
      status: 'PROSES JAHIT',
    },
    {
      id: '2',
      productName: 'Aira Ballon Pants',
      qty: 300,
      vendor: 'Konveksi Berkah Pekalongan',
      targetDate: '2026-10-28',
      status: 'POTONG KAIN',
    },
  ]);

  // Data State Tim Kreatif
  const [contentList, setContentList] = useState<ContentItem[]>([
    {
      id: '1',
      title: 'Fitcheck New Lavie Pants Hitam M',
      platform: 'TikTok',
      talent: 'Incess & Team',
      shootDate: '2026-10-17',
      status: 'READY UPLOAD',
    },
    {
      id: '2',
      title: 'B-Roll Detail Bahan Aira Ballon Pants',
      platform: 'Instagram Reels',
      talent: 'Duo Matcha',
      shootDate: '2026-10-18',
      status: 'EDITING',
    },
  ]);

  // State Popup Modal Form
  const [showSpkModal, setShowSpkModal] = useState(false);
  const [newProductName, setNewProductName] = useState('');
  const [newQty, setNewQty] = useState('');
  const [newVendor, setNewVendor] = useState('CV Taylor Pekalongan');
  const [newTargetDate, setNewTargetDate] = useState('');

  const [showContentModal, setShowContentModal] = useState(false);
  const [newContentTitle, setNewContentTitle] = useState('');
  const [newPlatform, setNewPlatform] = useState<'TikTok' | 'Instagram Reels'>('TikTok');
  const [newTalent, setNewTalent] = useState('Incess');
  const [newShootDate, setNewShootDate] = useState('');

  // Submit SPK CMT
  const handleAddSpk = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProductName.trim() || !newQty) return;

    const newItem: SPKItem = {
      id: Date.now().toString(),
      productName: newProductName.trim(),
      qty: parseInt(newQty) || 0,
      vendor: newVendor,
      targetDate: newTargetDate || '2026-11-01',
      status: 'POTONG KAIN',
    };

    setSpkList([newItem, ...spkList]);
    setNewProductName('');
    setNewQty('');
    setShowSpkModal(false);
  };

  // Toggle Status SPK
  const toggleSpkStatus = (id: string) => {
    setSpkList((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const statusOrder: Record<SPKItem['status'], SPKItem['status']> = {
            'POTONG KAIN': 'PROSES JAHIT',
            'PROSES JAHIT': 'FINISHING',
            FINISHING: 'SELESAI QC',
            'SELESAI QC': 'POTONG KAIN',
          };
          return { ...item, status: statusOrder[item.status] };
        }
        return item;
      })
    );
  };

  // Submit Jadwal Konten
  const handleAddContent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newContentTitle.trim()) return;

    const newItem: ContentItem = {
      id: Date.now().toString(),
      title: newContentTitle.trim(),
      platform: newPlatform,
      talent: newTalent,
      shootDate: newShootDate || '2026-10-21',
      status: 'DRAFT HOOK',
    };

    setContentList([newItem, ...contentList]);
    setNewContentTitle('');
    setShowContentModal(false);
  };

  // Toggle Status Konten
  const toggleContentStatus = (id: string) => {
    setContentList((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const statusOrder: Record<ContentItem['status'], ContentItem['status']> = {
            'DRAFT HOOK': 'PROSES TAKE',
            'PROSES TAKE': 'EDITING',
            EDITING: 'READY UPLOAD',
            'READY UPLOAD': 'DRAFT HOOK',
          };
          return { ...item, status: statusOrder[item.status] };
        }
        return item;
      })
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-12">
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
            <button
              onClick={() => router.push('/dashboard/retur')}
              className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1"
            >
              <span>🔄</span> Retur & CS
            </button>
            <button className="bg-black text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1">
              <span>✂️</span> Produksi & Kreatif
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 pt-6">
        {/* Banner Judul & Switcher Tab */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-black mb-1">
              Manajemen Produksi & Konten Kreatif
            </h2>
            <p className="text-sm font-semibold text-gray-600">
              Monitoring SPK Konveksi (CMT) & Jadwal B-Roll Tim Kreatif Elen Store.
            </p>
          </div>

          <div className="flex bg-gray-100 p-1.5 rounded-2xl gap-1 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('CMT')}
              className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                activeTab === 'CMT'
                  ? 'bg-white text-black shadow-sm'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              <span>✂️</span> CMT Konveksi
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('KREATIF')}
              className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                activeTab === 'KREATIF'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              <span>📹</span> Tim Kreatif
            </button>
          </div>
        </div>

        {/* TAB 1: CMT KONVEKSI */}
        {activeTab === 'CMT' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black text-black">Daftar SPK Produksi Jahit</h3>
              <button
                type="button"
                onClick={() => setShowSpkModal(true)}
                className="bg-black hover:bg-gray-800 text-white font-black text-xs px-4 py-2.5 rounded-2xl transition-all flex items-center gap-1 shadow-md cursor-pointer"
              >
                <span>+</span> Tambah SPK CMT
              </button>
            </div>

            {spkList.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-5 border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="text-lg font-black text-black">{item.productName}</h4>
                    <span className="bg-blue-100 text-blue-700 text-xs font-black px-2.5 py-0.5 rounded-full">
                      {item.qty} Pcs
                    </span>
                  </div>
                  <p className="text-xs font-bold text-gray-600">
                    Vendor: <span className="text-black">{item.vendor}</span> • Target: {item.targetDate}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => toggleSpkStatus(item.id)}
                    className="bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-black px-4 py-2.5 rounded-xl transition-all border border-amber-300 flex items-center gap-1 cursor-pointer"
                    title="Klik untuk ubah progres jahit"
                  >
                    <span>🕒</span> {item.status}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: TIM KREATIF */}
        {activeTab === 'KREATIF' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black text-black">Jadwal Content & Sampel B-Roll</h3>
              <button
                type="button"
                onClick={() => setShowContentModal(true)}
                className="bg-pink-600 hover:bg-pink-700 text-white font-black text-xs px-4 py-2.5 rounded-2xl transition-all flex items-center gap-1 shadow-md cursor-pointer"
              >
                <span>+</span> Buat Jadwal Konten
              </button>
            </div>

            {contentList.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-5 border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="text-lg font-black text-black">{item.title}</h4>
                    <span
                      className={`text-xs font-black px-2.5 py-0.5 rounded-full ${
                        item.platform === 'TikTok'
                          ? 'bg-black text-white'
                          : 'bg-pink-100 text-pink-600'
                      }`}
                    >
                      {item.platform}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-gray-600">
                    Talent: <span className="text-black">{item.talent}</span> • Tanggal: {item.shootDate}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => toggleContentStatus(item.id)}
                  className="bg-purple-100 hover:bg-purple-200 text-purple-900 text-xs font-black px-4 py-2.5 rounded-xl transition-all border border-purple-300 flex items-center gap-1.5 cursor-pointer self-start md:self-auto"
                  title="Klik untuk lanjut ke tahap berikutnya"
                >
                  <span>🎬</span> {item.status}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* POPUP MODAL CMT */}
        {showSpkModal && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-300">
              <h3 className="text-xl font-black text-black mb-4">Form SPK Produksi CMT Baru</h3>
              <form onSubmit={handleAddSpk} className="space-y-4">
                <div>
                  <label className="block text-xs font-black text-black mb-1 uppercase">Nama Produk</label>
                  <input
                    type="text"
                    required
                    value={newProductName}
                    onChange={(e) => setNewProductName(e.target.value)}
                    placeholder="Contoh: Lavie Pants Black"
                    style={{ color: '#000000', backgroundColor: '#ffffff' }}
                    className="w-full bg-white border-2 border-gray-400 rounded-xl p-3 font-black text-black focus:outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-black mb-1 uppercase">Jumlah (Pcs)</label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={newQty}
                    onChange={(e) => setNewQty(e.target.value)}
                    placeholder="Contoh: 400"
                    style={{ color: '#000000', backgroundColor: '#ffffff' }}
                    className="w-full bg-white border-2 border-gray-400 rounded-xl p-3 font-black text-black focus:outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-black mb-1 uppercase">Vendor Konveksi</label>
                  <select
                    value={newVendor}
                    onChange={(e) => setNewVendor(e.target.value)}
                    style={{ color: '#000000', backgroundColor: '#ffffff' }}
                    className="w-full bg-white border-2 border-gray-400 rounded-xl p-3 font-black text-black focus:outline-none focus:border-black"
                  >
                    <option value="CV Taylor Pekalongan">CV Taylor Pekalongan</option>
                    <option value="Konveksi Berkah Pekalongan">Konveksi Berkah Pekalongan</option>
                    <option value="CMT Elen Store Utama">CMT Elen Store Utama</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-black mb-1 uppercase">Target Selesai</label>
                  <input
                    type="date"
                    value={newTargetDate}
                    onChange={(e) => setNewTargetDate(e.target.value)}
                    style={{ color: '#000000', backgroundColor: '#ffffff' }}
                    className="w-full bg-white border-2 border-gray-400 rounded-xl p-3 font-black text-black focus:outline-none focus:border-black"
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowSpkModal(false)}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-black font-extrabold py-3 rounded-xl text-xs"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-black text-white font-extrabold py-3 rounded-xl text-xs hover:bg-gray-800"
                  >
                    Simpan SPK
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* POPUP MODAL TIM KREATIF */}
        {showContentModal && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-300">
              <h3 className="text-xl font-black text-black mb-4">Buat Jadwal Konten Baru</h3>
              <form onSubmit={handleAddContent} className="space-y-4">
                <div>
                  <label className="block text-xs font-black text-black mb-1 uppercase">Judul / Konsep Konten</label>
                  <input
                    type="text"
                    required
                    value={newContentTitle}
                    onChange={(e) => setNewContentTitle(e.target.value)}
                    placeholder="Contoh: Fitcheck Lavie Pants B-Roll"
                    style={{ color: '#000000', backgroundColor: '#ffffff' }}
                    className="w-full bg-white border-2 border-gray-400 rounded-xl p-3 font-black text-black focus:outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-black mb-1 uppercase">Platform</label>
                  <select
                    value={newPlatform}
                    onChange={(e) => setNewPlatform(e.target.value as any)}
                    style={{ color: '#000000', backgroundColor: '#ffffff' }}
                    className="w-full bg-white border-2 border-gray-400 rounded-xl p-3 font-black text-black focus:outline-none focus:border-black"
                  >
                    <option value="TikTok">TikTok</option>
                    <option value="Instagram Reels">Instagram Reels</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-black mb-1 uppercase">Talent / Host</label>
                  <input
                    type="text"
                    value={newTalent}
                    onChange={(e) => setNewTalent(e.target.value)}
                    placeholder="Contoh: Incess / Duo Matcha"
                    style={{ color: '#000000', backgroundColor: '#ffffff' }}
                    className="w-full bg-white border-2 border-gray-400 rounded-xl p-3 font-black text-black focus:outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-black mb-1 uppercase">Tanggal Take Video</label>
                  <input
                    type="date"
                    value={newShootDate}
                    onChange={(e) => setNewShootDate(e.target.value)}
                    style={{ color: '#000000', backgroundColor: '#ffffff' }}
                    className="w-full bg-white border-2 border-gray-400 rounded-xl p-3 font-black text-black focus:outline-none focus:border-black"
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowContentModal(false)}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-black font-extrabold py-3 rounded-xl text-xs"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-pink-600 text-white font-extrabold py-3 rounded-xl text-xs hover:bg-pink-700"
                  >
                    Simpan Jadwal
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}