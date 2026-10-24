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
          <div style={{
            width: '45px', height: '45px', borderRadius: '50%', border: '1px solid #D4AF37', backgroundColor: '#FAF7F2', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
          }}>
            <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="46" stroke="#D4AF37" strokeWidth="2" />
              <path d="M30 35 H60 M30 50 H55 M30 65 H60 M30 35 V65" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round" />
              <path d="M65 40 C65 35, 50 35, 50 48 C50 62, 65 62, 65 70 C65 78, 48 78, 45 72" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round" fill="none" />
            </svg>
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
          width: '220px', height: '220px', borderRadius: '50%', border: '2px solid #D4AF37', backgroundColor: '#FAF7F2', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 15px 35px rgba(0,0,0,0.06), inset 0 0 0 6px #ffffff', marginBottom: '28px', position: 'relative'
        }}>
          {/* SVG Design Aesthetic ES */}
          <svg width="140" height="110" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Plant Leaf Element */}
            <path d="M25 65 C20 45, 35 30, 45 35 C35 45, 30 55, 25 65 Z" fill="#D4AF37" opacity="0.8" />
            <path d="M18 55 C12 42, 22 32, 30 36 C22 42, 20 50, 18 55 Z" fill="#D4AF37" opacity="0.6" />
            <path d="M30 72 C32 60, 42 52, 48 57 C40 62, 35 68, 30 72 Z" fill="#D4AF37" opacity="0.7" />
            
            {/* Letter E */}
            <path d="M42 22 H75 M42 45 H70 M42 68 H75 M42 22 V68" stroke="#8C6D3B" strokeWidth="5" strokeLinecap="round" />
            
            {/* Letter S */}
            <path d="M78 28 C78 20, 58 20, 58 38 C58 56, 78 56, 78 70 C78 82, 55 82, 52 74" stroke="#B89446" strokeWidth="5" strokeLinecap="round" fill="none" />
            
            {/* Sparkle */}
            <path d="M88 25 L90 20 L92 25 L97 27 L92 29 L90 34 L88 29 L83 27 Z" fill="#D4AF37" />
          </svg>

          <div style={{ marginTop: '4px' }}>
            <h2 style={{ fontSize: '15px', fontWeight: '800', letterSpacing: '3px', color: '#3E3225', margin: 0 }}>
              ELEN STORE
            </h2>
            <p style={{ fontSize: '7px', fontWeight: 'bold', letterSpacing: '2px', color: '#A38A68', margin: '3px 0 0 0' }}>
              COLLECTION
            </p>
          </div>
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