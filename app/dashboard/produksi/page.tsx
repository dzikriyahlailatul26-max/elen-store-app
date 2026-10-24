'use client';

import React, { useState } from 'react';

export default function ProduksiKreatifPage() {
  const [activeTab, setActiveTab] = useState<'cmt' | 'kreatif'>('cmt');

  // Modal State CMT
  const [showModalCMT, setShowModalCMT] = useState(false);
  const [namaProduk, setNamaProduk] = useState('');
  const [jumlahPcs, setJumlahPcs] = useState('');
  const [vendor, setVendor] = useState('CMT Elen Store Utama');
  const [targetSelesai, setTargetSelesai] = useState('');

  // Modal State Kreatif
  const [showModalKreatif, setShowModalKreatif] = useState(false);
  const [judulKonten, setJudulKonten] = useState('');
  const [platform, setPlatform] = useState('TikTok');
  const [talent, setTalent] = useState('Incess');
  const [tanggalTake, setTanggalTake] = useState('');

  const handleSimpanCMT = (e: React.FormEvent) => {
    e.preventDefault();
    alert('SPK Produksi CMT Berhasil Disimpan!');
    setShowModalCMT(false);
    setNamaProduk('');
    setJumlahPcs('');
  };

  const handleSimpanKreatif = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Jadwal Konten Berhasil Disimpan!');
    setShowModalKreatif(false);
    setJudulKonten('');
  };

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto' }}>
      
      {/* Banner Top Header Modul */}
      <div style={{ 
        backgroundColor: '#ffffff', 
        borderRadius: '24px', 
        padding: '24px 32px', 
        border: '1px solid #E2E8F0', 
        marginBottom: '24px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
      }}>
        <div>
          <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#000000', margin: '0 0 6px 0', letterSpacing: '-0.3px' }}>
            Manajemen Produksi & Tim Kreatif
          </h2>
          <p style={{ fontSize: '13px', color: '#64748B', margin: 0 }}>
            Monitoring SPK Konveksi (CMT) & Jadwal Konten Kreatif Official Elen Store.
          </p>
        </div>

        {/* Tab Switch CMT / Tim Kreatif */}
        <div style={{ display: 'flex', backgroundColor: '#F1F5F9', padding: '4px', borderRadius: '14px' }}>
          <button
            type="button"
            onClick={() => setActiveTab('cmt')}
            style={{
              padding: '10px 20px', borderRadius: '10px', fontSize: '13px', fontWeight: '800', border: 'none', cursor: 'pointer',
              backgroundColor: activeTab === 'cmt' ? '#0F172A' : 'transparent',
              color: activeTab === 'cmt' ? '#ffffff' : '#64748B'
            }}
          >
            🏭 CMT Konveksi
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('kreatif')}
            style={{
              padding: '10px 20px', borderRadius: '10px', fontSize: '13px', fontWeight: '800', border: 'none', cursor: 'pointer',
              backgroundColor: activeTab === 'kreatif' ? '#0F172A' : 'transparent',
              color: activeTab === 'kreatif' ? '#ffffff' : '#64748B'
            }}
          >
            📹 Tim Kreatif
          </button>
        </div>
      </div>

      {/* TAB 1: CMT KONVEKSI */}
      {activeTab === 'cmt' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#000000', margin: 0 }}>
              Daftar SPK Produksi Jahit
            </h3>

            <button
              type="button"
              onClick={() => setShowModalCMT(true)}
              style={{
                backgroundColor: '#000000', color: '#ffffff', border: 'none', padding: '12px 24px', borderRadius: '20px', fontSize: '13px', fontWeight: '800', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
              }}
            >
              + Tambah SPK CMT
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '20px 28px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: '900', margin: 0, color: '#000' }}>
                    Lavie Pants Black
                  </h4>
                  <span style={{ backgroundColor: '#EFF6FF', color: '#1D4ED8', fontSize: '11px', fontWeight: '800', padding: '3px 10px', borderRadius: '12px' }}>
                    500 Pcs
                  </span>
                </div>
                <p style={{ fontSize: '12px', color: '#64748B', margin: 0 }}>
                  Vendor: <strong>CV Taylor Pekalongan</strong> • Target: 2026-11-05
                </p>
              </div>
              <span style={{ backgroundColor: '#FEF3C7', color: '#92400E', fontSize: '11px', fontWeight: '800', padding: '8px 18px', borderRadius: '12px', border: '1px solid #FCD34D' }}>
                ⏰ PROSES JAHIT
              </span>
            </div>

            <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '20px 28px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: '900', margin: 0, color: '#000' }}>
                    Lavie Pants Mocca
                  </h4>
                  <span style={{ backgroundColor: '#EFF6FF', color: '#1D4ED8', fontSize: '11px', fontWeight: '800', padding: '3px 10px', borderRadius: '12px' }}>
                    300 Pcs
                  </span>
                </div>
                <p style={{ fontSize: '12px', color: '#64748B', margin: 0 }}>
                  Vendor: <strong>Konveksi Berkah Pekalongan</strong> • Target: 2026-11-10
                </p>
              </div>
              <span style={{ backgroundColor: '#FEF3C7', color: '#92400E', fontSize: '11px', fontWeight: '800', padding: '8px 18px', borderRadius: '12px', border: '1px solid #FCD34D' }}>
                ⏰ POTONG KAIN
              </span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: TIM KREATIF */}
      {activeTab === 'kreatif' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#000000', margin: 0 }}>
              Jadwal Content & Sampel B-Roll
            </h3>

            <button
              type="button"
              onClick={() => setShowModalKreatif(true)}
              style={{
                backgroundColor: '#D10056', color: '#ffffff', border: 'none', padding: '12px 24px', borderRadius: '20px', fontSize: '13px', fontWeight: '800', cursor: 'pointer', boxShadow: '0 4px 12px rgba(209, 0, 86, 0.25)'
              }}
            >
              + Buat Jadwal Konten
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '20px 28px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '900', margin: '0 0 6px 0', color: '#000' }}>
                  Fitcheck Lavie Pants Black
                </h4>
                <p style={{ fontSize: '12px', color: '#64748B', margin: 0 }}>
                  Talent: <strong>Incess & Team</strong> • Tanggal: 2026-10-20
                </p>
              </div>
              <span style={{ backgroundColor: '#F1F5F9', color: '#334155', fontSize: '11px', fontWeight: '800', padding: '8px 18px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                🎬 PROSES TAKE
              </span>
            </div>

            <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '20px 28px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '900', margin: '0 0 6px 0', color: '#000' }}>
                  Spill Outfit Kuliah Lavie Pants
                </h4>
                <p style={{ fontSize: '12px', color: '#64748B', margin: 0 }}>
                  Talent: <strong>Duo Matcha</strong> • Tanggal: 2026-10-22
                </p>
              </div>
              <span style={{ backgroundColor: '#F1F5F9', color: '#334155', fontSize: '11px', fontWeight: '800', padding: '8px 18px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                🎬 DRAFT HOOK
              </span>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 1: FORM SPK PRODUKSI CMT BARU */}
      {showModalCMT && (
        <div style={{
          position: 'fixed', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999
        }}>
          <div style={{
            backgroundColor: '#ffffff', width: '100%', maxWidth: '450px', borderRadius: '28px', padding: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            <h2 style={{ fontSize: '20px', fontWeight: '900', margin: '0 0 24px 0', color: '#000' }}>
              Form SPK Produksi CMT Baru
            </h2>

            <form onSubmit={handleSimpanCMT}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', letterSpacing: '0.8px', color: '#000', marginBottom: '8px' }}>
                  NAMA PRODUK
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Lavie Pants Black"
                  value={namaProduk}
                  onChange={(e) => setNamaProduk(e.target.value)}
                  style={{ width: '100%', padding: '14px 16px', borderRadius: '16px', border: '2px solid #94A3B8', outline: 'none', fontSize: '13px', fontWeight: '600', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', letterSpacing: '0.8px', color: '#000', marginBottom: '8px' }}>
                  JUMLAH (PCS)
                </label>
                <input
                  type="number"
                  required
                  placeholder="Contoh: 400"
                  value={jumlahPcs}
                  onChange={(e) => setJumlahPcs(e.target.value)}
                  style={{ width: '100%', padding: '14px 16px', borderRadius: '16px', border: '2px solid #94A3B8', outline: 'none', fontSize: '13px', fontWeight: '600', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', letterSpacing: '0.8px', color: '#000', marginBottom: '8px' }}>
                  VENDOR KONVEKSI
                </label>
                <select
                  value={vendor}
                  onChange={(e) => setVendor(e.target.value)}
                  style={{ width: '100%', padding: '14px 16px', borderRadius: '16px', border: '2px solid #94A3B8', outline: 'none', fontSize: '13px', fontWeight: '700', backgroundColor: '#fff', boxSizing: 'border-box', cursor: 'pointer' }}
                >
                  <option value="CMT Elen Store Utama">CMT Elen Store Utama</option>
                  <option value="CV Taylor Pekalongan">CV Taylor Pekalongan</option>
                  <option value="Konveksi Berkah Pekalongan">Konveksi Berkah Pekalongan</option>
                </select>
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', letterSpacing: '0.8px', color: '#000', marginBottom: '8px' }}>
                  TARGET SELESAI
                </label>
                <input
                  type="date"
                  required
                  value={targetSelesai}
                  onChange={(e) => setTargetSelesai(e.target.value)}
                  style={{ width: '100%', padding: '14px 16px', borderRadius: '16px', border: '2px solid #94A3B8', outline: 'none', fontSize: '13px', fontWeight: '600', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  type="button"
                  onClick={() => setShowModalCMT(false)}
                  style={{ flex: 1, backgroundColor: '#E2E8F0', color: '#334155', border: 'none', padding: '14px', borderRadius: '16px', fontSize: '13px', fontWeight: '800', cursor: 'pointer' }}
                >
                  Batal
                </button>
                <button
                  type="submit"
                  style={{ flex: 1, backgroundColor: '#000000', color: '#ffffff', border: 'none', padding: '14px', borderRadius: '16px', fontSize: '13px', fontWeight: '800', cursor: 'pointer' }}
                >
                  Simpan SPK
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: BUAT JADWAL KONTEN BARU */}
      {showModalKreatif && (
        <div style={{
          position: 'fixed', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999
        }}>
          <div style={{
            backgroundColor: '#ffffff', width: '100%', maxWidth: '450px', borderRadius: '28px', padding: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            <h2 style={{ fontSize: '20px', fontWeight: '900', margin: '0 0 24px 0', color: '#000' }}>
              Buat Jadwal Konten Baru
            </h2>

            <form onSubmit={handleSimpanKreatif}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', letterSpacing: '0.8px', color: '#000', marginBottom: '8px' }}>
                  JUDUL / KONSEP KONTEN
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Fitcheck Lavie Pants B-Roll"
                  value={judulKonten}
                  onChange={(e) => setJudulKonten(e.target.value)}
                  style={{ width: '100%', padding: '14px 16px', borderRadius: '16px', border: '2px solid #94A3B8', outline: 'none', fontSize: '13px', fontWeight: '600', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', letterSpacing: '0.8px', color: '#000', marginBottom: '8px' }}>
                  PLATFORM
                </label>
                <select
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  style={{ width: '100%', padding: '14px 16px', borderRadius: '16px', border: '2px solid #94A3B8', outline: 'none', fontSize: '13px', fontWeight: '700', backgroundColor: '#fff', boxSizing: 'border-box', cursor: 'pointer' }}
                >
                  <option value="TikTok">TikTok</option>
                  <option value="Instagram Reels">Instagram Reels</option>
                  <option value="Shopee Video">Shopee Video</option>
                </select>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', letterSpacing: '0.8px', color: '#000', marginBottom: '8px' }}>
                  TALENT / HOST
                </label>
                <input
                  type="text"
                  required
                  value={talent}
                  onChange={(e) => setTalent(e.target.value)}
                  style={{ width: '100%', padding: '14px 16px', borderRadius: '16px', border: '2px solid #94A3B8', outline: 'none', fontSize: '13px', fontWeight: '600', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', letterSpacing: '0.8px', color: '#000', marginBottom: '8px' }}>
                  TANGGAL TAKE VIDEO
                </label>
                <input
                  type="date"
                  required
                  value={tanggalTake}
                  onChange={(e) => setTanggalTake(e.target.value)}
                  style={{ width: '100%', padding: '14px 16px', borderRadius: '16px', border: '2px solid #94A3B8', outline: 'none', fontSize: '13px', fontWeight: '600', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  type="button"
                  onClick={() => setShowModalKreatif(false)}
                  style={{ flex: 1, backgroundColor: '#E2E8F0', color: '#334155', border: 'none', padding: '14px', borderRadius: '16px', fontSize: '13px', fontWeight: '800', cursor: 'pointer' }}
                >
                  Batal
                </button>
                <button
                  type="submit"
                  style={{ flex: 1, backgroundColor: '#E5006D', color: '#ffffff', border: 'none', padding: '14px', borderRadius: '16px', fontSize: '13px', fontWeight: '800', cursor: 'pointer' }}
                >
                  Simpan Jadwal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}