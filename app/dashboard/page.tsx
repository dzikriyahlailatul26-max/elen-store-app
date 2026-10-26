'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function UnifiedElenStoreDashboard() {
  const [activeTab, setActiveTab] = useState<'admin' | 'retur' | 'produksi'>('admin');
  const [activeTabProduksi, setActiveTabProduksi] = useState<'cmt' | 'kreatif'>('cmt');

  // State Admin Gudang
  const [jenisTxAdmin, setJenisTxAdmin] = useState<'keluar' | 'restok'>('keluar');
  const [skuAdmin, setSkuAdmin] = useState('');
  const [jumlahAdmin, setJumlahAdmin] = useState('1');
  const [catatanAdmin, setCatatanAdmin] = useState('');

  // State Retur & CS
  const [noResi, setNoResi] = useState('');
  const [skuRetur, setSkuRetur] = useState('');
  const [alasanRetur, setAlasanRetur] = useState('Cacat Produksi / Jahitan Rusak');
  const [platformCS, setPlatformCS] = useState<'tiktok' | 'shopee'>('tiktok');
  const [bintangCS, setBintangCS] = useState<1 | 2 | 3>(1);
  const [ulasanCS, setUlasanCS] = useState('');

  // State Modal Produksi CMT (Inputan Lengkap)
  const [showModalCMT, setShowModalCMT] = useState(false);
  const [namaProdukCMT, setNamaProdukCMT] = useState('');
  const [jumlahPcsCMT, setJumlahPcsCMT] = useState('');
  const [vendorCMT, setVendorCMT] = useState('CV Taylor Pekalongan');
  const [targetCMT, setTargetCMT] = useState('');

  // State Modal Tim Kreatif (Inputan Lengkap)
  const [showModalKreatif, setShowModalKreatif] = useState(false);
  const [judulKonten, setJudulKonten] = useState('');
  const [platformKonten, setPlatformKonten] = useState('TikTok');
  const [talentKonten, setTalentKonten] = useState('Incess');
  const [tanggalTake, setTanggalTake] = useState('');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF7F2', fontFamily: 'sans-serif', color: '#4A3B2C', display: 'flex', flexDirection: 'column' }}>
      
      {/* HEADER TOPBAR */}
      <header style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #E2E8F0', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 50 }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', border: '1px solid #D4AF37', backgroundColor: '#FAF7F2' }}>
            <img src="/logo-elenstore.jpeg" alt="Elen Store Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <h1 style={{ fontSize: '16px', fontWeight: '900', color: '#3E3225', margin: 0 }}>ELEN STORE</h1>
            <span style={{ backgroundColor: '#F5E6D3', color: '#8C6239', fontSize: '9px', fontWeight: '800', padding: '2px 6px', borderRadius: '6px' }}>SYSTEM</span>
          </div>
        </Link>

        <nav style={{ display: 'flex', gap: '10px' }}>
          <button type="button" onClick={() => setActiveTab('admin')} style={{ padding: '10px 20px', borderRadius: '12px', fontSize: '12px', fontWeight: '800', border: 'none', cursor: 'pointer', backgroundColor: activeTab === 'admin' ? '#0F172A' : 'transparent', color: activeTab === 'admin' ? '#ffffff' : '#64748B' }}>📦 Admin Gudang</button>
          <button type="button" onClick={() => setActiveTab('retur')} style={{ padding: '10px 20px', borderRadius: '12px', fontSize: '12px', fontWeight: '800', border: 'none', cursor: 'pointer', backgroundColor: activeTab === 'retur' ? '#0F172A' : 'transparent', color: activeTab === 'retur' ? '#ffffff' : '#64748B' }}>🔄 Retur & CS</button>
          <button type="button" onClick={() => setActiveTab('produksi')} style={{ padding: '10px 20px', borderRadius: '12px', fontSize: '12px', fontWeight: '800', border: 'none', cursor: 'pointer', backgroundColor: activeTab === 'produksi' ? '#0F172A' : 'transparent', color: activeTab === 'produksi' ? '#ffffff' : '#64748B' }}>✂️ Produksi & Kreatif</button>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main style={{ flex: 1, padding: '32px 20px', maxWidth: '1020px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        
        {/* MODUL ADMIN GUDANG */}
        {activeTab === 'admin' && (
          <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '36px', border: '1px solid #E2E8F0', maxWidth: '560px', margin: '0 auto' }}>
            <div style={{ display: 'flex', backgroundColor: '#FAF7F2', padding: '6px', borderRadius: '16px', marginBottom: '28px' }}>
              <button type="button" onClick={() => setJenisTxAdmin('keluar')} style={{ flex: 1, padding: '12px', borderRadius: '12px', fontSize: '12px', fontWeight: '800', border: 'none', cursor: 'pointer', backgroundColor: jenisTxAdmin === 'keluar' ? '#4A3B2C' : 'transparent', color: jenisTxAdmin === 'keluar' ? '#ffffff' : '#8C6239' }}>Ambil (Barang Keluar)</button>
              <button type="button" onClick={() => setJenisTxAdmin('restok')} style={{ flex: 1, padding: '12px', borderRadius: '12px', fontSize: '12px', fontWeight: '800', border: 'none', cursor: 'pointer', backgroundColor: jenisTxAdmin === 'restok' ? '#4A3B2C' : 'transparent', color: jenisTxAdmin === 'restok' ? '#ffffff' : '#8C6239' }}>Tambah (Restok)</button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert('Transaksi Gudang Disimpan!'); }}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', color: '#64748B', marginBottom: '8px' }}>KODE SKU PRODUK</label>
                <input type="text" required placeholder="misal: lavie pants" value={skuAdmin} onChange={(e) => setSkuAdmin(e.target.value)} style={{ width: '100%', padding: '14px 16px', borderRadius: '16px', border: '1px solid #E2E8F0', fontSize: '13px', fontWeight: '600', boxSizing: 'border-box' }} />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', color: '#64748B', marginBottom: '8px' }}>JUMLAH (PCS)</label>
                <input type="number" required value={jumlahAdmin} onChange={(e) => setJumlahAdmin(e.target.value)} style={{ width: '100%', padding: '14px 16px', borderRadius: '16px', border: '1px solid #E2E8F0', fontSize: '13px', fontWeight: '600', boxSizing: 'border-box' }} />
              </div>
              <div style={{ marginBottom: '28px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', color: '#64748B', marginBottom: '8px' }}>CATATAN / KETERANGAN</label>
                <input type="text" placeholder="Misal: Diambil tim packing TikTok" value={catatanAdmin} onChange={(e) => setCatatanAdmin(e.target.value)} style={{ width: '100%', padding: '14px 16px', borderRadius: '16px', border: '1px solid #E2E8F0', fontSize: '13px', fontWeight: '600', boxSizing: 'border-box' }} />
              </div>
              <button type="submit" style={{ width: '100%', backgroundColor: '#D4AF37', color: '#ffffff', border: 'none', padding: '16px', borderRadius: '16px', fontSize: '13px', fontWeight: '800', cursor: 'pointer' }}>📌 Simpan & Auto Broadcast WA</button>
            </form>
          </div>
        )}

        {/* MODUL RETUR & CS */}
        {activeTab === 'retur' && (
          <div>
            <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '24px 32px', border: '1px solid #E2E8F0', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#000000', margin: '0 0 6px 0' }}>Modul Retur (RMA) & Handling Ulasan CS</h2>
              <p style={{ fontSize: '13px', color: '#64748B', margin: 0 }}>Pencatatan retur barang 2% harian & tiket penanganan ulasan buruk Elen Store.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '28px', border: '1px solid #E2E8F0' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '900', color: '#DC2626', marginBottom: '20px' }}>Pencatatan Barang Retur</h3>
                <form onSubmit={(e) => { e.preventDefault(); alert('Retur Disimpan!'); }}>
                  <div style={{ marginBottom: '16px' }}><label style={{ display: 'block', fontSize: '10px', fontWeight: '900', marginBottom: '6px' }}>NO. PESANAN</label><input type="text" required value={noResi} onChange={(e) => setNoResi(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '14px', border: '1px solid #CBD5E1', boxSizing: 'border-box' }} /></div>
                  <div style={{ marginBottom: '16px' }}><label style={{ display: 'block', fontSize: '10px', fontWeight: '900', marginBottom: '6px' }}>SKU PRODUK</label><input type="text" required value={skuRetur} onChange={(e) => setSkuRetur(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '14px', border: '1px solid #CBD5E1', boxSizing: 'border-box' }} /></div>
                  <button type="submit" style={{ width: '100%', backgroundColor: '#0F172A', color: '#fff', border: 'none', padding: '14px', borderRadius: '14px', fontWeight: '800', cursor: 'pointer' }}>Simpan Retur</button>
                </form>
              </div>
              <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '28px', border: '1px solid #E2E8F0' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '900', color: '#D97706', marginBottom: '20px' }}>Tiket Ulasan Buruk</h3>
                <form onSubmit={(e) => { e.preventDefault(); alert('Tiket CS Disimpan!'); }}>
                  <div style={{ marginBottom: '20px' }}><label style={{ display: 'block', fontSize: '10px', fontWeight: '900', marginBottom: '6px' }}>ISI ULASAN</label><textarea rows={3} value={ulasanCS} onChange={(e) => setUlasanCS(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '14px', border: '1px solid #CBD5E1', boxSizing: 'border-box' }} /></div>
                  <button type="submit" style={{ width: '100%', backgroundColor: '#EA580C', color: '#fff', border: 'none', padding: '14px', borderRadius: '14px', fontWeight: '800', cursor: 'pointer' }}>Tugaskan ke CS</button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* MODUL PRODUKSI & KREATIF */}
        {activeTab === 'produksi' && (
          <div>
            <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '24px 32px', border: '1px solid #E2E8F0', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div><h2 style={{ fontSize: '22px', fontWeight: '900', margin: 0 }}>Manajemen Produksi & Tim Kreatif</h2></div>
              <div style={{ display: 'flex', backgroundColor: '#F1F5F9', padding: '4px', borderRadius: '14px' }}>
                <button type="button" onClick={() => setActiveTabProduksi('cmt')} style={{ padding: '10px 20px', borderRadius: '10px', fontSize: '13px', fontWeight: '800', border: 'none', cursor: 'pointer', backgroundColor: activeTabProduksi === 'cmt' ? '#0F172A' : 'transparent', color: activeTabProduksi === 'cmt' ? '#ffffff' : '#64748B' }}>🏭 CMT Konveksi</button>
                <button type="button" onClick={() => setActiveTabProduksi('kreatif')} style={{ padding: '10px 20px', borderRadius: '10px', fontSize: '13px', fontWeight: '800', border: 'none', cursor: 'pointer', backgroundColor: activeTabProduksi === 'kreatif' ? '#0F172A' : 'transparent', color: activeTabProduksi === 'kreatif' ? '#ffffff' : '#64748B' }}>📹 Tim Kreatif</button>
              </div>
            </div>

            {activeTabProduksi === 'cmt' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '900', margin: 0 }}>Daftar SPK Produksi Jahit</h3>
                  <button type="button" onClick={() => setShowModalCMT(true)} style={{ backgroundColor: '#000', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '20px', fontWeight: '800', cursor: 'pointer' }}>+ Tambah SPK CMT</button>
                </div>
                <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '20px 28px', border: '1px solid #E2E8F0' }}>
                  <h4 style={{ margin: '0 0 6px 0' }}>Lavie Pants Black (500 Pcs)</h4>
                  <p style={{ margin: 0, fontSize: '12px', color: '#64748B' }}>Vendor: <strong>CV Taylor Pekalongan</strong> • Target: 2026-11-05</p>
                </div>
              </div>
            )}

            {activeTabProduksi === 'kreatif' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '900', margin: 0 }}>Jadwal Content & Sampel B-Roll</h3>
                  <button type="button" onClick={() => setShowModalKreatif(true)} style={{ backgroundColor: '#D10056', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '20px', fontWeight: '800', cursor: 'pointer' }}>+ Buat Jadwal Konten</button>
                </div>
                <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '20px 28px', border: '1px solid #E2E8F0' }}>
                  <h4 style={{ margin: '0 0 6px 0' }}>Fitcheck Lavie Pants Black</h4>
                  <p style={{ margin: 0, fontSize: '12px', color: '#64748B' }}>Platform: <strong>TikTok</strong> • Talent: <strong>Incess & Team</strong> • Tanggal: 2026-10-20</p>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      <footer style={{ textAlign: 'center', padding: '20px 0', fontSize: '11px', color: '#A38A68', marginTop: 'auto' }}>
        Elen Store System v1.0 • Managed & Developed by <strong>by.laildzkryh</strong>
      </footer>

      {/* MODAL SPK CMT (4 FORM LENGKAP) */}
      {showModalCMT && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
          <div style={{ backgroundColor: '#fff', width: '100%', maxWidth: '440px', borderRadius: '28px', padding: '36px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '900', margin: '0 0 24px 0', color: '#000' }}>Form SPK Produksi CMT Baru</h2>
            <form onSubmit={(e) => { e.preventDefault(); alert('SPK CMT Disimpan!'); setShowModalCMT(false); }}>
              <div style={{ marginBottom: '16px' }}><label style={{ display: 'block', fontSize: '10px', fontWeight: '900', color: '#000', marginBottom: '6px' }}>NAMA PRODUK</label><input type="text" required placeholder="Contoh: Lavie Pants Black" value={namaProdukCMT} onChange={(e) => setNamaProdukCMT(e.target.value)} style={{ width: '100%', padding: '14px 18px', borderRadius: '16px', border: '2px solid #64748B', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }} /></div>
              <div style={{ marginBottom: '16px' }}><label style={{ display: 'block', fontSize: '10px', fontWeight: '900', color: '#000', marginBottom: '6px' }}>JUMLAH (PCS)</label><input type="number" required placeholder="Contoh: 400" value={jumlahPcsCMT} onChange={(e) => setJumlahPcsCMT(e.target.value)} style={{ width: '100%', padding: '14px 18px', borderRadius: '16px', border: '2px solid #64748B', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }} /></div>
              <div style={{ marginBottom: '16px' }}><label style={{ display: 'block', fontSize: '10px', fontWeight: '900', color: '#000', marginBottom: '6px' }}>VENDOR KONVEKSI</label><select value={vendorCMT} onChange={(e) => setVendorCMT(e.target.value)} style={{ width: '100%', padding: '14px 18px', borderRadius: '16px', border: '2px solid #64748B', backgroundColor: '#fff', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }}><option value="CV Taylor Pekalongan">CV Taylor Pekalongan</option><option value="Konveksi Berkah Pekalongan">Konveksi Berkah Pekalongan</option><option value="CMT Elen Store Utama">CMT Elen Store Utama</option></select></div>
              <div style={{ marginBottom: '28px' }}><label style={{ display: 'block', fontSize: '10px', fontWeight: '900', color: '#000', marginBottom: '6px' }}>TARGET SELESAI</label><input type="date" required value={targetCMT} onChange={(e) => setTargetCMT(e.target.value)} style={{ width: '100%', padding: '14px 18px', borderRadius: '16px', border: '2px solid #64748B', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }} /></div>
              <div style={{ display: 'flex', gap: '14px' }}><button type="button" onClick={() => setShowModalCMT(false)} style={{ flex: 1, padding: '14px', borderRadius: '16px', border: 'none', backgroundColor: '#E2E8F0', fontWeight: '800', cursor: 'pointer' }}>Batal</button><button type="submit" style={{ flex: 1, padding: '14px', borderRadius: '16px', border: 'none', backgroundColor: '#000', color: '#fff', fontWeight: '800', cursor: 'pointer' }}>Simpan SPK</button></div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL KREATIF (4 FORM LENGKAP) */}
      {showModalKreatif && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
          <div style={{ backgroundColor: '#fff', width: '100%', maxWidth: '440px', borderRadius: '28px', padding: '36px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '900', margin: '0 0 24px 0', color: '#000' }}>Buat Jadwal Konten Baru</h2>
            <form onSubmit={(e) => { e.preventDefault(); alert('Jadwal Disimpan!'); setShowModalKreatif(false); }}>
              <div style={{ marginBottom: '16px' }}><label style={{ display: 'block', fontSize: '10px', fontWeight: '900', color: '#000', marginBottom: '6px' }}>JUDUL / KONSEP KONTEN</label><input type="text" required placeholder="Contoh: Fitcheck Lavie Pants B-Roll" value={judulKonten} onChange={(e) => setJudulKonten(e.target.value)} style={{ width: '100%', padding: '14px 18px', borderRadius: '16px', border: '2px solid #64748B', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }} /></div>
              <div style={{ marginBottom: '16px' }}><label style={{ display: 'block', fontSize: '10px', fontWeight: '900', color: '#000', marginBottom: '6px' }}>PLATFORM</label><select value={platformKonten} onChange={(e) => setPlatformKonten(e.target.value)} style={{ width: '100%', padding: '14px 18px', borderRadius: '16px', border: '2px solid #64748B', backgroundColor: '#fff', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }}><option value="TikTok">TikTok</option><option value="Instagram Reels">Instagram Reels</option><option value="Shopee Video">Shopee Video</option></select></div>
              <div style={{ marginBottom: '16px' }}><label style={{ display: 'block', fontSize: '10px', fontWeight: '900', color: '#000', marginBottom: '6px' }}>TALENT / HOST</label><input type="text" required value={talentKonten} onChange={(e) => setTalentKonten(e.target.value)} style={{ width: '100%', padding: '14px 18px', borderRadius: '16px', border: '2px solid #64748B', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }} /></div>
              <div style={{ marginBottom: '28px' }}><label style={{ display: 'block', fontSize: '10px', fontWeight: '900', color: '#000', marginBottom: '6px' }}>TANGGAL TAKE VIDEO</label><input type="date" required value={tanggalTake} onChange={(e) => setTanggalTake(e.target.value)} style={{ width: '100%', padding: '14px 18px', borderRadius: '16px', border: '2px solid #64748B', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }} /></div>
              <div style={{ display: 'flex', gap: '14px' }}><button type="button" onClick={() => setShowModalKreatif(false)} style={{ flex: 1, padding: '14px', borderRadius: '16px', border: 'none', backgroundColor: '#E2E8F0', fontWeight: '800', cursor: 'pointer' }}>Batal</button><button type="submit" style={{ flex: 1, padding: '14px', borderRadius: '16px', border: 'none', backgroundColor: '#D10056', color: '#fff', fontWeight: '800', cursor: 'pointer' }}>Simpan Jadwal</button></div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}