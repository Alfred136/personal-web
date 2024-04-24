'use client';

import { Hero } from './components/hero/';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const key = 'isWebsiteFirstLoad';
    const isFirstPageLoadInStorage = localStorage.getItem(key);

    if (!isFirstPageLoadInStorage) {
      localStorage.setItem(key, 'false');
    }
  }, []);

  return (
    <main className='overflow-hidden'>
      <section id='home-hero' className='max-w-none h-screen w-full overflow-hidden'>
        <Hero />
      </section>
    </main>
  );
}
