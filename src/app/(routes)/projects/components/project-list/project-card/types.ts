import type { StaticImageData } from 'next/image';

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

interface ProjectCardProps extends Project {}

interface ProjectCardImageProps {
  src: StaticImageData;
  alt: string;
  isDarken: boolean;
}

interface ProjectCardDetailsProps {
  id: string;
  name: string;
  description: string;
  githubURL: string;
  demoURL: string;
  techStack: string[];
  showDetailsOnScreenMd: boolean;
}

interface ProjectCardExpandTabProps {
  showProjectDetails: boolean;
  handleExpandButtonClick: () => void;
}

export type {
  Project,
  ProjectCardProps,
  ProjectCardImageProps,
  ProjectCardDetailsProps,
  ProjectCardExpandTabProps
};
