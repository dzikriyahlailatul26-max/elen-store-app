'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function SingleDashboardPage() {
  // Switcher Tab Utama
  const [activeTab, setActiveTab] = useState<'admin' | 'retur' | 'produksi'>('admin');
  const [activeTabProduksi, setActiveTabProduksi] = useState<'cmt' | 'kreatif'>('cmt');

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

  // State Modal Produksi
  const [showModalCMT, setShowModalCMT] = useState(false);
  const [showModalKreatif, setShowModalKreatif] = useState(false);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF7F2', fontFamily: 'sans-serif', color: '#4A3B2C', display: 'flex', flexDirection: 'column' }}>
      
      {/* HEADER TOPBAR DENGAN TOMBOL SWITCHER BISA DIKLIK */}
      <header style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #E2E8F0', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 50 }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', border: '1px solid #D4AF37', backgroundColor: '#FAF7F2' }}>
            <img src="/logo-elenstore.jpeg" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <h1 style={{ fontSize: '16px', fontWeight: '900', color: '#3E3225', margin: 0 }}>ELEN STORE</h1>
            <span style={{ backgroundColor: '#F5E6D3', color: '#8C6239', fontSize: '9px', fontWeight: '800', padding: '2px 6px', borderRadius: '6px' }}>SYSTEM</span>
          </div>
        </Link>

        {/* TOMBOL PENUKAR TAMPILAN MODUL (1 HALAMAN) */}
        <nav style={{ display: 'flex', gap: '10px' }}>
          <button
            type="button"
            onClick={() => setActiveTab('admin')}
            style={{
              padding: '10px 20px', borderRadius: '12px', fontSize: '12px', fontWeight: '800', border: 'none', cursor: 'pointer',
              backgroundColor: activeTab === 'admin' ? '#0F172A' : 'transparent',
              color: activeTab === 'admin' ? '#ffffff' : '#64748B'
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
              color: activeTab === 'retur' ? '#ffffff' : '#64748B'
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
              color: activeTab === 'produksi' ? '#ffffff' : '#64748B'
            }}
          >
            ✂️ Produksi & Kreatif
          </button>
        </nav>
      </header>

      {/* ISI KONTEN UTAMA */}
      <main style={{ flex: 1, padding: '32px 20px', maxWidth: '960px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        
        {/* 1. TAMPILAN ADMIN GUDANG */}
        {activeTab === 'admin' && (
          <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '36px', border: '1px solid #E2E8F0', maxWidth: '560px', margin: '0 auto' }}>
            <div style={{ display: 'flex', backgroundColor: '#FAF7F2', padding: '6px', borderRadius: '16px', marginBottom: '28px' }}>
              <button type="button" onClick={() => setJenisTxAdmin('keluar')} style={{ flex: 1, padding: '12px', borderRadius: '12px', fontSize: '12px', fontWeight: '800', border: 'none', cursor: 'pointer', backgroundColor: jenisTxAdmin === 'keluar' ? '#4A3B2C' : 'transparent', color: jenisTxAdmin === 'keluar' ? '#ffffff' : '#8C6239' }}>Ambil (Barang Keluar)</button>
              <button type="button" onClick={() => setJenisTxAdmin('restok')} style={{ flex: 1, padding: '12px', borderRadius: '12px', fontSize: '12px', fontWeight: '800', border: 'none', cursor: 'pointer', backgroundColor: jenisTxAdmin === 'restok' ? '#4A3B2C' : 'transparent', color: jenisTxAdmin === 'restok' ? '#ffffff' : '#8C6239' }}>Tambah (Restok)</button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert('Transaksi Stok Berhasil Disimpan!'); }}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', color: '#000', marginBottom: '8px' }}>KODE SKU PRODUK</label>
                <input type="text" required placeholder="misal: lavie pants" value={skuAdmin} onChange={(e) => setSkuAdmin(e.target.value)} style={{ width: '100%', padding: '14px 16px', borderRadius: '16px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '13px', boxSizing: 'border-box' }} />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', color: '#000', marginBottom: '8px' }}>JUMLAH (PCS)</label>
                <input type="number" required value={jumlahAdmin} onChange={(e) => setJumlahAdmin(e.target.value)} style={{ width: '100%', padding: '14px 16px', borderRadius: '16px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '13px', boxSizing: 'border-box' }} />
              </div>
              <div style={{ marginBottom: '28px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', color: '#000', marginBottom: '8px' }}>CATATAN / KETERANGAN</label>
                <input type="text" placeholder="Misal: Diambil tim packing TikTok" value={catatanAdmin} onChange={(e) => setCatatanAdmin(e.target.value)} style={{ width: '100%', padding: '14px 16px', borderRadius: '16px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '13px', boxSizing: 'border-box' }} />
              </div>
              <button type="submit" style={{ width: '100%', backgroundColor: '#D4AF37', color: '#ffffff', border: 'none', padding: '16px', borderRadius: '16px', fontSize: '13px', fontWeight: '800', cursor: 'pointer' }}>📌 Simpan & Auto Broadcast WA</button>
            </form>
          </div>
        )}

        {/* 2. TAMPILAN RETUR & CS */}
        {activeTab === 'retur' && (
          <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '36px', border: '1px solid #E2E8F0', maxWidth: '560px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#000', margin: '0 0 24px 0' }}>Pencatatan Retur Paket CS</h2>
            <form onSubmit={(e) => { e.preventDefault(); alert('Data Retur Berhasil Disimpan!'); }}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', color: '#000', marginBottom: '8px' }}>NOMOR RESI PAKET</label>
                <input type="text" required placeholder="Contoh: JP123456789" value={noResi} onChange={(e) => setNoResi(e.target.value)} style={{ width: '100%', padding: '14px 16px', borderRadius: '16px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '13px', boxSizing: 'border-box' }} />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', color: '#000', marginBottom: '8px' }}>NAMA PEMBELI</label>
                <input type="text" required placeholder="Contoh: Incess Pekalongan" value={namaPembeli} onChange={(e) => setNamaPembeli(e.target.value)} style={{ width: '100%', padding: '14px 16px', borderRadius: '16px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '13px', boxSizing: 'border-box' }} />
              </div>
              <button type="submit" style={{ width: '100%', backgroundColor: '#000000', color: '#ffffff', border: 'none', padding: '16px', borderRadius: '16px', fontSize: '13px', fontWeight: '800', cursor: 'pointer' }}>🔄 Simpan Laporan Retur</button>
            </form>
          </div>
        )}

        {/* 3. TAMPILAN PRODUKSI & KREATIF */}
        {activeTab === 'produksi' && (
          <div>
            <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '24px 32px', border: '1px solid #E2E8F0', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#000000', margin: '0 0 6px 0' }}>Manajemen Produksi & Tim Kreatif</h2>
                <p style={{ fontSize: '13px', color: '#64748B', margin: 0 }}>Monitoring SPK Konveksi (CMT) & Jadwal Konten Kreatif Elen Store.</p>
              </div>
              <div style={{ display: 'flex', backgroundColor: '#F1F5F9', padding: '4px', borderRadius: '14px' }}>
                <button type="button" onClick={() => setActiveTabProduksi('cmt')} style={{ padding: '10px 20px', borderRadius: '10px', fontSize: '13px', fontWeight: '800', border: 'none', cursor: 'pointer', backgroundColor: activeTabProduksi === 'cmt' ? '#0F172A' : 'transparent', color: activeTabProduksi === 'cmt' ? '#ffffff' : '#64748B' }}>🏭 CMT Konveksi</button>
                <button type="button" onClick={() => setActiveTabProduksi('kreatif')} style={{ padding: '10px 20px', borderRadius: '10px', fontSize: '13px', fontWeight: '800', border: 'none', cursor: 'pointer', backgroundColor: activeTabProduksi === 'kreatif' ? '#0F172A' : 'transparent', color: activeTabProduksi === 'kreatif' ? '#ffffff' : '#64748B' }}>📹 Tim Kreatif</button>
              </div>
            </div>

            {activeTabProduksi === 'cmt' ? (
              <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '20px 28px', border: '1px solid #E2E8F0' }}>
                <h4 style={{ fontSize: '16px', fontWeight: '900', margin: 0 }}>Lavie Pants Black (500 Pcs)</h4>
                <p style={{ fontSize: '12px', color: '#64748B', margin: '6px 0 0 0' }}>Vendor: CV Taylor Pekalongan • Status: PROSES JAHIT</p>
              </div>
            ) : (
              <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '20px 28px', border: '1px solid #E2E8F0' }}>
                <h4 style={{ fontSize: '16px', fontWeight: '900', margin: 0 }}>Fitcheck Lavie Pants Black</h4>
                <p style={{ fontSize: '12px', color: '#64748B', margin: '6px 0 0 0' }}>Talent: Incess & Team • Status: PROSES TAKE</p>
              </div>
            )}
          </div>
        )}

      </main>

      {/* FOOTER WATERMARK */}
      <footer style={{ textAlign: 'center', padding: '20px 0 24px 0', fontSize: '11px', color: '#A38A68', borderTop: '1px solid #EADEC9', marginTop: 'auto' }}>
        Elen Store System v1.0 • Managed & Developed by <strong>by.laildzkryh</strong>
      </footer>

    </div>
  );
}