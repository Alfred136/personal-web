import Image, { type StaticImageData } from 'next/image';
import { CodeSnippet } from '@/components/code-snippet';
import {
  iconCSharpPng,
  iconCssPng,
  iconDynamodbPng,
  iconGitPng,
  iconGitHubPng,
  iconGitLabPng,
  iconHtml5Png,
  iconJavaPng,
  iconJavaScriptPng,
  iconMySqlPng,
  iconMsPowerPlatformPng,
  iconNextJsPng,
  iconNodeJsPng,
  iconPhpPng,
  iconReactPng,
  iconSqlPng,
  iconTailwindcssPng,
  iconTypeScriptPng
} from '#/images/icons';

// global constants
const TAG_NAME = 'skills';
const SKILL_ICON_WIDTH = 24;
const SKILL_ICON_HEIGHT = 24;
const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'sc-frontend',
    name: 'frontend',
    skills: [
      { name: 'HTML5', imageSource: iconHtml5Png },
      { name: 'CSS', imageSource: iconCssPng },
      { name: 'JavaScript', imageSource: iconJavaScriptPng },
      { name: 'TypeScript', imageSource: iconTypeScriptPng },
      { name: 'React', imageSource: iconReactPng },
      { name: 'Next.js', imageSource: iconNextJsPng },
      { name: 'TailwindCSS', imageSource: iconTailwindcssPng }
    ]
  },
  {
    id: 'sc-backend',
    name: 'backend',
    skills: [
      { name: 'Node.js', imageSource: iconNodeJsPng },
      { name: 'Java', imageSource: iconJavaPng },
      { name: 'PHP', imageSource: iconPhpPng },
      { name: 'C#', imageSource: iconCSharpPng },
      { name: 'SQL', imageSource: iconSqlPng },
      { name: 'MySQL', imageSource: iconMySqlPng },
      { name: 'DynamoDB', imageSource: iconDynamodbPng }
    ]
  },
  {
    id: 'sc-others',
    name: 'others',
    skills: [
      { name: 'Git', imageSource: iconGitPng },
      { name: 'GitHub', imageSource: iconGitHubPng },
      { name: 'GitLab', imageSource: iconGitLabPng },
      { name: 'Microsoft Power Platform', imageSource: iconMsPowerPlatformPng }
    ]
  }
];

type skillCategory = 'frontend' | 'backend' | 'others';

interface Skill {
  name: string;
  imageSource: StaticImageData;
}

interface SkillCategory {
  id: string;
  name: skillCategory;
  skills: Skill[];
}

interface SkillCategoryItemProps {
  id: string;
  name: skillCategory;
  skills: Skill[];
}

const SkillItem = (props: Skill) => {
  const { name, imageSource } = props;
  return (
    <div id={`skill-${name}`} className='flex flex-row items-start gap-1 text-[15px]'>
      <span>{'-'}</span>
      <Image
        src={imageSource}
        alt={name}
        width={SKILL_ICON_WIDTH}
        height={SKILL_ICON_HEIGHT}
        className='w-[24px] h-[24px]'
      />
      <span>{`${name}`}</span>
    </div>
  );
};

const SkillCategoryItem = (props: SkillCategoryItemProps) => {
  const { id, name, skills } = props;
  return (
    <div id={`skill-category-${id}`} className='w-full px-2 pb-12 flex flex-col ss:w-1/3 ss:pb-6'>
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

export const Skills = () => {
  return (
    <CodeSnippet tagName={TAG_NAME}>
      <div className='w-full flex flex-wrap'>
        {SKILL_CATEGORIES.map((category) => (
          <SkillCategoryItem
            key={category.id}
            id={category.id}
            name={category.name}
            skills={category.skills}
          />
        ))}
      </div>
    </CodeSnippet>
  );
};
