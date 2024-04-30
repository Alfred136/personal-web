import { Intro, Story, Skills } from './components';
import { BackgroundImage } from '@/components';

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

      <BackgroundImage />
    </main>
  );
};

export default AboutPage;
