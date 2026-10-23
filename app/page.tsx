'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF7F2', color: '#4A3B2C', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '24px', fontFamily: 'sans-serif' }}>
      {/* Top Header */}
      <header style={{ maxWidth: '1000px', margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid #EADEC9' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img
            src="/logo-elenstore.jpeg"
            alt="Elen Store Logo"
            style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #D4AF37' }}
          />
          <div>
            <h1 style={{ fontSize: '16px', fontWeight: 'bold', letterSpacing: '1px', color: '#5A4632', margin: 0 }}>ELEN STORE</h1>
            <p style={{ fontSize: '9px', letterSpacing: '1px', color: '#A38A68', margin: 0, textTransform: 'uppercase', fontWeight: 'bold' }}>
              Elegant • Feminine • Timeless
            </p>
          </div>
        </div>

        <button
          onClick={() => router.push('/login')}
          style={{ backgroundColor: '#D4AF37', color: '#fff', padding: '8px 16px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
        >
          Login System
        </button>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '600px', margin: 'auto', width: '100%', textAlign: 'center', padding: '32px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '180px', height: '180px', borderRadius: '50%', overflow: 'hidden', border: '4px solid #fff', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', margin: '0 auto 24px auto' }}>
          <img
            src="/logo-elenstore.jpeg"
            alt="Elen Store Main Logo"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <h2 style={{ fontSize: '28px', fontWeight: '900', color: '#4A3B2C', letterSpacing: '1px', margin: '0 0 12px 0' }}>
          ELEN STORE COLLECTION
        </h2>
        <p style={{ fontSize: '13px', color: '#7C6A58', margin: '0 0 24px 0', lineHeight: '1.6' }}>
          Sistem Manajemen Inventaris Gudang, SPK Produksi Konveksi, dan Jadwal Konten Kreatif Official Elen Store.
        </p>

        <button
          onClick={() => router.push('/dashboard/admin')}
          style={{ backgroundColor: '#4A3B2C', color: '#fff', fontWeight: 'bold', padding: '14px 28px', borderRadius: '16px', fontSize: '14px', border: 'none', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
        >
          🔐 Masuk ke Dashboard
        </button>
      </main>

      {/* Footer */}
      <footer style={{ textAlign: 'center', paddingTop: '16px', borderTop: '1px solid #EADEC9', fontSize: '11px', color: '#A38A68' }}>
        © 2026 Elen Store Collection. Managed by Incess & Team.
      </footer>
    </div>
  );
}