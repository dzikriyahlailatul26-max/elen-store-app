'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  // PIN rahasia tim Elen Store
  const PIN_RAHASIA = '123456';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === PIN_RAHASIA) {
      localStorage.setItem('elen_auth', 'true');
      router.push('/dashboard/admin');
    } else {
      setError(true);
      setPin('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm text-center">
        <h1 className="text-xl font-bold text-gray-800 mb-2">Elen Store System</h1>
        <p className="text-sm text-gray-500 mb-6">Masukkan PIN Akses Gudang</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            maxLength={6}
            value={pin}
            onChange={(e) => {
              setError(false);
              setPin(e.target.value);
            }}
            placeholder="Masukkan 6 Digit PIN"
            className="w-full text-center text-2xl tracking-widest py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black text-black"
          />

          {error && (
            <p className="text-sm text-red-500 font-medium">PIN Salah! Coba lagi.</p>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}