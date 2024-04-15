'use client';

import { Hero } from './components/hero';
import { Skills } from './components/skills';
import { Featured } from './components/featured';

export default function HomePage() {
  return (
    <main>
      <section
        id='home-hero'
        className='relative max-w-none min-h-[800px] h-screen w-full overflow-hidden md:h-[800px]'
      >
        <Hero />
      </section>

      <section id='home-skills'>
        <Skills />
      </section>

      <section id='home-featured'>
        <Featured />
      </section>
    </main>
  );
}
