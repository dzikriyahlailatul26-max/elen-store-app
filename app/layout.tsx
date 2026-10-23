'use client';

import { useRouter } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen text-gray-900">
        {/* Header Navigasi Responsif HP */}
        <header className="w-full bg-white border-b border-gray-200 p-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
            {/* Logo & Title */}
            <div className="flex items-center gap-2 shrink-0">
              <h1 className="font-black text-lg text-black tracking-tight">ELEN STORE</h1>
              <span className="bg-pink-100 text-pink-600 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">
                System
              </span>
            </div>

            {/* Navigation Buttons (Horizontal Scroll / Responsive) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none w-full md:w-auto">
              <button
                onClick={() => router.push('/dashboard/admin')}
                className="flex items-center gap-1.5 whitespace-nowrap bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold px-3 py-2 rounded-xl transition-all shrink-0 cursor-pointer"
              >
                <span>📦</span> Admin Gudang
              </button>

              <button
                onClick={() => router.push('/dashboard/retur')}
                className="flex items-center gap-1.5 whitespace-nowrap bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold px-3 py-2 rounded-xl transition-all shrink-0 cursor-pointer"
              >
                <span>🔄</span> Retur & CS
              </button>

              <button
                onClick={() => router.push('/dashboard/produksi')}
                className="flex items-center gap-1.5 whitespace-nowrap bg-black text-white text-xs font-bold px-3 py-2 rounded-xl transition-all shrink-0 cursor-pointer"
              >
                <span>✂️</span> Produksi & Kreatif
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}