import { CodeSnippet } from '@/components/code-snippet';

// global constants
const HEADING = 'Key Skills';
const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'frontend',
    skills: ['HTML5', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'TailwindCSS']
  },
  { name: 'backend', skills: ['Node.js', 'Java', 'PHP', 'C# & .NET', 'SQL', 'MySQL', 'DynamoDB'] },
  {
    name: 'others',
    skills: ['Git', 'GitHub', 'GitLab', 'Microsoft Power Platform']
  }
];

interface SkillCategory {
  name: string;
  skills: string[];
}

interface SkillBoardProps extends SkillCategory {}

const SkillBoard = (props: SkillBoardProps) => {
  const { name, skills } = props;
  return (
    <div className='flex flex-col max-w-[250px] w-full min-h-[250px] px-4 py-1 box-border border-2 border-afternoon bg-night ss:w-5/12 sm:w-1/3'>
      <div className='text-[20px] text-center uppercase'>{name}</div>
      <div className='w-full h-[2px] my-1 bg-sunset' />
      {skills.map((skill) => (
        <div key={skill}>{`- ${skill}`}</div>
      ))}
    </div>
  );
};

const SkillItem = (props: SkillBoardProps) => {
  const { name, skills } = props;
  return (
    <div className='w-full pb-8 flex flex-col ss:w-1/3'>
      <div className='text-[20px] text-center uppercase'>{name}</div>
      <div className='w-full h-[2px] my-1 bg-sunset' />
      <div className='flex flex-row flex-wrap gap-2 ss:flex-col'>
        {skills.map((skill) => (
          <div key={skill}>{`-${skill}`}</div>
        ))}
      </div>
    </div>
  );
};

const SkillBoard2 = () => {
  return (
    <div className='w-full py-1 px-4 flex flex-wrap bg-night'>
      {SKILL_CATEGORIES.map((category) => (
        <SkillItem key={category.name} name={category.name} skills={category.skills} />
      ))}
    </div>
  );
};

export const Skills = () => {
  return (
    <CodeSnippet tagName='skills'>
      <SkillBoard2 />
    </CodeSnippet>
  );
};
