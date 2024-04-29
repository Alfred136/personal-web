import type { Metadata } from 'next';
import { NavBar } from '@/components';
import './globals.css';

export const metadata: Metadata = {
  title: "Alfred Tse's Website",
  description: 'A mario-theme interactive personal website for projects display and contact'
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
