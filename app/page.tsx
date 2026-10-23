'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#4A3B2C] flex flex-col justify-between p-6">
      {/* Header Top Nav */}
      <header className="max-w-5xl mx-auto w-full flex items-center justify-between py-4 border-b border-[#EADEC9]">
        <div className="flex items-center gap-3">
          <img
            src="/logo-elenstore.jpeg"
            alt="Elen Store Logo"
            className="w-10 h-10 rounded-full object-cover border border-[#D4AF37] shadow-sm"
          />
          <div>
            <h1 className="text-base font-bold tracking-widest text-[#5A4632]">ELEN STORE</h1>
            <p className="text-[9px] tracking-wider text-[#A38A68] uppercase font-semibold">
              Elegant • Feminine • Timeless
            </p>
          </div>
        </div>

        <button
          onClick={() => router.push('/login')}
          className="bg-[#D4AF37] hover:bg-[#B8952B] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer"
        >
          Login System
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto w-full text-center py-12 my-auto flex flex-col items-center">
        <div className="relative mb-6">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto">
            <img
              src="/logo-elenstore.jpeg"
              alt="Elen Store Main Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h2 className="text-2xl md:text-4xl font-black text-[#4A3B2C] tracking-wide mb-3">
          ELEN STORE COLLECTION
        </h2>
        <p className="text-xs md:text-sm font-medium text-[#7C6A58] max-w-md mb-8 leading-relaxed">
          Sistem Manajemen Inventaris Gudang, SPK Produksi Konveksi, dan Jadwal Konten Kreatif Official Elen Store.
        </p>

        <button
          onClick={() => router.push('/dashboard/admin')}
          className="bg-[#4A3B2C] hover:bg-[#33281E] text-white font-bold py-3.5 px-8 rounded-2xl text-xs md:text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>🔐</span> Masuk ke Dashboard
        </button>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 border-t border-[#EADEC9] text-[11px] text-[#A38A68] font-medium">
        © 2026 Elen Store Collection. Managed by Incess & Team.
      </footer>
    </div>
  );
}