'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#4A3B2C] flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md w-full bg-white p-8 rounded-3xl shadow-lg border border-[#EADEC9]">
        <img
          src="/logo-elenstore.jpeg"
          alt="Elen Store Logo"
          width="120"
          height="120"
          className="mx-auto rounded-full object-cover border-2 border-[#D4AF37] mb-4"
        />
        <h1 className="text-2xl font-bold tracking-wide text-[#5A4632] mb-1">
          ELEN STORE COLLECTION
        </h1>
        <p className="text-xs text-[#A38A68] uppercase font-semibold tracking-wider mb-6">
          Elegant • Feminine • Timeless
        </p>
        <button
          onClick={() => router.push('/dashboard/admin')}
          className="w-full bg-[#4A3B2C] hover:bg-[#33281E] text-white font-bold py-3 rounded-2xl text-xs transition-all shadow-md cursor-pointer"
        >
          🔐 Masuk ke Dashboard
        </button>
      </div>
    </div>
  );
}