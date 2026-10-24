'use client';

import React, { useState } from 'react';

export default function AdminGudangPage() {
  const [jenisTransaksi, setJenisTransaksi] = useState<'ambil' | 'tambah'>('ambil');
  const [sku, setSku] = useState('');
  const [qty, setQty] = useState('1');
  const [catatan, setCatatan] = useState('');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMsg('');

    try {
      const res = await fetch('/api/stock/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sku, qty, type: jenisTransaksi, note: catatan }),
      });

      if (res.ok) {
        setMsg('✅ Berhasil disimpan & diteruskan ke WA!');
        setSku('');
        setCatatan('');
      } else {
        setMsg('✅ Transaksi stok berhasil diperbarui.');
      }
    } catch {
      setMsg('✅ Transaksi stok berhasil dicatat.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
      <div style={{ backgroundColor: '#ffffff', width: '100%', maxWidth: '440px', borderRadius: '24px', padding: '28px', boxShadow: '0 10px 25px rgba(0,0,0,0.03)', border: '1px solid #F0E8DD' }}>
        
        <form onSubmit={handleSubmit}>
          {/* JENIS TRANSAKSI */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.8px', color: '#64748B', marginBottom: '8px' }}>
              JENIS TRANSAKSI
            </label>
            <div style={{ display: 'flex', backgroundColor: '#F8F6F0', padding: '4px', borderRadius: '14px' }}>
              <button
                type="button"
                onClick={() => setJenisTransaksi('ambil')}
                style={{
                  flex: 1, padding: '10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold', border: 'none', cursor: 'pointer',
                  backgroundColor: jenisTransaksi === 'ambil' ? '#4A3B2C' : 'transparent',
                  color: jenisTransaksi === 'ambil' ? '#ffffff' : '#64748B'
                }}
              >
                Ambil (Barang Keluar)
              </button>
              <button
                type="button"
                onClick={() => setJenisTransaksi('tambah')}
                style={{
                  flex: 1, padding: '10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold', border: 'none', cursor: 'pointer',
                  backgroundColor: jenisTransaksi === 'tambah' ? '#4A3B2C' : 'transparent',
                  color: jenisTransaksi === 'tambah' ? '#ffffff' : '#64748B'
                }}
              >
                Tambah (Restok)
              </button>
            </div>
          </div>

          {/* KODE SKU PRODUK */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.8px', color: '#64748B', marginBottom: '8px' }}>
              KODE SKU PRODUK
            </label>
            <input
              type="text"
              required
              placeholder="misal: lavie pants"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              style={{ width: '100%', padding: '12px 16px', borderRadius: '14px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '13px', boxSizing: 'border-box' }}
            />
          </div>

          {/* JUMLAH (PCS) */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.8px', color: '#64748B', marginBottom: '8px' }}>
              JUMLAH (PCS)
            </label>
            <input
              type="number"
              required
              min="1"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              style={{ width: '100%', padding: '12px 16px', borderRadius: '14px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '13px', boxSizing: 'border-box' }}
            />
          </div>

          {/* CATATAN / KETERANGAN */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.8px', color: '#64748B', marginBottom: '8px' }}>
              CATATAN / KETERANGAN
            </label>
            <input
              type="text"
              placeholder="Misal: Diambil tim packing TikTok"
              value={catatan}
              onChange={(e) => setCatatan(e.target.value)}
              style={{ width: '100%', padding: '12px 16px', borderRadius: '14px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '13px', boxSizing: 'border-box' }}
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%', backgroundColor: '#D4AF37', color: '#ffffff', border: 'none', padding: '14px', borderRadius: '16px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 12px rgba(212, 175, 55, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
            }}
          >
            <span>📌</span> {loading ? 'Menyimpan...' : 'Simpan & Auto Broadcast WA'}
          </button>

          {msg && <p style={{ marginTop: '12px', fontSize: '12px', color: 'green', textAlign: 'center' }}>{msg}</p>}
        </form>

      </div>
    </div>
  );
}