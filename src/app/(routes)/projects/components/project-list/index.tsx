import * as Constants from './constants';
import { ProjectCard } from './project-card';

const ProjectList = () => {
  return (
    <div className='flex flex-col gap-4 overflow-hidden'>
      <h2>{Constants.HEADING}</h2>
      {/* project items container */}
      <div className='w-full pb-10 flex flex-col items-stretch justify-between gap-[100px]'>
        {Constants.PROJECTS.map((project) => (
          <ProjectCard
            key={`project-card-${project.id}`}
            id={project.id}
            name={project.name}
            overview={project.overview}
            description={project.description}
            imageSource={project.imageSource}
            githubURL={project.githubURL}
            demoURL={project.demoURL}
            techStack={project.techStack}
          />
        ))}
      </div>
    </div>
  );
};

export { ProjectList };
