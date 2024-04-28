import Image from 'next/image';
import * as Constants from './constants';
import type { Skill, SkillCategoryBoardProps } from './types';
import { CodeSnippet } from '@/components/code-snippet';

const SkillItem = (props: Skill) => {
  const { name, imageSource } = props;
  return (
    <div className='flex flex-row items-start gap-1 text-[15px]'>
      <span>{'-'}</span>
      <Image
        src={imageSource}
        alt={name}
        width={Constants.SKILL_ICON_WIDTH}
        height={Constants.SKILL_ICON_HEIGHT}
        className='w-[24px] h-[24px]'
      />
      <span>{`${name}`}</span>
    </div>
  );
};

const SkillCategoryBoard = (props: SkillCategoryBoardProps) => {
  const { name, skills } = props;
  return (
    <div className='w-full px-2 pb-12 flex flex-col ss:w-1/3 ss:pb-6'>
      <div className='text-xl text-center font-bold'>{name}</div>
      <div className='w-full h-[2px] my-1 bg-sunset' />
      <div className='flex flex-row flex-wrap gap-4 ss:flex-col ss:gap-2'>
        {skills.map((skill) => (
          <SkillItem key={skill.name} name={skill.name} imageSource={skill.imageSource} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <CodeSnippet tagName={Constants.TAG_NAME}>
      <div className='w-full flex flex-wrap'>
        {Constants.SKILL_CATEGORIES.map((category) => (
          <SkillCategoryBoard key={category.id} name={category.name} skills={category.skills} />
        ))}
      </div>
    </CodeSnippet>
  );
};

export { Skills };
