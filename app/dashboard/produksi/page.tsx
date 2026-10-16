'use client';

import { useState } from 'react';
import { Scissors, Video, Plus, CheckCircle2, Clock } from 'lucide-react';

export default function ProduksiDanKreatifPage() {
  const [activeTab, setActiveTab] = useState<'CMT' | 'KREATIF'>('CMT');

  // Data Sample Produksi CMT
  const [cmtList] = useState([
    { id: 1, cmtName: 'CV Taylor Pekalongan', product: 'New Lavie Pants', qty: 500, status: 'PROSES_JAHIT', deadline: '2026-10-25' },
    { id: 2, cmtName: 'Konveksi Berkah', product: 'Aira Ballon Pants', qty: 300, status: 'POTONG_KAIN', deadline: '2026-10-28' },
  ]);

  // Data Sample Konten Kreatif
  const [contentList] = useState([
    { id: 1, title: 'Fitcheck New Lavie Pants Hitam M', platform: 'TikTok', status: 'SIAP_POST', date: '2026-10-17' },
    { id: 2, title: 'B-Roll Detail Bahan Kea Pants', platform: 'Instagram', status: 'EDITING', date: '2026-10-18' },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 max-w-5xl mx-auto space-y-6">
      {/* Header Dashboard */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Manajemen Produksi & Konten Kreatif</h1>
          <p className="text-sm text-gray-500">Monitoring SPK Konveksi (CMT) & Jadwal B-Roll Tim Kreatif Elen Store.</p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-gray-100 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('CMT')}
            className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-all ${
              activeTab === 'CMT' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
            }`}
          >
            <Scissors className="w-4 h-4" /> CMT Konveksi
          </button>
          <button
            onClick={() => setActiveTab('KREATIF')}
            className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-all ${
              activeTab === 'KREATIF' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
            }`}
          >
            <Video className="w-4 h-4" /> Tim Kreatif
          </button>
        </div>
      </div>

      {/* Konten Tab CMT */}
      {activeTab === 'CMT' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-800">Daftar SPK Produksi Jahit</h2>
            <button className="px-4 py-2 bg-gray-900 text-white rounded-xl text-xs font-bold flex items-center gap-1 hover:bg-gray-800">
              <Plus className="w-4 h-4" /> Tambah SPK CMT
            </button>
          </div>

          <div className="grid gap-4">
            {cmtList.map((item) => (
              <div key={item.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900">{item.product}</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-semibold">{item.qty} Pcs</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Vendor: <span className="font-medium text-gray-700">{item.cmtName}</span> • Target: {item.deadline}</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {item.status.replace('_', ' ')}
                  </span>
                  <button className="px-3 py-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg text-xs font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Selesai QC
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Konten Tab Kreatif */}
      {activeTab === 'KREATIF' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-800">Jadwal Content & Sampel B-Roll</h2>
            <button className="px-4 py-2 bg-rose-600 text-white rounded-xl text-xs font-bold flex items-center gap-1 hover:bg-rose-700">
              <Plus className="w-4 h-4" /> Buat Jadwal Konten
            </button>
          </div>

          <div className="grid gap-4">
            {contentList.map((item) => (
              <div key={item.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900">{item.title}</span>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${item.platform === 'TikTok' ? 'bg-black text-white' : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'}`}>
                      {item.platform}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Rencana Tayang: {item.date}</p>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-700">
                  {item.status.replace('_', ' ')}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}