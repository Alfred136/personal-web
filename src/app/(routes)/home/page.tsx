'use client';

import Image from 'next/image';
import { Hero } from './components/hero';
import { backgroundChillMarioGif } from '#/images/background';
import { useEffect } from 'react';

const BACKGROUND_IMAGE_ALT = 'pixel-art chill mario backround gif';
const BACKGROUND_IMAGE_WIDTH = 1920;
const BACKGROUND_IMAGE_HEIGHT = 1080;

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
        <Image
          src={backgroundChillMarioGif}
          alt={BACKGROUND_IMAGE_ALT}
          width={BACKGROUND_IMAGE_WIDTH}
          height={BACKGROUND_IMAGE_HEIGHT}
          unoptimized={true}
          className='absolute top-0 left-0 z-[0] w-full h-full object-cover object-bottom brightness-50 opacity-50'
        />
      </section>
    </main>
  );
}
