import * as Constants from '@/app/(routes)/projects/components/project-list/project-card/constants';
import type { ProjectCardDetailsProps } from '@/app/(routes)/projects/components/project-list/project-card/types';
import { Button } from '@/components';

const ProjectCardDetailsTechTag = (props: { label: string }) => {
  const { label } = props;
  return (
    <span className='px-1 py-1 rounded-md border-[2px] border-blue-200 text-gray-500 text-[12px] ss:text-[14px]'>
      {label}
    </span>
  );
};

const ProjectCardDetails = (props: ProjectCardDetailsProps) => {
  const { id, name, description, githubURL, demoURL, techStack, showDetailsOnScreenMd } = props;
  return (
    <div
      className={`w-full h-full px-4 pt-4 pb-10 flex bg-morning text-night 
        ss:px-8 sm:px-12 md:absolute md:w-4/5 md:px-16 md:py-10 md:border-l-2 md:border-slate-500 md:duration-300
        ${showDetailsOnScreenMd ? 'md:right-[0]' : 'md:right-[calc(-73%+2px)] md:!pl-[10%]'}`}
    >
      <div className=' max-w-[600px] w-full h-full flex flex-col gap-6 ss:gap-8 '>
        <h2 className='font-body font-bold'>{name}</h2>
        <p>{description}</p>

        {/* tech stack list */}
        <div className='flex flex-wrap gap-1'>
          {techStack.map((tech) => (
            <ProjectCardDetailsTechTag key={`${name}-${tech}`} label={tech} />
          ))}
        </div>

        {/* button group */}
        <div className='flex flex-wrap gap-2 xs:gap-4'>
          {id !== 'pj-personal-website' ? (
            <Button label={Constants.PROJECT_CARD_BUTTON_LABEL_DEMO} link={demoURL} />
          ) : null}
          <Button label={Constants.PROJECT_CARD_BUTTON_LABEL_CODE} link={githubURL} />
        </div>
      </div>
    </div>
  );
};

export { ProjectCardDetails };
