import { type StaticImageData } from 'next/image';
import { ProjectListItem } from './project-list-item';
import { projectFlamingoPng, projectSpli3ePng, projectOldPortfolioPng } from '#/images/projects';

// global constants
const HEADING = 'All Projects';
const PROJECTS: Project[] = [
  {
    id: 'pj-flamingo',
    name: 'Flamingo - Ecommerce',
    overview: 'A clothing ecommerce website integrated with Stripe payment',
    description: `An Ecommerce store utilizing Stripe payment for seamless cart management and checkout. 
      This project uses Sanity as a headless-cms backend and utilizes Next.js Server-Side Rendering (SSR), 
      with reponsive UI supporting desktop, tablet and mobile devices.`,
    imageSource: projectFlamingoPng,
    githubURL: 'https://github.com/Alfred136/project-ecommerce-web',
    demoURL: 'https://flamingo-ecommerce.vercel.app/',
    techStack: ['Next.js', 'Sanity', 'Stripe', 'Tailwindcss', 'JavaScript']
  },
  {
    id: 'pj-personal-website',
    name: 'This Website :)',
    overview: 'A mario-theme interactive personal website',
    description: `Welcome to the site you are now exploring, where a pixel-art Mario theme adorns a playful
      and captivating UI/UX design while maintaining an intuitive and user-friendly experience. 
      Feel free to get in touch by sending a message through the contact form – I'd love to hear from you!`,
    imageSource: projectSpli3ePng, // TODO: add image
    githubURL: 'https://github.com/Alfred136/personal-website',
    demoURL: '/',
    techStack: ['Next.js', 'Tailwindcss', 'Typescript']
  },
  {
    id: 'pj-old-portfolio',
    name: 'Old portfolio site',
    overview: 'A minimalistic portfolio website (old)',
    description: `A portfolio website developed with Next.js 13, featuring a minimalistic and clean UI, 
      with reponsive UI supporting desktop, tablet and mobile devices.`,
    imageSource: projectOldPortfolioPng,
    githubURL: 'https://github.com/Alfred136/portfolio-web',
    demoURL: 'https://AlfredTse.vercel.app/',
    techStack: ['Next.js', 'Tailwindcss', 'Typescript']
  },
  {
    id: 'pj-spli3e',
    name: 'Spli3e UI',
    overview: 'A website landing page (UI clone)',
    description: `A responsive bronchure landing page inspired by the 'Splice Landing Page' design on Figma. 
      This project uses React and Vite.js.`,
    imageSource: projectSpli3ePng,
    githubURL: 'https://github.com/Alfred136/project-spli3e-web',
    demoURL: 'https://spli3e.alfredwebdev.com/',
    techStack: ['React', 'Vite.js', 'Tailwindcss']
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
    <div id='project-list-container' className='flex flex-col gap-4 overflow-hidden'>
      <h2>{HEADING}</h2>
      <div
        id='project-list'
        className='w-full flex flex-col items-stretch justify-between gap-[100px]'
      >
        {PROJECTS.map((project) => (
          <ProjectListItem
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
