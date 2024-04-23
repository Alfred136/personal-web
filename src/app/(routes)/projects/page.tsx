import { ProjectList } from './components/project-list';
import { BackgroundImage } from '@/components/background-image';

export default function ProjectsPage() {
  return (
    <main>
      <section id='projects-list' className='pt-20'>
        <ProjectList />
      </section>

      <BackgroundImage />
    </main>
  );
}
