import { StaticImageData } from 'next/image';

interface ProjectCardImageProps {
  src: StaticImageData;
  alt: string;
  isDarken: boolean;
}

export type { ProjectCardImageProps };
