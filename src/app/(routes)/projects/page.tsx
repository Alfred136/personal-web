import { ProjectList } from './components';
import { BackgroundImage } from '@/components/background-image';

export default function ProjectsPage() {
  return (
    <main>
      <section id='projects-project-list'>
        <ProjectList />
      </section>

      <BackgroundImage />
    </main>
  );
}
