import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import projectFlamingoImage from '/public/project_flamingo.png';
import projectPortfolioImage from '/public/project_portfolio.png';
import { Button } from '@/components/button';

// global constants
const HEADING = 'Featured Projects';
const MORE = 'More...';
const PROJECTS_LINK = '/projects';
const LIVE_DEMO = 'Live Demo';
const VIEW_CODE = 'View Code';

const PROJECT_CARD_IMAGE_WIDTH = 960;
const PROJECT_CARD_IMAGE_HEIGHT = 540;

const FEATURED_PROJECTS: Project[] = [
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
    id: 'project-old-portfolio',
    name: 'Old portfolio site',
    overview: 'A portfolio website developed with next.js 13.',
    description: 'A portfolio website developed with next.js 13.',
    imageSource: projectPortfolioImage,
    githubURL: 'https://github.com/Alfred136/portfolio-web',
    demoURL: 'https://AlfredTse.vercel.app/',
    techStack: ['nextjs', 'tailwindcss', 'typescript']
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
}

const ProjectCard = (props: ProjectCardProps) => {
  const { name, overview, description, imageSource, githubURL, demoURL } = props;

  return (
    <div className='min-h-[300px] w-full flex flex-col bg-afternoon ss:w-[48%]'>
      <Image
        src={imageSource}
        alt={description}
        width={PROJECT_CARD_IMAGE_WIDTH}
        height={PROJECT_CARD_IMAGE_HEIGHT}
        className='w-full'
      />
      <div className='w-full px-4 pt-2 pb-6 flex-col gap-4 '>
        <h2>{name}</h2>
        <div>{overview}</div>
        <div className='mt-4 flex gap-4'>
          <Button title={LIVE_DEMO} link={demoURL} target='_blank' />
          <Button title={VIEW_CODE} link={githubURL} target='_blank' />
        </div>
      </div>
    </div>
  );
};

export const Featured = () => {
  return (
    <div className='flex flex-col items-center gap-4 text-center'>
      <h1>{HEADING}</h1>
      <div className='w-full flex flex-wrap items-stretch justify-between gap-10 ss:gap-0'>
        {FEATURED_PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            overview={project.overview}
            description={project.description}
            imageSource={project.imageSource}
            githubURL={project.githubURL}
            demoURL={project.demoURL}
          />
        ))}
      </div>
      <Link href={PROJECTS_LINK} className='text-[24px] hover:text-sunset'>
        {MORE}
      </Link>
    </div>
  );
};
