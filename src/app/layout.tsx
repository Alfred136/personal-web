import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import { NavBar } from '@/components';
import './globals.css';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Alfred Tse's Website",
  description: ''
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
