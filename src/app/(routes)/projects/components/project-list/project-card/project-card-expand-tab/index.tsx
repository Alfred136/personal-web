import Image from 'next/image';
import * as Constants from '@/app/(routes)/projects/components/project-list/project-card/constants';
import type { ProjectCardExpandTabProps } from '@/app/(routes)/projects/components/project-list/project-card/types';
import { pointingFingerDownGif } from '#/images/common';

const ProjectCardExpandTab = (props: ProjectCardExpandTabProps) => {
  const { handleExpandButtonClick } = props;
  return (
    <div
      className='absolute z-40 right-0 w-[7%] h-full flex items-center 
        cursor-pointer shadow-2xl bg-morning hover:bg-slate-300'
      onClick={handleExpandButtonClick}
    >
      <Image
        src={pointingFingerDownGif} //todo png
        alt='pixel-art pointing finger'
        width={Constants.FINGER_IMAGE_WIDTH}
        height={Constants.FINGER_IMAGE_HEIGHT}
        unoptimized={true}
        className={`m-auto rotate-90`}
      />
    </div>
  );
};

export { ProjectCardExpandTab };
