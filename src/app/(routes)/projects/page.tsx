import { ProjectList } from './components';
import { BackgroundImage } from '@/components';

const ProjectsPage = () => {
  return (
    <main>
      <section id='projects-list'>
        <ProjectList />
      </section>

      <BackgroundImage />
    </main>
  );
};

export default ProjectsPage;
