'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-gray-800 flex flex-col justify-between p-6">
      {/* Header Minimalis */}
      <header className="max-w-5xl mx-auto w-full flex items-center justify-between py-4 border-b border-[#EADEC9]">
        <div className="flex items-center gap-3">
          <img
            src="/logo-elenstore.jpeg"
            alt="Elen Store Logo"
            className="w-12 h-12 rounded-full border border-[#D4AF37] object-cover shadow-sm"
          />
          <div>
            <h1 className="text-lg font-bold tracking-widest text-[#5A4632]">ELEN STORE</h1>
            <p className="text-[10px] tracking-wider text-[#A38A68] uppercase font-semibold">
              Elegant • Feminine • Timeless
            </p>
          </div>
        </div>

        <button
          onClick={() => router.push('/login')}
          className="bg-[#D4AF37] hover:bg-[#B8952B] text-white px-5 py-2 rounded-2xl text-xs font-bold transition-all shadow-md cursor-pointer"
        >
          Login System
        </button>
      </header>

      {/* Hero Section */}
      <main className="max-w-3xl mx-auto w-full text-center py-12 my-auto flex flex-col items-center">
        <div className="relative mb-6">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#EADEC9] blur opacity-40"></div>
          <img
            src="/logo-elenstore.jpeg"
            alt="Elen Store Main Logo"
            className="relative w-44 h-44 md:w-56 md:h-56 rounded-full border-4 border-white shadow-2xl object-cover"
          />
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-[#4A3B2C] tracking-wide mb-3">
          ELEN STORE COLLECTION
        </h2>
        <p className="text-sm md:text-base font-medium text-[#7C6A58] max-w-lg mb-8 leading-relaxed">
          Sistem Manajemen Inventaris Gudang, SPK Produksi Konveksi, dan Jadwal Konten Kreatif Official Elen Store.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-sm">
          <button
            onClick={() => router.push('/login')}
            className="bg-[#4A3B2C] hover:bg-[#33281E] text-white font-bold py-3.5 px-8 rounded-2xl text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>🔐</span> Masuk ke Dashboard
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 border-t border-[#EADEC9] text-xs text-[#A38A68] font-medium">
        © 2026 Elen Store Collection. Managed by Incess & Team.
      </footer>
    </div>
  );
}