import type { Project } from './types';
import {
  projectPersonalWebsiteJpg,
  projectFlamingoJpg,
  projectSpli3eJpg,
  projectOldPortfolioJpg
} from '#/images/projects';

const HEADING: string = 'All Projects';
const PROJECTS: Project[] = [
  {
    id: 'pj-flamingo',
    name: 'Flamingo - Ecommerce',
    overview: 'A clothing ecommerce website integrated with Stripe payment',
    description: `An Ecommerce store utilizing Stripe payment for seamless cart management and checkout. 
      This project uses Sanity as a headless-cms backend and utilizes Next.js Server-Side Rendering (SSR), 
      with reponsive UI supporting desktop, tablet and mobile devices.`,
    imageSource: projectFlamingoJpg,
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
      This project is developed using Agile approach and the code is modular and scalable.`,
    imageSource: projectPersonalWebsiteJpg,
    githubURL: 'https://github.com/Alfred136/personal-web',
    demoURL: '/',
    techStack: ['Next.js', 'Tailwindcss', 'Typescript']
  },
  {
    id: 'pj-old-portfolio',
    name: 'Old portfolio site',
    overview: 'A minimalistic portfolio website (old)',
    description: `A portfolio website developed with Next.js 13, featuring a minimalistic and clean UI, 
      with reponsive UI supporting desktop, tablet and mobile devices.`,
    imageSource: projectOldPortfolioJpg,
    githubURL: 'https://github.com/Alfred136/portfolio-web',
    demoURL: 'https://alfred-old-portfolio.vercel.app/',
    techStack: ['Next.js', 'Tailwindcss', 'Typescript']
  },
  {
    id: 'pj-spli3e',
    name: 'Spli3e UI',
    overview: 'A website landing page (UI clone)',
    description: `A responsive bronchure landing page inspired by the 'Splice Landing Page' design on Figma. 
      This project uses React and Vite.js.`,
    imageSource: projectSpli3eJpg,
    githubURL: 'https://github.com/Alfred136/project-spli3e-web',
    demoURL: 'https://spli3e.alfredwebdev.com/',
    techStack: ['React', 'Vite.js', 'Tailwindcss']
  }
];

export { HEADING, PROJECTS };
