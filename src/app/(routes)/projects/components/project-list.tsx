import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import projectFlamingoImage from '/public/project_flamingo.png';
import projectPortfolioImage from '/public/project_portfolio.png';
import projectSpli3eImage from '/public/project_spli3e.png';
import { Button } from '@/components/button';

// global constants
const HEADING = 'All Projects';
const MORE = 'More...';
const PROJECTS_LINK = '/projects';
const LIVE_DEMO = 'Live Demo';
const VIEW_CODE = 'View Code';

const PROJECT_CARD_IMAGE_WIDTH = 1920;
const PROJECT_CARD_IMAGE_HEIGHT = 1080;

const PROJECTS: Project[] = [
  {
    id: 'project-flamingo',
    name: 'Flamingo - Ecommerce',
    overview: 'An Ecommerce website with Stripe payment integration.',
    description:
      'An Ecommerce store where users can add items to cart and checkout using Stripe payment. This project uses Sanity for backend and react-query for data-fetching. Reponsive UI supporting desktop, tablet and mobile devices.',
    imageSource: projectFlamingoImage,
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
    imageSource: projectSpli3eImage, // TODO: add image
    githubURL: 'https://github.com/Alfred136/personal-website',
    demoURL: '/',
    techStack: ['nextjs', 'tailwindcss', 'typescript']
  },
  {
    id: 'project-old-portfolio',
    name: 'Old portfolio site',
    overview: 'A portfolio website developed with next.js 13.',
    description: 'A portfolio website developed with next.js 13, featuring a simple and clean UI.',
    imageSource: projectPortfolioImage,
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
    imageSource: projectSpli3eImage,
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

interface ProjectCardProps {
  id: string;
  name: string;
  overview: string;
  description: string;
  imageSource: StaticImageData;
  githubURL: string;
  demoURL: string;
  techStack: string[];
}

const ProjectCard = (props: ProjectCardProps) => {
  const { id, name, description, imageSource, githubURL, demoURL, techStack } = props;

  return (
    <div className='w-full h-full flex flex-col gap-2 bg-morning md:flex-row'>
      <Image
        src={imageSource}
        alt={description}
        width={PROJECT_CARD_IMAGE_WIDTH}
        height={PROJECT_CARD_IMAGE_HEIGHT}
        className='w-full object-cover object-left-top opacity-90 md:w-2/5'
      />

      <div className='flex flex-col gap-8 px-6 pt-4 pb-10 text-night ss:px-10 md:w-3/5 md:px-6 md:py-10'>
        <h2>{name}</h2>
        <p>{description}</p>
        <div className='flex flex-wrap'>
          {techStack.map((tech) => (
            <span
              key={`${name}-${tech}`}
              className='rounded-md border-[2px] border-blue-200 text-[12px] xs:text-[14px] text-gray-500 px-2 py-1 mr-2'
            >
              {tech}
            </span>
          ))}
        </div>
        <div className='flex flex-wrap gap-2 xs:gap-4'>
          {id !== 'project-personal-website' ? <Button title={LIVE_DEMO} link={demoURL} /> : null}
          <Button title={VIEW_CODE} link={githubURL} />
        </div>
      </div>
    </div>
  );
};

export const ProjectList = () => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <h1>{HEADING}</h1>
      <div className='w-full flex flex-col items-stretch justify-between gap-10'>
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
