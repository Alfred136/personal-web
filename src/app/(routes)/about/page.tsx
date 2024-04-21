import { Overview } from './components/overview';
import { Story } from './components/story';
import { Skills } from './components/skills';
import { Books } from './components/books';

export default function About() {
  return (
    <main>
      <section id='about-overview' className='pt-20'>
        <Overview />
      </section>

      <section id='about-story'>
        <Story />
      </section>

      <section id='about-skills'>
        <Skills />
      </section>

      <section id='about-books'>
        <Books />
      </section>
    </main>
  );
}
