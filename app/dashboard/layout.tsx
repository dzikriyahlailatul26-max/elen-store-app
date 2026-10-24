'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF7F2', fontFamily: 'sans-serif', color: '#4A3B2C' }}>
      
      {/* 1 Header Navigasi Utama */}
      <header style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #EADEC9', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <h1 style={{ fontSize: '18px', fontWeight: '900', letterSpacing: '1px', color: '#4A3B2C', margin: 0 }}>ELEN STORE</h1>
          <span style={{ backgroundColor: '#FDF2F2', color: '#D9534F', fontSize: '10px', fontWeight: 'bold', padding: '2px 8px', borderRadius: '10px', letterSpacing: '0.5px' }}>SYSTEM</span>
        </div>

        <nav style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Link href="/dashboard/admin" style={{ textDecoration: 'none' }}>
            <button style={{
              backgroundColor: pathname === '/dashboard/admin' ? '#0F172A' : 'transparent',
              color: pathname === '/dashboard/admin' ? '#ffffff' : '#64748B',
              border: pathname === '/dashboard/admin' ? 'none' : '1px solid transparent',
              padding: '8px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px'
            }}>
              <span>📦</span> Admin Gudang
            </button>
          </Link>

          <Link href="/dashboard/retur" style={{ textDecoration: 'none' }}>
            <button style={{
              backgroundColor: pathname === '/dashboard/retur' ? '#0F172A' : 'transparent',
              color: pathname === '/dashboard/retur' ? '#ffffff' : '#64748B',
              border: pathname === '/dashboard/retur' ? 'none' : '1px solid transparent',
              padding: '8px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px'
            }}>
              <span>🔄</span> Retur & CS
            </button>
          </Link>

          <Link href="/dashboard/produksi" style={{ textDecoration: 'none' }}>
            <button style={{
              backgroundColor: pathname === '/dashboard/produksi' ? '#0F172A' : 'transparent',
              color: pathname === '/dashboard/produksi' ? '#ffffff' : '#64748B',
              border: pathname === '/dashboard/produksi' ? 'none' : '1px solid transparent',
              padding: '8px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px'
            }}>
              <span>✂️</span> Produksi & Kreatif
            </button>
          </Link>
        </nav>
      </header>

      {/* Konten Halaman Form */}
      <main style={{ padding: '32px 16px', maxWidth: '1000px', margin: '0 auto' }}>
        {children}
      </main>

      {/* Watermark Footer */}
      <footer style={{ textAlign: 'center', padding: '24px 0 32px 0', fontSize: '11px', color: '#A38A68' }}>
        Elen Store System v1.0 • Managed & Developed by <strong>by.laildzkryh</strong>
      </footer>
    </div>
  );
}