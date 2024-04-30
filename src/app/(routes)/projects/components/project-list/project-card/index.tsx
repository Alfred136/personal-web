'use client';

import { useState } from 'react';
import { useIsScreenSize } from '@/hooks';
import { ProjectCardImage } from './project-card-image';
import { ProjectCardDetails } from './project-card-details';
import { ProjectCardExpandTab } from './project-card-expand-tab';
import type { ProjectCardProps } from './types';

const ProjectCard = (props: ProjectCardProps) => {
  const { id, name, overview, description, imageSource, githubURL, demoURL, techStack } = props;
  const { isScreenSize: isScreenSizeMd } = useIsScreenSize('md');
  const [showtDetailsOnScreenMd, setShowProjectDetailsOnScreenMd] = useState(false);

  const handleExpandButtonClick = () => {
    setShowProjectDetailsOnScreenMd((prev) => !prev);
  };

  return (
    <div className='w-full flex flex-col gap-4'>
      <span className='text-afternoon'>{overview}</span>
      <div
        className='relative z-10 w-full h-full flex flex-col gap-2
        bg-morning shadow-xl shadow-night overflow-hidden duration-300 
          md:max-h-[400px] md:flex-row'
      >
        <ProjectCardImage src={imageSource} alt={description} isDarken={showtDetailsOnScreenMd} />
        <ProjectCardDetails
          id={id}
          name={name}
          description={description}
          githubURL={githubURL}
          demoURL={demoURL}
          techStack={techStack}
          showDetailsOnScreenMd={showtDetailsOnScreenMd}
        />

        {isScreenSizeMd ? (
          <ProjectCardExpandTab
            showProjectDetails={showtDetailsOnScreenMd}
            handleExpandButtonClick={handleExpandButtonClick}
          />
        ) : null}
      </div>
    </div>
  );
};

export { ProjectCard };
