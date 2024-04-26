import { Introduction, Story, Skills } from './components';
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
