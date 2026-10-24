'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF7F2', fontFamily: 'sans-serif', color: '#4A3B2C', display: 'flex', flexDirection: 'column' }}>
      
      {/* SINGLE HEADER DASHBOARD TOPBAR */}
      <header style={{ 
        backgroundColor: '#ffffff', 
        borderBottom: '1px solid #E2E8F0', 
        padding: '16px 40px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
      }}>
        {/* LOGO & BRAND LEFT */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', border: '1px solid #D4AF37', backgroundColor: '#FAF7F2' }}>
            <img 
              src="/logo-elenstore.jpeg" 
              alt="Elen Store Logo" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
            />
          </div>
          <div>
            <h1 style={{ fontSize: '16px', fontWeight: '900', letterSpacing: '1px', color: '#3E3225', margin: 0 }}>
              ELEN STORE
            </h1>
            <span style={{ backgroundColor: '#F5E6D3', color: '#8C6239', fontSize: '9px', fontWeight: '800', padding: '2px 6px', borderRadius: '6px', letterSpacing: '0.5px' }}>
              SYSTEM
            </span>
          </div>
        </Link>

        {/* NAVIGATION BUTTONS RIGHT */}
        <nav style={{ display: 'flex', gap: '10px' }}>
          <Link href="/dashboard/admin" style={{ textDecoration: 'none' }}>
            <button style={{
              padding: '10px 18px', borderRadius: '12px', fontSize: '12px', fontWeight: '800', border: 'none', cursor: 'pointer',
              backgroundColor: pathname.includes('/admin') ? '#000000' : 'transparent',
              color: pathname.includes('/admin') ? '#ffffff' : '#64748B',
              transition: 'all 0.2s'
            }}>
              📦 Admin Gudang
            </button>
          </Link>

          <Link href="/dashboard/retur" style={{ textDecoration: 'none' }}>
            <button style={{
              padding: '10px 18px', borderRadius: '12px', fontSize: '12px', fontWeight: '800', border: 'none', cursor: 'pointer',
              backgroundColor: pathname.includes('/retur') ? '#000000' : 'transparent',
              color: pathname.includes('/retur') ? '#ffffff' : '#64748B',
              transition: 'all 0.2s'
            }}>
              🔄 Retur & CS
            </button>
          </Link>

          <Link href="/dashboard/produksi" style={{ textDecoration: 'none' }}>
            <button style={{
              padding: '10px 18px', borderRadius: '12px', fontSize: '12px', fontWeight: '800', border: 'none', cursor: 'pointer',
              backgroundColor: pathname.includes('/produksi') ? '#000000' : 'transparent',
              color: pathname.includes('/produksi') ? '#ffffff' : '#64748B',
              transition: 'all 0.2s'
            }}>
              ✂️ Produksi & Kreatif
            </button>
          </Link>
        </nav>
      </header>

      {/* DASHBOARD PAGE CONTENT */}
      <main style={{ flex: 1, padding: '32px 20px', maxWidth: '1100px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        {children}
      </main>

      {/* WATERMARK FOOTER RESMI */}
      <footer style={{ textAlign: 'center', padding: '20px 0 24px 0', fontSize: '11px', color: '#A38A68', borderTop: '1px solid #EADEC9', marginTop: 'auto' }}>
        Elen Store System v1.0 • Managed & Developed by <strong>by.laildzkryh</strong>
      </footer>

    </div>
  );
}