'use client';

import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF7F2', fontFamily: 'sans-serif', color: '#4A3B2C', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Header Navigation */}
      <header style={{ padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo & Brand Left */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '45px', height: '45px', minWidth: '45px', borderRadius: '50%', overflow: 'hidden', border: '1px solid #D4AF37', boxShadow: '0 2px 6px rgba(0,0,0,0.05)', backgroundColor: '#FAF7F2' }}>
            <img 
              src="/logo-elenstore.jpeg" 
              alt="Elen Store Logo" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
            />
          </div>
          <div>
            <h1 style={{ fontSize: '18px', fontWeight: '900', letterSpacing: '1.5px', color: '#3E3225', margin: 0 }}>
              ELEN STORE
            </h1>
            <p style={{ fontSize: '9px', fontWeight: 'bold', color: '#A38A68', letterSpacing: '1px', margin: 0 }}>
              ELEGANT • FEMININE • TIMELESS
            </p>
          </div>
        </div>

        {/* Login Button Right */}
        <Link href="/dashboard/admin" style={{ textDecoration: 'none' }}>
          <button style={{
            backgroundColor: '#D4AF37', color: '#ffffff', border: 'none', padding: '10px 24px', borderRadius: '20px', fontWeight: 'bold', fontSize: '12px', cursor: 'pointer', boxShadow: '0 4px 10px rgba(212, 175, 55, 0.25)'
          }}>
            Login System
          </button>
        </Link>
      </header>

      {/* Main Hero Content Center */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px 20px' }}>
        
        {/* Big Logo Badge Center */}
        <div style={{
          width: '210px', height: '210px', minWidth: '210px', borderRadius: '50%', overflow: 'hidden', border: '4px solid #ffffff', boxShadow: '0 15px 35px rgba(0,0,0,0.08), 0 0 0 1px #EADEC9', marginBottom: '28px', backgroundColor: '#FAF7F2'
        }}>
          <img 
            src="/logo-elenstore.jpeg" 
            alt="Elen Store Large" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
          />
        </div>

        {/* Main Title */}
        <h1 style={{ fontSize: '38px', fontWeight: '900', letterSpacing: '2px', color: '#3E3225', margin: '0 0 16px 0' }}>
          ELEN STORE COLLECTION
        </h1>

        {/* Subtitle Description */}
        <p style={{ fontSize: '14px', color: '#6B5947', lineHeight: '1.6', maxWidth: '600px', margin: '0 0 32px 0' }}>
          Sistem Manajemen Inventaris Gudang, SPK Produksi Konveksi, dan <br />
          Jadwal Konten Kreatif Official Elen Store.
        </p>

        {/* Enter Dashboard Button */}
        <Link href="/dashboard/admin" style={{ textDecoration: 'none' }}>
          <button style={{
            backgroundColor: '#433425', color: '#ffffff', border: 'none', padding: '14px 32px', borderRadius: '16px', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 6px 18px rgba(67, 52, 37, 0.3)'
          }}>
            <span>🔐</span> Masuk ke Dashboard
          </button>
        </Link>

      </main>

    </div>
  );
}