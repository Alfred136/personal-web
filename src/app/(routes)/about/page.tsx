import { Introduction } from './components/introduction';
import { Story } from './components/story';
import { Skills } from './components/skills';
import { BackgroundImage } from '@/components/background-image';

export default function AboutPage() {
  return (
    <main>
      <section id='about-overview'>
        <Introduction />
      </section>

      <section id='about-skills'>
        <Skills />
      </section>

      <section id='about-story'>
        <Story />
      </section>

      <BackgroundImage />
    </main>
  );
}
