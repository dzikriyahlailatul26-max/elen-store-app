'use client';

import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF7F2', fontFamily: 'sans-serif', color: '#4A3B2C', display: 'flex', flexDirection: 'column' }}>
      
      {/* HEADER NAVBAR */}
      <header style={{ padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ffffff', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', border: '1px solid #D4AF37', backgroundColor: '#FAF7F2' }}>
            <img src="/logo-elenstore.jpeg" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <h1 style={{ fontSize: '16px', fontWeight: '900', color: '#3E3225', margin: 0 }}>ELEN STORE</h1>
            <span style={{ fontSize: '9px', fontWeight: '800', color: '#A38A68' }}>OFFICIAL SYSTEM</span>
          </div>
        </div>

        {/* TOMBOL KLIK MASUK */}
        <Link href="/dashboard" style={{ textDecoration: 'none' }}>
          <button style={{ backgroundColor: '#D4AF37', color: '#ffffff', border: 'none', padding: '10px 24px', borderRadius: '12px', fontWeight: '800', fontSize: '12px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(212, 175, 55, 0.25)' }}>
            🚀 Masuk Dashboard
          </button>
        </Link>
      </header>

      {/* ISI LANDING PAGE */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px 20px' }}>
        <div style={{ width: '160px', height: '160px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #D4AF37', marginBottom: '24px', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
          <img src="/logo-elenstore.jpeg" alt="Logo Large" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#3E3225', margin: '0 0 12px 0' }}>ELEN STORE SYSTEM</h1>
        <p style={{ fontSize: '14px', color: '#6B5947', maxWidth: '500px', margin: '0 0 28px 0', lineHeight: '1.5' }}>
          Sistem Terpadu Stok Gudang, Retur Paket CS, SPK Produksi CMT, dan Jadwal Konten Kreatif.
        </p>

        <Link href="/dashboard" style={{ textDecoration: 'none' }}>
          <button style={{ backgroundColor: '#0F172A', color: '#ffffff', border: 'none', padding: '14px 32px', borderRadius: '14px', fontWeight: '800', fontSize: '13px', cursor: 'pointer', boxShadow: '0 4px 14px rgba(15, 23, 42, 0.2)' }}>
            Buka System Dashboard ➔
          </button>
        </Link>
      </main>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '20px 0', fontSize: '11px', color: '#A38A68' }}>
        Elen Store System v1.0 • Managed & Developed by <strong>by.laildzkryh</strong>
      </footer>

    </div>
  );
}