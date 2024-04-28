import Image from 'next/image';
import * as Constants from '@/app/(routes)/projects/components/project-list/project-card/constants';
import type { ProjectCardImageProps } from '@/app/(routes)/projects/components/project-list/project-card/types';

const ProjectCardImage = (props: ProjectCardImageProps) => {
  const { src, alt, isDarken } = props;
  return (
    <Image
      src={src}
      alt={alt}
      width={Constants.PROJECT_CARD_IMAGE_WIDTH}
      height={Constants.PROJECT_CARD_IMAGE_HEIGHT}
      priority={true}
      placeholder='blur'
      className={`w-full object-cover object-left-top ${isDarken ? 'md:brightness-50' : ''}`}
    />
  );
};

export { ProjectCardImage };
