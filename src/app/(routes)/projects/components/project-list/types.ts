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

interface ProjectProps extends Project {}

interface ProjectImageProps {
  src: StaticImageData;
  alt: string;
  isDarken: boolean;
}

interface ProjectDetailsProps {
  id: string;
  name: string;
  description: string;
  githubURL: string;
  demoURL: string;
  techStack: string[];
  showProjectDetailsOnScreenMd: boolean;
}

interface ProjectExpandTabProps {
  showProjectDetails: boolean;
  handleExpandButtonClick: () => void;
}

interface ProjectDetailsTechTagProps {
  techName: string;
}

export type {
  Project,
  ProjectProps,
  ProjectImageProps,
  ProjectDetailsProps,
  ProjectExpandTabProps,
  ProjectDetailsTechTagProps
};
