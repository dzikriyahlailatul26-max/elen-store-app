'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function SingleDashboardPage() {
  // State untuk berpindah tab modul (admin, retur, produksi)
  const [activeTab, setActiveTab] = useState<'admin' | 'retur' | 'produksi'>('admin');

  // State Sub-Tab Produksi
  const [activeTabProduksi, setActiveTabProduksi] = useState<'cmt' | 'kreatif'>('cmt');

  // State Modal Produksi CMT
  const [showModalCMT, setShowModalCMT] = useState(false);
  const [namaProdukCMT, setNamaProdukCMT] = useState('');
  const [jumlahPcsCMT, setJumlahPcsCMT] = useState('');
  const [vendorCMT, setVendorCMT] = useState('CMT Elen Store Utama');
  const [targetSelesaiCMT, setTargetSelesaiCMT] = useState('');

  // State Modal Produksi Kreatif
  const [showModalKreatif, setShowModalKreatif] = useState(false);
  const [judulKonten, setJudulKonten] = useState('');
  const [platform, setPlatform] = useState('TikTok');
  const [talent, setTalent] = useState('Incess');
  const [tanggalTake, setTanggalTake] = useState('');

  // State Form Admin Gudang
  const [jenisTxAdmin, setJenisTxAdmin] = useState<'keluar' | 'restok'>('keluar');
  const [skuAdmin, setSkuAdmin] = useState('');
  const [jumlahAdmin, setJumlahAdmin] = useState('1');
  const [catatanAdmin, setCatatanAdmin] = useState('');

  // State Form Retur & CS
  const [noResi, setNoResi] = useState('');
  const [namaPembeli, setNamaPembeli] = useState('');
  const [alasanRetur, setAlasanRetur] = useState('Barang Cacat/Selesai');
  const [statusCS, setStatusCS] = useState('Proses');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF7F2', fontFamily: 'sans-serif', color: '#4A3B2C', display: 'flex', flexDirection: 'column' }}>
      
      {/* 1. SINGLE HEADER DASHBOARD TOPBAR (Persis Gambar Kamu) */}
      <header style={{ 
        backgroundColor: '#ffffff', 
        borderBottom: '1px solid #E2E8F0', 
        padding: '16px 40px', 
        display: 'flex', 
        justify: 'space-between', 
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
      }}>
        {/* LOGO & BRAND LEFT */}
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

        {/* NAVIGATION BUTTONS SWITCHER (Tinggal Klik Langsung Pindah) */}
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

      {/* 2. AREA ISI HALAMANsesuai TAB YANG AKTIF */}
      <main style={{ flex: 1, padding: '32px 20px', maxWidth: '960px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        
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

            <form onSubmit={(e) => { e.preventDefault(); alert('Transaksi Stok Berhasil Disimpan!'); }}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', letterSpacing: '0.8px', color: '#000', marginBottom: '8px' }}>
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
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', letterSpacing: '0.8px', color: '#000', marginBottom: '8px' }}>
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
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', letterSpacing: '0.8px', color: '#000', marginBottom: '8px' }}>
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
          <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '36px', border: '1px solid #E2E8F0', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', maxWidth: '560px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#000', margin: '0 0 24px 0' }}>
              Pencatatan Retur Paket CS
            </h2>

            <form onSubmit={(e) => { e.preventDefault(); alert('Data Retur Berhasil Disimpan!'); }}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', letterSpacing: '0.8px', color: '#000', marginBottom: '8px' }}>
                  NOMOR RESI PAKET
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: JP123456789"
                  value={noResi}
                  onChange={(e) => setNoResi(e.target.value)}
                  style={{ width: '100%', padding: '14px 16px', borderRadius: '16px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '13px', fontWeight: '600', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', letterSpacing: '0.8px', color: '#000', marginBottom: '8px' }}>
                  NAMA PEMBELI / USERNAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Incess Pekalongan"
                  value={namaPembeli}
                  onChange={(e) => setNamaPembeli(e.target.value)}
                  style={{ width: '100%', padding: '14px 16px', borderRadius: '16px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '13px', fontWeight: '600', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', letterSpacing: '0.8px', color: '#000', marginBottom: '8px' }}>
                  ALASAN RETUR
                </label>
                <select
                  value={alasanRetur}
                  onChange={(e) => setAlasanRetur(e.target.value)}
                  style={{ width: '100%', padding: '14px 16px', borderRadius: '16px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '13px', fontWeight: '700', backgroundColor: '#fff', boxSizing: 'border-box', cursor: 'pointer' }}
                >
                  <option value="Barang Cacat/Selesai">Barang Cacat / Rusak</option>
                  <option value="Salah Warna/Ukuran">Salah Warna / Ukuran</option>
                  <option value="Gagal Kirim Kurir">Gagal Kirim Kurir (RTS)</option>
                </select>
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', letterSpacing: '0.8px', color: '#000', marginBottom: '8px' }}>
                  STATUS PENANGANAN CS
                </label>
                <select
                  value={statusCS}
                  onChange={(e) => setStatusCS(e.target.value)}
                  style={{ width: '100%', padding: '14px 16px', borderRadius: '16px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '13px', fontWeight: '700', backgroundColor: '#fff', boxSizing: 'border-box', cursor: 'pointer' }}
                >
                  <option value="Proses">Sedang Diproses CS</option>
                  <option value="Tukar">Sudah Kirim Paket Tukar</option>
                  <option value="Refund">Sudah Refund Dana</option>
                </select>
              </div>

              <button
                type="submit"
                style={{
                  width: '100%', backgroundColor: '#000000', color: '#ffffff', border: 'none', padding: '16px', borderRadius: '16px', fontSize: '13px', fontWeight: '800', cursor: 'pointer'
                }}
              >
                🔄 Simpan Laporan Retur
              </button>
            </form>
          </div>
        )}

        {/* MODUL 3: PRODUKSI & KREATIF */}
        {activeTab === 'produksi' && (
          <div>
            <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '24px 32px', border: '1px solid #E2E8F0', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
              <div>
                <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#000000', margin: '0 0 6px 0', letterSpacing: '-0.3px' }}>
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

            {/* TAB CMT KONVEKSI */}
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

            {/* TAB TIM KREATIF */}
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

      {/* 3. WATERMARK FOOTER RESMI */}
      <footer style={{ textAlign: 'center', padding: '20px 0 24px 0', fontSize: '11px', color: '#A38A68', borderTop: '1px solid #EADEC9', marginTop: 'auto' }}>
        Elen Store System v1.0 • Managed & Developed by <strong>by.laildzkryh</strong>
      </footer>

      {/* MODAL SPK CMT */}
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
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', marginBottom: '6px' }}>VENDOR KONVEKSI</label>
                <select value={vendorCMT} onChange={(e) => setVendorCMT(e.target.value)} style={{ width: '100%', padding: '12px 14px', borderRadius: '14px', border: '2px solid #94A3B8', backgroundColor: '#fff', boxSizing: 'border-box' }}>
                  <option value="CMT Elen Store Utama">CMT Elen Store Utama</option>
                  <option value="CV Taylor Pekalongan">CV Taylor Pekalongan</option>
                  <option value="Konveksi Berkah Pekalongan">Konveksi Berkah Pekalongan</option>
                </select>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', marginBottom: '6px' }}>TARGET SELESAI</label>
                <input type="date" required value={targetSelesaiCMT} onChange={(e) => setTargetSelesaiCMT(e.target.value)} style={{ width: '100%', padding: '12px 14px', borderRadius: '14px', border: '2px solid #94A3B8', boxSizing: 'border-box' }} />
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button type="button" onClick={() => setShowModalCMT(false)} style={{ flex: 1, padding: '14px', borderRadius: '14px', border: 'none', backgroundColor: '#E2E8F0', fontWeight: '800', cursor: 'pointer' }}>Batal</button>
                <button type="submit" style={{ flex: 1, padding: '14px', borderRadius: '14px', border: 'none', backgroundColor: '#000', color: '#fff', fontWeight: '800', cursor: 'pointer' }}>Simpan SPK</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL KONTEN KREATIF */}
      {showModalKreatif && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
          <div style={{ backgroundColor: '#fff', width: '100%', maxWidth: '450px', borderRadius: '28px', padding: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '900', margin: '0 0 24px 0', color: '#000' }}>Buat Jadwal Konten Baru</h2>
            <form onSubmit={(e) => { e.preventDefault(); alert('Jadwal Konten Berhasil Disimpan!'); setShowModalKreatif(false); }}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', marginBottom: '6px' }}>JUDUL / KONSEP KONTEN</label>
                <input type="text" required placeholder="Contoh: Fitcheck Lavie Pants B-Roll" value={judulKonten} onChange={(e) => setJudulKonten(e.target.value)} style={{ width: '100%', padding: '12px 14px', borderRadius: '14px', border: '2px solid #94A3B8', boxSizing: 'border-box' }} />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', marginBottom: '6px' }}>PLATFORM</label>
                <select value={platform} onChange={(e) => setPlatform(e.target.value)} style={{ width: '100%', padding: '12px 14px', borderRadius: '14px', border: '2px solid #94A3B8', backgroundColor: '#fff', boxSizing: 'border-box' }}>
                  <option value="TikTok">TikTok</option>
                  <option value="Instagram Reels">Instagram Reels</option>
                  <option value="Shopee Video">Shopee Video</option>
                </select>
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', marginBottom: '6px' }}>TALENT / HOST</label>
                <input type="text" required value={talent} onChange={(e) => setTalent(e.target.value)} style={{ width: '100%', padding: '12px 14px', borderRadius: '14px', border: '2px solid #94A3B8', boxSizing: 'border-box' }} />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', marginBottom: '6px' }}>TANGGAL TAKE VIDEO</label>
                <input type="date" required value={tanggalTake} onChange={(e) => setTanggalTake(e.target.value)} style={{ width: '100%', padding: '12px 14px', borderRadius: '14px', border: '2px solid #94A3B8', boxSizing: 'border-box' }} />
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button type="button" onClick={() => setShowModalKreatif(false)} style={{ flex: 1, padding: '14px', borderRadius: '14px', border: 'none', backgroundColor: '#E2E8F0', fontWeight: '800', cursor: 'pointer' }}>Batal</button>
                <button type="submit" style={{ flex: 1, padding: '14px', borderRadius: '14px', border: 'none', backgroundColor: '#E5006D', color: '#fff', fontWeight: '800', cursor: 'pointer' }}>Simpan Jadwal</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}