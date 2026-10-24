'use client';

import React, { useState } from 'react';

export default function ReturPage() {
  const [orderId, setOrderId] = useState('');
  const [skuRetur, setSkuRetur] = useState('');
  const [alasan, setAlasan] = useState('Cacat Produksi / Jahitan Rusak');
  const [platform, setPlatform] = useState<'tiktok' | 'shopee'>('tiktok');
  const [bintang, setBintang] = useState<number>(1);
  const [ulasan, setUlasan] = useState('');

  return (
    <div>
      <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '24px', border: '1px solid #F0E8DD', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#4A3B2C', margin: '0 0 6px 0' }}>
          Modul Retur (RMA) & Handling Ulasan CS
        </h2>
        <p style={{ fontSize: '12px', color: '#7C6A58', margin: 0 }}>
          Pencatatan retur barang 2% harian & tiket penanganan ulasan buruk Elen Store.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        
        {/* RETUR FORM */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '24px', border: '1px solid #F0E8DD', boxShadow: '0 6px 20px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <span style={{ fontSize: '16px' }}>📉</span>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#D9534F', margin: 0 }}>Pencatatan Barang Retur</h3>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '10px', fontWeight: 'bold', color: '#64748B', marginBottom: '6px' }}>NO. PESANAN / ORDER ID</label>
            <input type="text" placeholder="Contoh: TT-20260920-001" value={orderId} onChange={(e) => setOrderId(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '12px', boxSizing: 'border-box' }} />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '10px', fontWeight: 'bold', color: '#64748B', marginBottom: '6px' }}>SKU PRODUK RETUR</label>
            <input type="text" placeholder="Contoh: LAVIE-NEW-HITAM-M" value={skuRetur} onChange={(e) => setSkuRetur(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '12px', boxSizing: 'border-box' }} />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '10px', fontWeight: 'bold', color: '#64748B', marginBottom: '6px' }}>ALASAN RETUR</label>
            <select value={alasan} onChange={(e) => setAlasan(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '12px', backgroundColor: '#fff', boxSizing: 'border-box' }}>
              <option value="Cacat Produksi / Jahitan Rusak">Cacat Produksi / Jahitan Rusak</option>
              <option value="Salah Kirim Size / Warna">Salah Kirim Size / Warna</option>
              <option value="Kain Sobek / Noda">Kain Sobek / Noda</option>
            </select>
          </div>

          <button style={{ width: '100%', backgroundColor: '#0F172A', color: '#ffffff', border: 'none', padding: '12px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}>
            Simpan Data Retur
          </button>
        </div>

        {/* CS TICKET FORM */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '24px', border: '1px solid #F0E8DD', boxShadow: '0 6px 20px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <span style={{ fontSize: '16px' }}>⚠️</span>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#E67E22', margin: 0 }}>Tiket Penanganan Ulasan Buruk</h3>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '10px', fontWeight: 'bold', color: '#64748B', marginBottom: '6px' }}>PLATFORM</label>
            <div style={{ display: 'flex', backgroundColor: '#F8F6F0', padding: '4px', borderRadius: '12px' }}>
              <button type="button" onClick={() => setPlatform('tiktok')} style={{ flex: 1, padding: '8px', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold', border: 'none', cursor: 'pointer', backgroundColor: platform === 'tiktok' ? '#000000' : 'transparent', color: platform === 'tiktok' ? '#ffffff' : '#64748B' }}>TikTok Shop</button>
              <button type="button" onClick={() => setPlatform('shopee')} style={{ flex: 1, padding: '8px', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold', border: 'none', cursor: 'pointer', backgroundColor: platform === 'shopee' ? '#EE4D2D' : 'transparent', color: platform === 'shopee' ? '#ffffff' : '#64748B' }}>Shopee</button>
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '10px', fontWeight: 'bold', color: '#64748B', marginBottom: '6px' }}>BINTANG ULASAN</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[1, 2, 3].map((star) => (
                <button key={star} type="button" onClick={() => setBintang(star)} style={{ flex: 1, padding: '8px', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', border: bintang === star ? '1px solid #D4AF37' : '1px solid #E2E8F0', backgroundColor: bintang === star ? '#FFFDF0' : '#ffffff', color: bintang === star ? '#D4AF37' : '#64748B' }}>
                  ⭐ {star} Bintang
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '10px', fontWeight: 'bold', color: '#64748B', marginBottom: '6px' }}>ISI ULASAN PEMBELI</label>
            <textarea rows={3} placeholder="Misal: Jahitan di bagian paha lepas saat pertama dipake..." value={ulasan} onChange={(e) => setUlasan(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '12px', boxSizing: 'border-box', fontFamily: 'sans-serif' }} />
          </div>

          <button style={{ width: '100%', backgroundColor: '#D4AF37', color: '#ffffff', border: 'none', padding: '12px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}>
            Tugaskan ke CS untuk Follow Up
          </button>
        </div>

      </div>
    </div>
  );
}