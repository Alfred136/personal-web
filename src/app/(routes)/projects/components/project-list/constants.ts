import type { Project } from './types';
import { projectFlamingoPng, projectSpli3ePng, projectOldPortfolioPng } from '#/images/projects';

const HEADING: string = 'All Projects';
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

export { HEADING, PROJECTS };
