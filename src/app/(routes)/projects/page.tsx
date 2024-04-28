import { ProjectList } from './components';
import { Background } from '@/components';

const ProjectsPage = () => {
  return (
    <main>
      <section id='projects-list'>
        <ProjectList />
      </section>

      <Background />
    </main>
  );
};

export default ProjectsPage;
