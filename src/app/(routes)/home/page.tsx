import { Hero } from './components';

const HomePage = () => {
  return (
    <main className='p-0 overflow-hidden'>
      <section id='home-hero' className='max-w-none h-screen w-full overflow-hidden'>
        <Hero />
      </section>
    </main>
  );
};

export default HomePage;
