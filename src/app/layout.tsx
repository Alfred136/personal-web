import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import { NavigationBar } from '@/components';
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
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
