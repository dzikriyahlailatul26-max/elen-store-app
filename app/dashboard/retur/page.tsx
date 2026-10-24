'use client';

import React, { useState } from 'react';

export default function ReturPage() {
  const [orderId, setOrderId] = useState('');
  const [skuRetur, setSkuRetur] = useState('');
  const [alasan, setAlasan] = useState('Cacat Produksi / Jahitan Rusak');
  const [platform, setPlatform] = useState<'tiktok' | 'shopee'>('tiktok');
  const [bintang, setBintang] = useState<number>(1);
  const [ulasan, setUlasan] = useState('');

  const handleSimpanRetur = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Data retur berhasil disimpan!');
    setOrderId('');
    setSkuRetur('');
  };

  const handleTugaskanCS = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Tiket ulasan buruk berhasil ditugaskan ke CS!');
    setUlasan('');
  };

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', paddingTop: '10px' }}>
      
      {/* Banner Judul Modul */}
      <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '28px 32px', border: '1px solid #E2E8F0', marginBottom: '28px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '900', color: '#000000', margin: '0 0 6px 0', letterSpacing: '-0.3px' }}>
          Modul Retur (RMA) & Handling Ulasan CS
        </h2>
        <p style={{ fontSize: '13px', color: '#64748B', margin: 0 }}>
          Pencatatan retur barang 2% harian & tiket penanganan ulasan buruk Elen Store.
        </p>
      </div>

      {/* Grid 2 Kolom Form */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
        
        {/* FORM KIRI: Pencatatan Barang Retur */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '28px', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
            <span style={{ backgroundColor: '#3B82F6', color: '#ffffff', width: '26px', height: '26px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 'bold' }}>🔄</span>
            <h3 style={{ fontSize: '16px', fontWeight: '900', color: '#DC2626', margin: 0 }}>
              Pencatatan Barang Retur
            </h3>
          </div>

          <form onSubmit={handleSimpanRetur}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', letterSpacing: '0.8px', color: '#000000', marginBottom: '8px' }}>
                NO. PESANAN / ORDER ID
              </label>
              <input type="text" required placeholder="Contoh: TT-20260920-001" value={orderId} onChange={(e) => setOrderId(e.target.value)} style={{ width: '100%', padding: '14px 16px', borderRadius: '16px', border: '2px solid #94A3B8', outline: 'none', fontSize: '13px', fontWeight: '600', boxSizing: 'border-box' }} />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', letterSpacing: '0.8px', color: '#000000', marginBottom: '8px' }}>
                SKU PRODUK RETUR
              </label>
              <input type="text" required placeholder="Contoh: LAVIE-NEW-HITAM-M" value={skuRetur} onChange={(e) => setSkuRetur(e.target.value)} style={{ width: '100%', padding: '14px 16px', borderRadius: '16px', border: '2px solid #94A3B8', outline: 'none', fontSize: '13px', fontWeight: '600', boxSizing: 'border-box' }} />
            </div>

            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', letterSpacing: '0.8px', color: '#000000', marginBottom: '8px' }}>
                ALASAN RETUR
              </label>
              <select value={alasan} onChange={(e) => setAlasan(e.target.value)} style={{ width: '100%', padding: '14px 16px', borderRadius: '16px', border: '2px solid #94A3B8', outline: 'none', fontSize: '13px', fontWeight: '700', backgroundColor: '#ffffff', boxSizing: 'border-box', cursor: 'pointer' }}>
                <option value="Cacat Produksi / Jahitan Rusak">Cacat Produksi / Jahitan Rusak</option>
                <option value="Salah Kirim Size / Warna">Salah Kirim Size / Warna</option>
                <option value="Kain Sobek / Noda">Kain Sobek / Noda</option>
              </select>
            </div>

            <button type="submit" style={{ width: '100%', backgroundColor: '#0F172A', color: '#ffffff', border: 'none', padding: '16px', borderRadius: '16px', fontSize: '14px', fontWeight: '800', cursor: 'pointer' }}>
              Simpan Data Retur
            </button>
          </form>
        </div>

        {/* FORM KANAN: Tiket Penanganan Ulasan Buruk */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '28px', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
            <span style={{ fontSize: '18px' }}>⚠️</span>
            <h3 style={{ fontSize: '16px', fontWeight: '900', color: '#D97706', margin: 0 }}>
              Tiket Penanganan Ulasan Buruk
            </h3>
          </div>

          <form onSubmit={handleTugaskanCS}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', letterSpacing: '0.8px', color: '#000000', marginBottom: '8px' }}>
                PLATFORM
              </label>
              <div style={{ display: 'flex', backgroundColor: '#F1F5F9', padding: '4px', borderRadius: '14px' }}>
                <button type="button" onClick={() => setPlatform('tiktok')} style={{ flex: 1, padding: '10px', borderRadius: '12px', fontSize: '12px', fontWeight: '800', border: 'none', cursor: 'pointer', backgroundColor: platform === 'tiktok' ? '#000000' : 'transparent', color: platform === 'tiktok' ? '#ffffff' : '#64748B' }}>TikTok Shop</button>
                <button type="button" onClick={() => setPlatform('shopee')} style={{ flex: 1, padding: '10px', borderRadius: '12px', fontSize: '12px', fontWeight: '800', border: 'none', cursor: 'pointer', backgroundColor: platform === 'shopee' ? '#EE4D2D' : 'transparent', color: platform === 'shopee' ? '#ffffff' : '#64748B' }}>Shopee</button>
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', letterSpacing: '0.8px', color: '#000000', marginBottom: '8px' }}>
                BINTANG ULASAN
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                {[1, 2, 3].map((star) => (
                  <button key={star} type="button" onClick={() => setBintang(star)} style={{ flex: 1, padding: '10px 4px', borderRadius: '12px', fontSize: '12px', fontWeight: '800', cursor: 'pointer', border: bintang === star ? '2px solid #F59E0B' : '1px solid #CBD5E1', backgroundColor: bintang === star ? '#FEF3C7' : '#ffffff', color: bintang === star ? '#92400E' : '#475569' }}>
                    ⭐ {star} Bintang
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', letterSpacing: '0.8px', color: '#000000', marginBottom: '8px' }}>
                ISI ULASAN PEMBELI
              </label>
              <textarea rows={3} placeholder="Misal: Jahitan di bagian paha lepas saat pertama dipake..." value={ulasan} onChange={(e) => setUlasan(e.target.value)} style={{ width: '100%', padding: '14px 16px', borderRadius: '16px', border: '2px solid #94A3B8', outline: 'none', fontSize: '13px', fontWeight: '600', boxSizing: 'border-box', fontFamily: 'sans-serif', resize: 'none' }} />
            </div>

            <button type="submit" style={{ width: '100%', backgroundColor: '#FF5700', color: '#ffffff', border: 'none', padding: '16px', borderRadius: '16px', fontSize: '14px', fontWeight: '800', cursor: 'pointer' }}>
              Tugaskan ke CS untuk Follow Up
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}