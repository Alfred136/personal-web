import { type StaticImageData } from 'next/image';
import { ProjectCard } from './project-card';
import { projectFlamingoPng, projectSpli3ePng, projectOldPortfolioPng } from '#/images/projects';

// global constants
const HEADING = 'All Projects';

const PROJECTS: Project[] = [
  {
    id: 'project-flamingo',
    name: 'Flamingo - Ecommerce',
    overview: 'An Ecommerce website with Stripe payment integration.',
    description:
      'An Ecommerce store where users can add items to cart and checkout using Stripe payment. This project uses Sanity for backend and react-query for data-fetching. Reponsive UI supporting desktop, tablet and mobile devices.',
    imageSource: projectFlamingoPng,
    githubURL: 'https://github.com/Alfred136/project-ecommerce-web',
    demoURL: 'https://flamingo-ecommerce.vercel.app/',
    techStack: ['nextjs', 'sanity', 'tailwindcss', 'stripe']
  },
  {
    id: 'project-personal-website',
    name: 'My Website',
    overview: 'This site',
    description:
      'The site you are visiting now. Featuring a playful and engaging UI with pixel-art styling.',
    imageSource: projectSpli3ePng, // TODO: add image
    githubURL: 'https://github.com/Alfred136/personal-website',
    demoURL: '/',
    techStack: ['nextjs', 'tailwindcss', 'typescript']
  },
  {
    id: 'project-old-portfolio',
    name: 'Old portfolio site',
    overview: 'A portfolio website developed with next.js 13.',
    description: 'A portfolio website developed with next.js 13, featuring a simple and clean UI.',
    imageSource: projectOldPortfolioPng,
    githubURL: 'https://github.com/Alfred136/portfolio-web',
    demoURL: 'https://AlfredTse.vercel.app/',
    techStack: ['nextjs', 'tailwindcss', 'typescript']
  },
  {
    id: 'project-spli3e',
    name: 'Spli3e UI',
    overview: 'A UI design for a landing page.',
    description:
      "A bronchure landing page. The design is referenced from 'Splice Landing Page' on Figma. Reponsive UI supporting desktop, tablet and mobile devices.",
    imageSource: projectSpli3ePng,
    githubURL: 'https://github.com/Alfred136/project-spli3e-web',
    demoURL: 'https://spli3e.alfredwebdev.com/',
    techStack: ['react', 'tailwindcss']
  }
];

interface Project {
  id: string;
  name: string;
  overview: string;
  description: string;
  imageSource: StaticImageData;
  githubURL: string;
  demoURL: string;
  techStack: string[];
}

export const ProjectList = () => {
  return (
    <div className='flex flex-col gap-4 overflow-hidden'>
      <h2>{HEADING}</h2>
      <div className='w-full flex flex-col items-stretch justify-between gap-[100px]'>
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
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
