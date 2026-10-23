'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF7F2', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ backgroundColor: '#ffffff', border: '1px solid #EADEC9', borderRadius: '24px', padding: '32px', textAlign: 'center', maxWidth: '400px', width: '100%', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
        
        {/* Frame Logo Terkunci */}
        <div style={{ width: '130px', height: '130px', margin: '0 auto 16px auto', borderRadius: '50%', overflow: 'hidden', border: '2px solid #D4AF37' }}>
          <img
            src="/logo-elenstore.jpeg"
            alt="Elen Store Logo"
            style={{ width: '130px', height: '130px', objectFit: 'cover' }}
          />
        </div>

        <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: '#5A4632', margin: '0 0 6px 0', letterSpacing: '1px' }}>
          ELEN STORE COLLECTION
        </h1>
        <p style={{ fontSize: '11px', color: '#A38A68', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '1px', margin: '0 0 24px 0' }}>
          Elegant • Feminine • Timeless
        </p>

        <button
          onClick={() => router.push('/dashboard/admin')}
          style={{ width: '100%', backgroundColor: '#4A3B2C', color: '#ffffff', fontWeight: 'bold', padding: '12px', borderRadius: '14px', fontSize: '13px', border: 'none', cursor: 'pointer' }}
        >
          🔐 Masuk ke Dashboard
        </button>

      </div>
    </div>
  );
}