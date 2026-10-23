'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF7F2', color: '#4A3B2C', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '24px 32px', boxSizing: 'border-box' }}>
      
      {/* Top Header */}
      <header style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid #EADEC9' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '42px', height: '42px', borderRadius: '50%', overflow: 'hidden', border: '1px solid #D4AF37', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <img
              src="/logo-elenstore.jpeg"
              alt="Elen Store Logo"
              style={{ width: '42px', height: '42px', objectFit: 'cover' }}
            />
          </div>
          <div>
            <h1 style={{ fontSize: '16px', fontWeight: 'bold', letterSpacing: '1px', color: '#5A4632', margin: 0 }}>ELEN STORE</h1>
            <p style={{ fontSize: '9px', letterSpacing: '1px', color: '#A38A68', margin: 0, textTransform: 'uppercase', fontWeight: 'bold' }}>
              ELEGANT • FEMININE • TIMELESS
            </p>
          </div>
        </div>

        <button
          onClick={() => router.push('/login')}
          style={{ backgroundColor: '#D4AF37', color: '#ffffff', padding: '8px 20px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', border: 'none', cursor: 'pointer', boxShadow: '0 2px 6px rgba(0,0,0,0.08)' }}
        >
          Login System
        </button>
      </header>

      {/* Main Hero Section */}
      <main style={{ maxWidth: '700px', margin: 'auto', width: '100%', textAlign: 'center', padding: '40px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Circle Logo With Soft Glow */}
        <div style={{ position: 'relative', width: '190px', height: '190px', margin: '0 auto 28px auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', backgroundColor: '#EADEC9', filter: 'blur(20px)', opacity: 0.5 }}></div>
          <div style={{ position: 'relative', width: '190px', height: '190px', borderRadius: '50%', overflow: 'hidden', border: '4px solid #ffffff', boxShadow: '0 12px 30px rgba(0,0,0,0.1)' }}>
            <img
              src="/logo-elenstore.jpeg"
              alt="Elen Store Main Logo"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#4A3B2C', letterSpacing: '1.5px', margin: '0 0 12px 0' }}>
          ELEN STORE COLLECTION
        </h2>
        
        <p style={{ fontSize: '13px', color: '#7C6A58', margin: '0 0 32px 0', lineHeight: '1.6', maxWidth: '520px' }}>
          Sistem Manajemen Inventaris Gudang, SPK Produksi Konveksi, dan Jadwal Konten Kreatif Official Elen Store.
        </p>

        <button
          onClick={() => router.push('/dashboard/admin')}
          style={{ backgroundColor: '#4A3B2C', color: '#ffffff', fontWeight: 'bold', padding: '14px 32px', borderRadius: '18px', fontSize: '14px', border: 'none', cursor: 'pointer', boxShadow: '0 6px 16px rgba(0,0,0,0.12)', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <span>🔐</span> Masuk ke Dashboard
        </button>
      </main>

      {/* Footer */}
      <footer style={{ textAlign: 'center', paddingTop: '16px', borderTop: '1px solid #EADEC9', fontSize: '11px', color: '#A38A68' }}>
        © 2026 Elen Store Collection. Managed by Incess & Team.
      </footer>
    </div>
  );
}