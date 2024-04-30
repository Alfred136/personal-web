import { StaticImageData } from 'next/image';

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

export type { ProjectCardProps };
