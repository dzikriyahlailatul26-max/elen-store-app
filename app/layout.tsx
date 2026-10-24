import './globals.css';

export const metadata = {
  title: 'Elen Store System',
  description: 'Managed & Developed by by.laildzkryh',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}