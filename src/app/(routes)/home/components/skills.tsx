// global constants
const HEADING = 'Key Skills';
const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'frontend',
    skills: ['HTML5', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'TailwindCSS']
  },
  { name: 'backend', skills: ['Node.js', 'Java', 'PHP', 'C# & .NET', 'SQL', 'MySQL', 'DynamoDB'] },
  {
    name: 'tools & version control',
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
    <div className='flex flex-col max-w-[250px] w-full xs:w-5/12 sm:w-1/3  h-[250px] box-border border-2 border-afternoon bg-night px-4'>
      <div className='text-[20px] text-center uppercase'>{name}</div>
      <div className='w-full h-[2px] my-1 bg-sunset' />
      {skills.map((skill) => (
        <div key={skill}>{`- ${skill}`}</div>
      ))}
    </div>
  );
};

export const Skills = () => {
  return (
    <div className='flex flex-col items-center gap-4 text-center'>
      <h1>{HEADING}</h1>
      <div className='flex flex-wrap gap-5 sm:gap-10 items-center justify-center w-full'>
        {SKILL_CATEGORIES.map((category) => (
          <SkillBoard key={category.name} name={category.name} skills={category.skills} />
        ))}
      </div>
    </div>
  );
};
