'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function UnifiedElenStoreDashboard() {
  // Navigation State Switcher Modul Utama
  const [activeTab, setActiveTab] = useState<'admin' | 'retur' | 'produksi'>('admin');
  
  // Navigation Sub-Tab Produksi
  const [activeTabProduksi, setActiveTabProduksi] = useState<'cmt' | 'kreatif'>('cmt');

  // State Form Admin Gudang
  const [jenisTxAdmin, setJenisTxAdmin] = useState<'keluar' | 'restok'>('keluar');
  const [skuAdmin, setSkuAdmin] = useState('');
  const [jumlahAdmin, setJumlahAdmin] = useState('1');
  const [catatanAdmin, setCatatanAdmin] = useState('');

  // State Form Retur & CS
  const [noResi, setNoResi] = useState('');
  const [skuRetur, setSkuRetur] = useState('');
  const [alasanRetur, setAlasanRetur] = useState('Cacat Produksi / Jahitan Rusak');
  const [platformCS, setPlatformCS] = useState<'tiktok' | 'shopee'>('tiktok');
  const [bintangCS, setBintangCS] = useState<1 | 2 | 3>(1);
  const [ulasanCS, setUlasanCS] = useState('');

  // State Modal Produksi & Kreatif
  const [showModalCMT, setShowModalCMT] = useState(false);
  const [namaProdukCMT, setNamaProdukCMT] = useState('');
  const [jumlahPcsCMT, setJumlahPcsCMT] = useState('');

  const [showModalKreatif, setShowModalKreatif] = useState(false);
  const [judulKonten, setJudulKonten] = useState('');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF7F2', fontFamily: 'sans-serif', color: '#4A3B2C', display: 'flex', flexDirection: 'column' }}>
      
      {/* 1. HEADER TOPBAR APLIKASI SUNGGUHAN */}
      <header style={{ 
        backgroundColor: '#ffffff', 
        borderBottom: '1px solid #E2E8F0', 
        padding: '16px 40px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
      }}>
        {/* Brand Logo Left */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', border: '1px solid #D4AF37', backgroundColor: '#FAF7F2' }}>
            <img 
              src="/logo-elenstore.jpeg" 
              alt="Elen Store Logo" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
            />
          </div>
          <div>
            <h1 style={{ fontSize: '16px', fontWeight: '900', letterSpacing: '1px', color: '#3E3225', margin: 0 }}>
              ELEN STORE
            </h1>
            <span style={{ backgroundColor: '#F5E6D3', color: '#8C6239', fontSize: '9px', fontWeight: '800', padding: '2px 6px', borderRadius: '6px', letterSpacing: '0.5px' }}>
              SYSTEM
            </span>
          </div>
        </Link>

        {/* TOPBAR NAVIGATION SWITCHER */}
        <nav style={{ display: 'flex', gap: '10px' }}>
          <button
            type="button"
            onClick={() => setActiveTab('admin')}
            style={{
              padding: '10px 20px', borderRadius: '12px', fontSize: '12px', fontWeight: '800', border: 'none', cursor: 'pointer',
              backgroundColor: activeTab === 'admin' ? '#0F172A' : 'transparent',
              color: activeTab === 'admin' ? '#ffffff' : '#64748B',
              boxShadow: activeTab === 'admin' ? '0 4px 12px rgba(15,23,42,0.15)' : 'none'
            }}
          >
            📦 Admin Gudang
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('retur')}
            style={{
              padding: '10px 20px', borderRadius: '12px', fontSize: '12px', fontWeight: '800', border: 'none', cursor: 'pointer',
              backgroundColor: activeTab === 'retur' ? '#0F172A' : 'transparent',
              color: activeTab === 'retur' ? '#ffffff' : '#64748B',
              boxShadow: activeTab === 'retur' ? '0 4px 12px rgba(15,23,42,0.15)' : 'none'
            }}
          >
            🔄 Retur & CS
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('produksi')}
            style={{
              padding: '10px 20px', borderRadius: '12px', fontSize: '12px', fontWeight: '800', border: 'none', cursor: 'pointer',
              backgroundColor: activeTab === 'produksi' ? '#0F172A' : 'transparent',
              color: activeTab === 'produksi' ? '#ffffff' : '#64748B',
              boxShadow: activeTab === 'produksi' ? '0 4px 12px rgba(15,23,42,0.15)' : 'none'
            }}
          >
            ✂️ Produksi & Kreatif
          </button>
        </nav>
      </header>

      {/* 2. KONTEN MODUL AKTIF */}
      <main style={{ flex: 1, padding: '32px 20px', maxWidth: '1020px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        
        {/* MODUL 1: ADMIN GUDANG */}
        {activeTab === 'admin' && (
          <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '36px', border: '1px solid #E2E8F0', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', maxWidth: '560px', margin: '0 auto' }}>
            <div style={{ display: 'flex', backgroundColor: '#FAF7F2', padding: '6px', borderRadius: '16px', marginBottom: '28px' }}>
              <button
                type="button"
                onClick={() => setJenisTxAdmin('keluar')}
                style={{
                  flex: 1, padding: '12px', borderRadius: '12px', fontSize: '12px', fontWeight: '800', border: 'none', cursor: 'pointer',
                  backgroundColor: jenisTxAdmin === 'keluar' ? '#4A3B2C' : 'transparent',
                  color: jenisTxAdmin === 'keluar' ? '#ffffff' : '#8C6239'
                }}
              >
                Ambil (Barang Keluar)
              </button>
              <button
                type="button"
                onClick={() => setJenisTxAdmin('restok')}
                style={{
                  flex: 1, padding: '12px', borderRadius: '12px', fontSize: '12px', fontWeight: '800', border: 'none', cursor: 'pointer',
                  backgroundColor: jenisTxAdmin === 'restok' ? '#4A3B2C' : 'transparent',
                  color: jenisTxAdmin === 'restok' ? '#ffffff' : '#8C6239'
                }}
              >
                Tambah (Restok)
              </button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert('Transaksi Gudang Berhasil Disimpan!'); }}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', letterSpacing: '0.8px', color: '#64748B', marginBottom: '8px' }}>
                  KODE SKU PRODUK
                </label>
                <input
                  type="text"
                  required
                  placeholder="misal: lavie pants"
                  value={skuAdmin}
                  onChange={(e) => setSkuAdmin(e.target.value)}
                  style={{ width: '100%', padding: '14px 16px', borderRadius: '16px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '13px', fontWeight: '600', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', letterSpacing: '0.8px', color: '#64748B', marginBottom: '8px' }}>
                  JUMLAH (PCS)
                </label>
                <input
                  type="number"
                  required
                  value={jumlahAdmin}
                  onChange={(e) => setJumlahAdmin(e.target.value)}
                  style={{ width: '100%', padding: '14px 16px', borderRadius: '16px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '13px', fontWeight: '600', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', letterSpacing: '0.8px', color: '#64748B', marginBottom: '8px' }}>
                  CATATAN / KETERANGAN
                </label>
                <input
                  type="text"
                  placeholder="Misal: Diambil tim packing TikTok"
                  value={catatanAdmin}
                  onChange={(e) => setCatatanAdmin(e.target.value)}
                  style={{ width: '100%', padding: '14px 16px', borderRadius: '16px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '13px', fontWeight: '600', boxSizing: 'border-box' }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%', backgroundColor: '#D4AF37', color: '#ffffff', border: 'none', padding: '16px', borderRadius: '16px', fontSize: '13px', fontWeight: '800', cursor: 'pointer', boxShadow: '0 4px 12px rgba(212, 175, 55, 0.25)'
                }}
              >
                📌 Simpan & Auto Broadcast WA
              </button>
            </form>
          </div>
        )}

        {/* MODUL 2: RETUR & CS */}
        {activeTab === 'retur' && (
          <div>
            <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '24px 32px', border: '1px solid #E2E8F0', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#000000', margin: '0 0 6px 0' }}>
                Modul Retur (RMA) & Handling Ulasan CS
              </h2>
              <p style={{ fontSize: '13px', color: '#64748B', margin: 0 }}>
                Pencatatan retur barang 2% harian & tiket penanganan ulasan buruk Elen Store.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              {/* Form Retur Left */}
              <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '28px', border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <span style={{ backgroundColor: '#EFF6FF', color: '#2563EB', padding: '8px', borderRadius: '10px', fontSize: '14px' }}>🔄</span>
                  <h3 style={{ fontSize: '15px', fontWeight: '900', color: '#DC2626', margin: 0 }}>Pencatatan Barang Retur</h3>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); alert('Data Retur Disimpan!'); }}>
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', color: '#000', marginBottom: '6px' }}>NO. PESANAN / ORDER ID</label>
                    <input type="text" required placeholder="Contoh: TT-20260920-001" value={noResi} onChange={(e) => setNoResi(e.target.value)} style={{ width: '100%', padding: '12px 14px', borderRadius: '14px', border: '1px solid #CBD5E1', boxSizing: 'border-box' }} />
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', color: '#000', marginBottom: '6px' }}>SKU PRODUK RETUR</label>
                    <input type="text" required placeholder="Contoh: LAVIE-NEW-HITAM-M" value={skuRetur} onChange={(e) => setSkuRetur(e.target.value)} style={{ width: '100%', padding: '12px 14px', borderRadius: '14px', border: '1px solid #CBD5E1', boxSizing: 'border-box' }} />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', color: '#000', marginBottom: '6px' }}>ALASAN RETUR</label>
                    <select value={alasanRetur} onChange={(e) => setAlasanRetur(e.target.value)} style={{ width: '100%', padding: '12px 14px', borderRadius: '14px', border: '1px solid #CBD5E1', backgroundColor: '#fff', boxSizing: 'border-box' }}>
                      <option value="Cacat Produksi / Jahitan Rusak">Cacat Produksi / Jahitan Rusak</option>
                      <option value="Salah Warna/Ukuran">Salah Warna / Ukuran</option>
                      <option value="Paket RTS (Gagal Kirim)">Paket RTS (Gagal Kirim)</option>
                    </select>
                  </div>
                  <button type="submit" style={{ width: '100%', backgroundColor: '#0F172A', color: '#fff', border: 'none', padding: '14px', borderRadius: '14px', fontWeight: '800', cursor: 'pointer' }}>Simpan Data Retur</button>
                </form>
              </div>

              {/* Form Ulasan CS Right */}
              <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '28px', border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <span style={{ backgroundColor: '#FEF3C7', color: '#D97706', padding: '8px', borderRadius: '10px', fontSize: '14px' }}>⚠️</span>
                  <h3 style={{ fontSize: '15px', fontWeight: '900', color: '#D97706', margin: 0 }}>Tiket Penanganan Ulasan Buruk</h3>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); alert('Tiket CS Disimpan!'); }}>
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', color: '#000', marginBottom: '6px' }}>PLATFORM</label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button type="button" onClick={() => setPlatformCS('tiktok')} style={{ flex: 1, padding: '10px', borderRadius: '10px', border: 'none', fontWeight: '800', cursor: 'pointer', backgroundColor: platformCS === 'tiktok' ? '#000' : '#F1F5F9', color: platformCS === 'tiktok' ? '#fff' : '#64748B' }}>TikTok Shop</button>
                      <button type="button" onClick={() => setPlatformCS('shopee')} style={{ flex: 1, padding: '10px', borderRadius: '10px', border: 'none', fontWeight: '800', cursor: 'pointer', backgroundColor: platformCS === 'shopee' ? '#EE4D2D' : '#F1F5F9', color: platformCS === 'shopee' ? '#fff' : '#64748B' }}>Shopee</button>
                    </div>
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', color: '#000', marginBottom: '6px' }}>BINTANG ULASAN</label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {[1, 2, 3].map((num) => (
                        <button key={num} type="button" onClick={() => setBintangCS(num as any)} style={{ flex: 1, padding: '8px', borderRadius: '10px', border: bintangCS === num ? '2px solid #F59E0B' : '1px solid #CBD5E1', backgroundColor: bintangCS === num ? '#FEF3C7' : '#fff', fontWeight: '800', color: '#D97706', cursor: 'pointer' }}>⭐ {num} Bintang</button>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', color: '#000', marginBottom: '6px' }}>ISI ULASAN PEMBELI</label>
                    <textarea rows={3} placeholder="Misal: Jahitan di bagian paha lepas saat pertama dipakai..." value={ulasanCS} onChange={(e) => setUlasanCS(e.target.value)} style={{ width: '100%', padding: '12px 14px', borderRadius: '14px', border: '1px solid #CBD5E1', boxSizing: 'border-box' }} />
                  </div>
                  <button type="submit" style={{ width: '100%', backgroundColor: '#EA580C', color: '#fff', border: 'none', padding: '14px', borderRadius: '14px', fontWeight: '800', cursor: 'pointer' }}>Tugaskan ke CS untuk Follow Up</button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* MODUL 3: PRODUKSI & KREATIF */}
        {activeTab === 'produksi' && (
          <div>
            <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '24px 32px', border: '1px solid #E2E8F0', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#000000', margin: '0 0 6px 0' }}>
                  Manajemen Produksi & Tim Kreatif
                </h2>
                <p style={{ fontSize: '13px', color: '#64748B', margin: 0 }}>
                  Monitoring SPK Konveksi (CMT) & Jadwal Konten Kreatif Official Elen Store.
                </p>
              </div>

              <div style={{ display: 'flex', backgroundColor: '#F1F5F9', padding: '4px', borderRadius: '14px' }}>
                <button
                  type="button"
                  onClick={() => setActiveTabProduksi('cmt')}
                  style={{
                    padding: '10px 20px', borderRadius: '10px', fontSize: '13px', fontWeight: '800', border: 'none', cursor: 'pointer',
                    backgroundColor: activeTabProduksi === 'cmt' ? '#0F172A' : 'transparent',
                    color: activeTabProduksi === 'cmt' ? '#ffffff' : '#64748B'
                  }}
                >
                  🏭 CMT Konveksi
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTabProduksi('kreatif')}
                  style={{
                    padding: '10px 20px', borderRadius: '10px', fontSize: '13px', fontWeight: '800', border: 'none', cursor: 'pointer',
                    backgroundColor: activeTabProduksi === 'kreatif' ? '#0F172A' : 'transparent',
                    color: activeTabProduksi === 'kreatif' ? '#ffffff' : '#64748B'
                  }}
                >
                  📹 Tim Kreatif
                </button>
              </div>
            </div>

            {/* SUB-TAB CMT */}
            {activeTabProduksi === 'cmt' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#000000', margin: 0 }}>
                    Daftar SPK Produksi Jahit
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowModalCMT(true)}
                    style={{ backgroundColor: '#000000', color: '#ffffff', border: 'none', padding: '12px 24px', borderRadius: '20px', fontSize: '13px', fontWeight: '800', cursor: 'pointer' }}
                  >
                    + Tambah SPK CMT
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '20px 28px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '900', margin: 0, color: '#000' }}>Lavie Pants Black</h4>
                        <span style={{ backgroundColor: '#EFF6FF', color: '#1D4ED8', fontSize: '11px', fontWeight: '800', padding: '3px 10px', borderRadius: '12px' }}>500 Pcs</span>
                      </div>
                      <p style={{ fontSize: '12px', color: '#64748B', margin: 0 }}>Vendor: <strong>CV Taylor Pekalongan</strong> • Target: 2026-11-05</p>
                    </div>
                    <span style={{ backgroundColor: '#FEF3C7', color: '#92400E', fontSize: '11px', fontWeight: '800', padding: '8px 18px', borderRadius: '12px', border: '1px solid #FCD34D' }}>⏰ PROSES JAHIT</span>
                  </div>

                  <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '20px 28px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '900', margin: 0, color: '#000' }}>Lavie Pants Mocca</h4>
                        <span style={{ backgroundColor: '#EFF6FF', color: '#1D4ED8', fontSize: '11px', fontWeight: '800', padding: '3px 10px', borderRadius: '12px' }}>300 Pcs</span>
                      </div>
                      <p style={{ fontSize: '12px', color: '#64748B', margin: 0 }}>Vendor: <strong>Konveksi Berkah Pekalongan</strong> • Target: 2026-11-10</p>
                    </div>
                    <span style={{ backgroundColor: '#FEF3C7', color: '#92400E', fontSize: '11px', fontWeight: '800', padding: '8px 18px', borderRadius: '12px', border: '1px solid #FCD34D' }}>⏰ POTONG KAIN</span>
                  </div>
                </div>
              </div>
            )}

            {/* SUB-TAB KREATIF */}
            {activeTabProduksi === 'kreatif' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#000000', margin: 0 }}>
                    Jadwal Content & Sampel B-Roll
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowModalKreatif(true)}
                    style={{ backgroundColor: '#D10056', color: '#ffffff', border: 'none', padding: '12px 24px', borderRadius: '20px', fontSize: '13px', fontWeight: '800', cursor: 'pointer' }}
                  >
                    + Buat Jadwal Konten
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '20px 28px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '900', margin: '0 0 6px 0', color: '#000' }}>Fitcheck Lavie Pants Black</h4>
                      <p style={{ fontSize: '12px', color: '#64748B', margin: 0 }}>Talent: <strong>Incess & Team</strong> • Tanggal: 2026-10-20</p>
                    </div>
                    <span style={{ backgroundColor: '#F1F5F9', color: '#334155', fontSize: '11px', fontWeight: '800', padding: '8px 18px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>🎬 PROSES TAKE</span>
                  </div>

                  <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '20px 28px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '900', margin: '0 0 6px 0', color: '#000' }}>Spill Outfit Kuliah Lavie Pants</h4>
                      <p style={{ fontSize: '12px', color: '#64748B', margin: 0 }}>Talent: <strong>Duo Matcha</strong> • Tanggal: 2026-10-22</p>
                    </div>
                    <span style={{ backgroundColor: '#F1F5F9', color: '#334155', fontSize: '11px', fontWeight: '800', padding: '8px 18px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>🎬 DRAFT HOOK</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

      </main>

      {/* 3. FOOTER WATERMARK RESMI */}
      <footer style={{ textAlign: 'center', padding: '20px 0 24px 0', fontSize: '11px', color: '#A38A68', borderTop: '1px solid #EADEC9', marginTop: 'auto' }}>
        Elen Store System v1.0 • Managed & Developed by <strong>by.laildzkryh</strong>
      </footer>

      {/* MODAL CMT */}
      {showModalCMT && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
          <div style={{ backgroundColor: '#fff', width: '100%', maxWidth: '450px', borderRadius: '28px', padding: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '900', margin: '0 0 24px 0', color: '#000' }}>Form SPK Produksi CMT Baru</h2>
            <form onSubmit={(e) => { e.preventDefault(); alert('SPK CMT Berhasil Disimpan!'); setShowModalCMT(false); }}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', marginBottom: '6px' }}>NAMA PRODUK</label>
                <input type="text" required placeholder="Contoh: Lavie Pants Black" value={namaProdukCMT} onChange={(e) => setNamaProdukCMT(e.target.value)} style={{ width: '100%', padding: '12px 14px', borderRadius: '14px', border: '2px solid #94A3B8', boxSizing: 'border-box' }} />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', marginBottom: '6px' }}>JUMLAH (PCS)</label>
                <input type="number" required placeholder="Contoh: 400" value={jumlahPcsCMT} onChange={(e) => setJumlahPcsCMT(e.target.value)} style={{ width: '100%', padding: '12px 14px', borderRadius: '14px', border: '2px solid #94A3B8', boxSizing: 'border-box' }} />
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button type="button" onClick={() => setShowModalCMT(false)} style={{ flex: 1, padding: '14px', borderRadius: '14px', border: 'none', backgroundColor: '#E2E8F0', fontWeight: '800', cursor: 'pointer' }}>Batal</button>
                <button type="submit" style={{ flex: 1, padding: '14px', borderRadius: '14px', border: 'none', backgroundColor: '#000', color: '#fff', fontWeight: '800', cursor: 'pointer' }}>Simpan SPK</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL KREATIF */}
      {showModalKreatif && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
          <div style={{ backgroundColor: '#fff', width: '100%', maxWidth: '450px', borderRadius: '28px', padding: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '900', margin: '0 0 24px 0', color: '#000' }}>Buat Jadwal Konten Baru</h2>
            <form onSubmit={(e) => { e.preventDefault(); alert('Jadwal Konten Disimpan!'); setShowModalKreatif(false); }}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', marginBottom: '6px' }}>JUDUL KONTEN</label>
                <input type="text" required placeholder="Contoh: Fitcheck Lavie Pants" value={judulKonten} onChange={(e) => setJudulKonten(e.target.value)} style={{ width: '100%', padding: '12px 14px', borderRadius: '14px', border: '2px solid #94A3B8', boxSizing: 'border-box' }} />
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button type="button" onClick={() => setShowModalKreatif(false)} style={{ flex: 1, padding: '14px', borderRadius: '14px', border: 'none', backgroundColor: '#E2E8F0', fontWeight: '800', cursor: 'pointer' }}>Batal</button>
                <button type="submit" style={{ flex: 1, padding: '14px', borderRadius: '14px', border: 'none', backgroundColor: '#D10056', color: '#fff', fontWeight: '800', cursor: 'pointer' }}>Simpan Jadwal</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}