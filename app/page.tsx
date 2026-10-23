'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF7F2', color: '#4A3B2C', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px', fontFamily: 'sans-serif', boxSizing: 'border-box' }}>
      
      {/* Header Atas */}
      <header style={{ maxWidth: '900px', margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid #EADEC9' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            src="/logo-elenstore.jpeg"
            alt="Elen Store Logo"
            width="36"
            height="36"
            style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #D4AF37' }}
          />
          <div>
            <h1 style={{ fontSize: '15px', fontWeight: 'bold', letterSpacing: '1px', color: '#5A4632', margin: 0 }}>ELEN STORE</h1>
            <p style={{ fontSize: '8px', letterSpacing: '1px', color: '#A38A68', margin: 0, textTransform: 'uppercase', fontWeight: 'bold' }}>
              Elegant • Feminine • Timeless
            </p>
          </div>
        </div>

        <button
          onClick={() => router.push('/login')}
          style={{ backgroundColor: '#D4AF37', color: '#fff', padding: '6px 14px', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
        >
          Login System
        </button>
      </header>

      {/* Konten Utama (Logo Dikunci 160px) */}
      <main style={{ maxWidth: '500px', margin: 'auto', width: '100%', textAlign: 'center', padding: '20px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <div style={{ width: '160px', height: '160px', borderRadius: '50%', overflow: 'hidden', border: '4px solid #ffffff', boxShadow: '0 8px 20px rgba(0,0,0,0.08)', margin: '0 auto 20px auto' }}>
          <img
            src="/logo-elenstore.jpeg"
            alt="Elen Store Main Logo"
            width="160"
            height="160"
            style={{ width: '160px', height: '160px', objectFit: 'cover', display: 'block' }}
          />
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: '900', color: '#4A3B2C', letterSpacing: '1px', margin: '0 0 10px 0' }}>
          ELEN STORE COLLECTION
        </h2>
        <p style={{ fontSize: '12px', color: '#7C6A58', margin: '0 0 20px 0', lineHeight: '1.5' }}>
          Sistem Manajemen Inventaris Gudang, SPK Produksi Konveksi, dan Jadwal Konten Kreatif Official Elen Store.
        </p>

        <button
          onClick={() => router.push('/dashboard/admin')}
          style={{ backgroundColor: '#4A3B2C', color: '#fff', fontWeight: 'bold', padding: '12px 24px', borderRadius: '14px', fontSize: '13px', border: 'none', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
        >
          🔐 Masuk ke Dashboard
        </button>
      </main>

      {/* Footer */}
      <footer style={{ textAlign: 'center', paddingTop: '12px', borderTop: '1px solid #EADEC9', fontSize: '10px', color: '#A38A68' }}>
        © 2026 Elen Store Collection. Managed by Incess & Team.
      </footer>
    </div>
  );
}