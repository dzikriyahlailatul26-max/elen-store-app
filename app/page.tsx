'use client';

import React from 'react';
import Link from 'next/link';

export default function ElenStoreLandingPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF7F2', fontFamily: 'sans-serif', color: '#4A3B2C' }}>
      
      {/* HEADER LANDING PAGE */}
      <header style={{ backgroundColor: '#ffffff', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E2E8F0', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', border: '1px solid #D4AF37' }}>
            <img src="/logo-elenstore.jpeg" alt="Elen Store Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <h1 style={{ fontSize: '18px', fontWeight: '900', color: '#3E3225', margin: 0, letterSpacing: '1px' }}>ELEN STORE</h1>
            <span style={{ fontSize: '10px', color: '#8C6239', fontWeight: '700' }}>Official Fashion Store</span>
          </div>
        </div>

        {/* Tombol Masuk ke System Internal */}
        <Link 
          href="/dashboard" 
          style={{ textDecoration: 'none', backgroundColor: '#0F172A', color: '#ffffff', padding: '10px 20px', borderRadius: '12px', fontSize: '12px', fontWeight: '800', boxShadow: '0 4px 12px rgba(15,23,42,0.15)' }}
        >
          🔒 Masuk System Internal
        </Link>
      </header>

      {/* HERO SECTION */}
      <main style={{ maxWidth: '1000px', margin: '60px auto', padding: '0 20px', textAlign: 'center' }}>
        <span style={{ backgroundColor: '#F5E6D3', color: '#8C6239', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: '800', letterSpacing: '1px' }}>
          WELCOME TO ELEN STORE
        </span>
        <h2 style={{ fontSize: '38px', fontWeight: '900', color: '#2D2217', margin: '24px 0 16px 0', lineHeight: 1.2 }}>
          Koleksi Fashion Outfit Elegam & Nyaman Setiap Hari
        </h2>
        <p style={{ fontSize: '15px', color: '#64748B', maxWidth: '600px', margin: '0 auto 36px auto', lineHeight: 1.6 }}>
          Sistem manajemen inventaris, retur customer service, dan pemantauan produksi konveksi resmi Elen Store.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <Link 
            href="/dashboard" 
            style={{ textDecoration: 'none', backgroundColor: '#D4AF37', color: '#ffffff', padding: '16px 32px', borderRadius: '16px', fontWeight: '800', fontSize: '14px', boxShadow: '0 4px 14px rgba(212,175,55,0.3)' }}
          >
            🚀 Buka Dashboard System
          </Link>
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '30px 0', fontSize: '12px', color: '#A38A68', borderTop: '1px solid #EADEC9', marginTop: '100px' }}>
        © 2026 Elen Store • Managed & Developed by <strong>by.laildzkryh</strong>
      </footer>

    </div>
  );
}