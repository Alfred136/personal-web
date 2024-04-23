'use client';

import { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { Button } from '@/components/button';
import { useIsScreenSize } from '@/hooks/useIsScreenSize';
import { pointingFingerDownGif } from '#/images/others';

// global constants
const PROJECT_CARD_IMAGE_WIDTH = 1920;
const PROJECT_CARD_IMAGE_HEIGHT = 1080;
const PROJECT_CARD_BUTTON_LIVE_DEMO = 'Live Demo';
const PROJECT_CARD_BUTTON_VIEW_CODE = 'View Code';

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

interface ProjectCardImageProps {
  src: StaticImageData;
  alt: string;
}

interface ProjectCardDetailsProps {
  id: string;
  name: string;
  description: string;
  githubURL: string;
  demoURL: string;
  techStack: string[];
}

interface ProjectCardExpandTabProps {
  showProjectDetails: boolean;
  handleExpandButtonClick: () => void;
}

interface ProjectCardDetailsTechTagProps {
  techName: string;
}

const ProjectCardImage = (props: ProjectCardImageProps) => {
  const { src, alt } = props;
  return (
    <Image
      src={src}
      alt={alt}
      width={PROJECT_CARD_IMAGE_WIDTH}
      height={PROJECT_CARD_IMAGE_HEIGHT}
      priority={true}
      placeholder='blur'
      className='w-full object-cover object-left-top'
    />
  );
};

const ProjectCardExpandTab = (props: ProjectCardExpandTabProps) => {
  const { showProjectDetails, handleExpandButtonClick } = props;
  return (
    <div
      className='abosulte left-0 w-[5%] h-full px-2 flex items-center cursor-pointer hover:bg-slate-200'
      onClick={() => handleExpandButtonClick()}
    >
      <Image
        src={pointingFingerDownGif}
        alt='pointing finger down'
        width={48}
        height={48}
        unoptimized={true}
        className={`w-full rotate-90 ${showProjectDetails ? 'rotate-[-90deg]' : ''}`}
      />
    </div>
  );
};

const ProjectCardDetailsTechTag = (props: ProjectCardDetailsTechTagProps) => {
  const { techName } = props;
  return (
    <span className='rounded-md border-[2px] border-blue-200 text-gray-500 text-[12px] xs:text-[14px] px-2 py-1 mr-2'>
      {techName}
    </span>
  );
};

const ProjectCardDetails = (props: ProjectCardDetailsProps) => {
  const { id, name, description, githubURL, demoURL, techStack } = props;
  return (
    <div
      className='w-full pt-4 pb-10 flex flex-col gap-8 px-4 
        ss:px-8 sm:px-12 md:absolute md:left-[5%] md:w-[90%] md:pl-2 md:py-10'
    >
      <h2>{name}</h2>
      <p>{description}</p>
      <div className='flex flex-wrap'>
        {techStack.map((tech) => (
          <ProjectCardDetailsTechTag key={`${name}-${tech}`} techName={tech} />
        ))}
      </div>
      <div className='flex flex-wrap gap-2 xs:gap-4'>
        {id !== 'project-personal-website' ? (
          <Button title={PROJECT_CARD_BUTTON_LIVE_DEMO} link={demoURL} />
        ) : null}
        <Button title={PROJECT_CARD_BUTTON_VIEW_CODE} link={githubURL} />
      </div>
    </div>
  );
};

export const ProjectCard = (props: ProjectCardProps) => {
  const { id, name, description, imageSource, githubURL, demoURL, techStack } = props;
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const { isScreenSize: isScreenSizeMd } = useIsScreenSize('md');

  const handleExpandButtonClick = () => {
    setShowProjectDetails((prev) => !prev);
  };

  return (
    <div
      id={`project-card-${id}`}
      className='relative z-10 w-full h-full flex flex-col gap-2 bg-morning overflow-hidden md:max-h-[400px] md:flex-row'
    >
      <ProjectCardImage src={imageSource} alt={description} />

      <div
        id={`project-card-details-${id}`}
        className={`relative w-full h-full flex bg-morning text-night ${isScreenSizeMd ? 'border-evening border-l-2' : ''}
        md:absolute md:right-0 md:w-4/5 md:duration-300 md:translate-x-[95%] ${showProjectDetails ? 'md:!translate-x-[5%]' : ''}`}
      >
        {isScreenSizeMd ? (
          <ProjectCardExpandTab
            showProjectDetails={showProjectDetails}
            handleExpandButtonClick={() => handleExpandButtonClick()}
          />
        ) : null}

        <ProjectCardDetails
          id={id}
          name={name}
          description={description}
          githubURL={githubURL}
          demoURL={demoURL}
          techStack={techStack}
        />
      </div>
    </div>
  );
};
