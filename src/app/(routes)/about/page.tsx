import { Intro, Story, Skills } from './components';
import { Background } from '@/components';

const AboutPage = () => {
  return (
    <main>
      <section id='about-intro'>
        <Intro />
      </section>

      <section id='about-skills'>
        <Skills />
      </section>

      <section id='about-story'>
        <Story />
      </section>

      <Background />
    </main>
  );
};

export default AboutPage;
