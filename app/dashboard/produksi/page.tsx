'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ProduksiKreatifPage() {
  const router = useRouter();
  const [tab, setTab] = useState<'cmt' | 'kreatif'>('kreatif');

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#4A3B2C] pb-12">
      {/* Header Navigasi */}
      <header className="bg-white/80 backdrop-blur-md border-b border-[#EADEC9] sticky top-0 z-50 px-4 py-3">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#D4AF37]">
              <Image src="/logo-elenstore.jpeg" alt="Elen Store Logo" fill className="object-cover" />
            </div>
            <div>
              <h1 className="font-bold text-base tracking-widest text-[#5A4632]">ELEN STORE</h1>
              <p className="text-[9px] text-[#A38A68] tracking-wider uppercase font-semibold">Produksi & Tim Kreatif</p>
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <button
              onClick={() => router.push('/dashboard/admin')}
              className="flex items-center gap-1.5 whitespace-nowrap bg-white hover:bg-[#F5EFE6] text-[#5A4632] border border-[#EADEC9] text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer"
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
              className="flex items-center gap-1.5 whitespace-nowrap bg-[#4A3B2C] text-white text-xs font-bold px-4 py-2 rounded-xl shadow-sm cursor-pointer"
            >
              ✂️ Produksi & Kreatif
            </button>
          </div>
        </div>
      </header>

      {/* Main Area */}
      <main className="max-w-5xl mx-auto px-4 mt-8">
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-[#EADEC9] mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-[#4A3B2C]">Manajemen Produksi & Konten Kreatif</h2>
            <p className="text-xs text-[#8C7A6B]">Monitoring SPK Konveksi (CMT) & Jadwal B-Roll Tim Kreatif Elen Store.</p>
          </div>

          <div className="flex gap-2 p-1 bg-[#F5EFE6] rounded-2xl text-xs font-bold w-full sm:w-auto">
            <button
              onClick={() => setTab('cmt')}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-xl transition-all ${
                tab === 'cmt' ? 'bg-[#4A3B2C] text-white shadow-sm' : 'text-[#7C6A58]'
              }`}
            >
              ✂️ CMT Konveksi
            </button>
            <button
              onClick={() => setTab('kreatif')}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-xl transition-all ${
                tab === 'kreatif' ? 'bg-[#4A3B2C] text-white shadow-sm' : 'text-[#7C6A58]'
              }`}
            >
              📹 Tim Kreatif
            </button>
          </div>
        </div>

        {/* Content Section */}
        {tab === 'cmt' ? (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-sm text-[#5A4632] uppercase tracking-wider">Daftar SPK Produksi Jahit</h3>
              <button className="bg-[#D4AF37] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#B8952B] transition-all cursor-pointer">
                + Tambah SPK CMT
              </button>
            </div>

            <div className="bg-white p-5 rounded-3xl border border-[#EADEC9] shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-base text-[#4A3B2C]">Lavie Pants Black</h4>
                  <span className="bg-[#F5EFE6] text-[#5A4632] text-[10px] font-bold px-2 py-0.5 rounded-md">
                    500 Pcs
                  </span>
                </div>
                <p className="text-xs text-[#8C7A6B] mt-1">Vendor: CV Taylor Pekalongan • Target: 2026-10-25</p>
              </div>
              <span className="bg-[#FFF8E7] text-[#B8952B] border border-[#EADEC9] text-xs font-bold px-3 py-1.5 rounded-xl self-start sm:self-auto">
                ⏳ PROSES JAHIT
              </span>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-sm text-[#5A4632] uppercase tracking-wider">Jadwal Content & Sampel B-Roll</h3>
              <button className="bg-[#D4AF37] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#B8952B] transition-all cursor-pointer">
                + Buat Jadwal Konten
              </button>
            </div>

            <div className="bg-white p-5 rounded-3xl border border-[#EADEC9] shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-base text-[#4A3B2C]">Fitcheck Lavie Pants Black M</h4>
                  <span className="bg-[#4A3B2C] text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                    TikTok
                  </span>
                </div>
                <p className="text-xs text-[#8C7A6B] mt-1">Talent: Incess & Team • Tanggal: 2026-10-20</p>
              </div>
              <span className="bg-[#F5EFE6] text-[#5A4632] border border-[#EADEC9] text-xs font-bold px-3 py-1.5 rounded-xl self-start sm:self-auto">
                🎬 PROSES TAKE
              </span>
            </div>

            <div className="bg-white p-5 rounded-3xl border border-[#EADEC9] shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-base text-[#4A3B2C]">Spill Outfit Kuliah Lavie Pants</h4>
                  <span className="bg-[#EADEC9] text-[#5A4632] text-[10px] font-bold px-2 py-0.5 rounded-md">
                    Instagram Reels
                  </span>
                </div>
                <p className="text-xs text-[#8C7A6B] mt-1">Talent: Duo Matcha • Tanggal: 2026-10-22</p>
              </div>
              <span className="bg-[#FAF7F2] text-[#8C7A6B] border border-[#EADEC9] text-xs font-bold px-3 py-1.5 rounded-xl self-start sm:self-auto">
                📝 DRAFT HOOK
              </span>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}