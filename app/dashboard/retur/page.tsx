'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ReturPage() {
  const router = useRouter();
  const [orderId, setOrderId] = useState('');
  const [sku, setSku] = useState('');
  const [reason, setReason] = useState('Cacat Produksi / Jahitan Rusak');
  const [platform, setPlatform] = useState('TikTok Shop');
  const [rating, setRating] = useState(1);
  const [reviewText, setReviewText] = useState('');

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
              <p className="text-[9px] text-[#A38A68] tracking-wider uppercase font-semibold">Retur & Handling CS</p>
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
              className="flex items-center gap-1.5 whitespace-nowrap bg-[#4A3B2C] text-white text-xs font-bold px-4 py-2 rounded-xl shadow-sm cursor-pointer"
            >
              🔄 Retur & CS
            </button>
            <button
              onClick={() => router.push('/dashboard/produksi')}
              className="flex items-center gap-1.5 whitespace-nowrap bg-white hover:bg-[#F5EFE6] text-[#5A4632] border border-[#EADEC9] text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer"
            >
              ✂️ Produksi & Kreatif
            </button>
          </div>
        </div>
      </header>

      {/* Content Container */}
      <main className="max-w-5xl mx-auto px-4 mt-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-[#4A3B2C]">Modul Retur (RMA) & Handling Ulasan CS</h2>
          <p className="text-xs text-[#8C7A6B] mt-1">Pencatatan retur harian & tiket penanganan ulasan pembeli Elen Store.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Form Retur */}
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-[#EADEC9]">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">🔄</span>
              <h3 className="font-bold text-sm text-[#5A4632] uppercase tracking-wider">Pencatatan Barang Retur</h3>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#7C6A58] mb-1">No. Pesanan / Order ID</label>
                <input
                  type="text"
                  placeholder="Contoh: TT-20260920-001"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#EADEC9] rounded-2xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#7C6A58] mb-1">SKU Produk Retur</label>
                <input
                  type="text"
                  placeholder="Contoh: LAVIE-NEW-HITAM-M"
                  value={sku}
                  onChange={(e) => setSku(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#EADEC9] rounded-2xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#7C6A58] mb-1">Alasan Retur</label>
                <select
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#EADEC9] rounded-2xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#D4AF37]"
                >
                  <option>Cacat Produksi / Jahitan Rusak</option>
                  <option>Salah Kirim Ukuran/Warna</option>
                  <option>Bahan Tidak Sesuai</option>
                  <option>Paket Rusak di Ekspedisi</option>
                </select>
              </div>

              <button
                type="button"
                className="w-full bg-[#5A4632] hover:bg-[#3E2F21] text-white font-bold py-3 rounded-2xl text-xs transition-all shadow-md mt-2 cursor-pointer"
              >
                Simpan Data Retur
              </button>
            </form>
          </div>

          {/* Form Handling CS */}
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-[#EADEC9]">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">⚠️</span>
              <h3 className="font-bold text-sm text-[#5A4632] uppercase tracking-wider">Tiket Penanganan Ulasan Buruk</h3>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#7C6A58] mb-1">Platform</label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-[#F5EFE6] rounded-2xl text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setPlatform('TikTok Shop')}
                    className={`py-2 rounded-xl transition-all ${
                      platform === 'TikTok Shop' ? 'bg-[#4A3B2C] text-white shadow-sm' : 'text-[#7C6A58]'
                    }`}
                  >
                    TikTok Shop
                  </button>
                  <button
                    type="button"
                    onClick={() => setPlatform('Shopee')}
                    className={`py-2 rounded-xl transition-all ${
                      platform === 'Shopee' ? 'bg-[#4A3B2C] text-white shadow-sm' : 'text-[#7C6A58]'
                    }`}
                  >
                    Shopee
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#7C6A58] mb-1">Bintang Ulasan</label>
                <div className="flex gap-2">
                  {[1, 2, 3].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                        rating === star
                          ? 'bg-[#D4AF37] border-[#D4AF37] text-white'
                          : 'bg-[#FAF7F2] border-[#EADEC9] text-[#7C6A58]'
                      }`}
                    >
                      ⭐ {star} Bintang
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#7C6A58] mb-1">Isi Ulasan Pembeli</label>
                <textarea
                  rows={3}
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Misal: Jahitan di bagian paha lepas saat pertama dipake..."
                  className="w-full bg-[#FAF7F2] border border-[#EADEC9] rounded-2xl p-3 text-xs focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <button
                type="button"
                className="w-full bg-[#D4AF37] hover:bg-[#B8952B] text-white font-bold py-3 rounded-2xl text-xs transition-all shadow-md mt-2 cursor-pointer"
              >
                Tugaskan ke CS untuk Follow Up
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}