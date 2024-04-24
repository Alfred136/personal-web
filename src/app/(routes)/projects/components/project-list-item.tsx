'use client';

import { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { Button } from '@/components/button';
import { useIsScreenSize } from '@/hooks/useIsScreenSize';
import { pointingFingerDownGif } from '#/images/others';

// global constants
const PROJECT_IMAGE_WIDTH = 1920;
const PROJECT_IMAGE_HEIGHT = 1080;
const PROJECT_BUTTON_LIVE_DEMO = 'Live Demo';
const PROJECT_BUTTON_VIEW_CODE = 'View Code';

interface ProjectProps {
  id: string;
  name: string;
  overview: string;
  description: string;
  imageSource: StaticImageData;
  githubURL: string;
  demoURL: string;
  techStack: string[];
}

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

const ProjectImage = (props: ProjectImageProps) => {
  const { src, alt, isDarken } = props;
  return (
    <Image
      src={src}
      alt={alt}
      width={PROJECT_IMAGE_WIDTH}
      height={PROJECT_IMAGE_HEIGHT}
      priority={true}
      placeholder='blur'
      className={`w-full object-cover object-left-top ${isDarken ? 'brightness-50' : ''}`}
    />
  );
};

const ProjectExpandTab = (props: ProjectExpandTabProps) => {
  const { handleExpandButtonClick } = props;
  return (
    <div
      className='absolute z-40 right-0 w-[7%] h-full px-2 flex 
        items-center cursor-pointer shadow-2xl bg-morning hover:bg-slate-300'
      onClick={() => handleExpandButtonClick()}
    >
      <Image
        src={pointingFingerDownGif}
        alt='pointing finger down'
        width={64}
        height={64}
        unoptimized={true}
        className={`rotate-90`}
      />
    </div>
  );
};

const ProjectDetailsTechTag = (props: ProjectDetailsTechTagProps) => {
  const { techName } = props;
  return (
    <span className='px-1 py-1 rounded-md border-[2px] border-blue-200 text-gray-500 text-[12px] ss:text-[14px]'>
      {techName}
    </span>
  );
};

const ProjectDetails = (props: ProjectDetailsProps) => {
  const { id, name, description, githubURL, demoURL, techStack, showProjectDetailsOnScreenMd } =
    props;
  return (
    <div
      id={`project--details-container-${id}`}
      className={`w-full h-full px-4 pt-4 pb-10 flex bg-morning text-night 
        ss:px-8 sm:px-12 md:absolute md:w-4/5 md:px-16 md:py-10 md:border-l-2 md:border-slate-500 md:duration-300
        ${showProjectDetailsOnScreenMd ? 'md:right-[0]' : 'md:right-[calc(-73%+2px)] md:!pl-[10%]'}`}
    >
      <div id={`project--details-${id}`} className='flex flex-col w-full h-full gap-6  ss:gap-8 '>
        <h2>{name}</h2>
        <p>{description}</p>
        <div className='flex flex-wrap gap-1'>
          {techStack.map((tech) => (
            <ProjectDetailsTechTag key={`${name}-${tech}`} techName={tech} />
          ))}
        </div>
        <div className='flex flex-wrap gap-2 xs:gap-4'>
          {id !== 'project-personal-website' ? (
            <Button title={PROJECT_BUTTON_LIVE_DEMO} link={demoURL} />
          ) : null}
          <Button title={PROJECT_BUTTON_VIEW_CODE} link={githubURL} />
        </div>
      </div>
    </div>
  );
};

export const ProjectListItem = (props: ProjectProps) => {
  const { id, name, description, imageSource, githubURL, demoURL, techStack } = props;
  const { isScreenSize: isScreenSizeMd } = useIsScreenSize('md');
  const [showProjectDetailsOnScreenMd, setShowProjectDetailsOnScreenMd] = useState(false);

  const handleExpandButtonClick = () => {
    setShowProjectDetailsOnScreenMd((prev) => !prev);
  };

  return (
    <div
      id={`project-item-${id}`}
      className='relative z-10 w-full h-full flex flex-col gap-2
      bg-morning overflow-hidden duration-300 
        hover:scale-[0.98] md:max-h-[400px] md:flex-row'
    >
      <ProjectImage src={imageSource} alt={description} isDarken={showProjectDetailsOnScreenMd} />
      <ProjectDetails
        id={id}
        name={name}
        description={description}
        githubURL={githubURL}
        demoURL={demoURL}
        techStack={techStack}
        showProjectDetailsOnScreenMd={showProjectDetailsOnScreenMd}
      />

      {isScreenSizeMd ? (
        <ProjectExpandTab
          showProjectDetails={showProjectDetailsOnScreenMd}
          handleExpandButtonClick={() => handleExpandButtonClick()}
        />
      ) : null}
    </div>
  );
};
