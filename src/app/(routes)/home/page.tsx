'use client';

import Image from 'next/image';
import { Hero } from './components/hero';
import { backgroundChillMarioGif } from '#/images/background';

const BACKGROUND_IMAGE_ALT = 'pixel-art chill mario backround gif';
const BACKGROUND_IMAGE_WIDTH = 1920;
const BACKGROUND_IMAGE_HEIGHT = 1080;

export default function HomePage() {
  return (
    <main>
      <section id='home-hero' className='max-w-none h-screen w-full overflow-hidden'>
        <Hero />
        <Image
          src={backgroundChillMarioGif}
          alt={BACKGROUND_IMAGE_ALT}
          width={BACKGROUND_IMAGE_WIDTH}
          height={BACKGROUND_IMAGE_HEIGHT}
          unoptimized={true}
          className='absolute top-0 left-0 z-[0] w-full h-full object-cover object-bottom opacity-25'
        />
      </section>
    </main>
  );
}
