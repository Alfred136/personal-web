import { CodeSnippet } from '@/components/code-snippet';

// global constants
const TAG_NAME = 'story';
const STORIES: StoryItem[] = [
  {
    id: 's-start',
    year: '2017-2022',
    description: `My Software Engineering journey began as I enrolled in the Computer Science Bachelor degree 
      program at City University of Hong Kong. Excitement filled the air as I embarked on this new 
      chapter in my life.`,
    keywords: ['🎓 degree', '🏫 university', '📖 computer science']
  },
  {
    id: 's-intern',
    year: '2019-2020',
    description: `An internship opportunity arose, and I eagerly embraced it as a Junior Mobile Apps 
      Developer. This hands-on experience allowed me to dive into the world of mobile app development, 
      learning and growing along the way.`,
    keywords: ['💼 internship', '📱 mobile dev']
  },
  {
    id: 's-1stJob',
    year: '2022',
    description: `I landed my 1st full-time job as a Cloud Application Programmer. In this role I focused on 
      creating web applications that made a difference, pushing boundaries and creating memorable UI/UX.`,
    keywords: ['💼 job', '👨🏻‍💻 web dev', 'UI/UX']
  },
  {
    id: 's-2ndJob',
    year: '2023',
    description: `My journey took another exciting turn as I transitioned to my 2nd full-time role as a 
      Software Engineer. Here, I specialized in in-house projects and focused on developing Node.js servers.`,
    keywords: ['💼 job', 'server', 'node.js']
  },
  {
    id: 's-now',
    year: '2024-current',
    description: `The desire to explore new avenues led me to relocate to Toronto. Now, I am actively 
      seeking new opportunities.`,
    keywords: ['🇨🇦 Toronto', '🛩️ relocation', '✅ open to work']
  }
];

interface StoryItem {
  id: string;
  year: string;
  description: string;
  keywords?: string[];
}

interface StoryItemProps extends StoryItem {}

interface KeywordTagProps {
  keyword: string;
}

const StoryItemKeywordTag = (props: KeywordTagProps) => {
  const { keyword } = props;
  return (
    <span className='text-[12px] text-sunset border-[1px] border-sunset rounded-md px-1 '>
      {keyword}
    </span>
  );
};

const StoryItem = (props: StoryItemProps) => {
  const { id, year, description, keywords } = props;
  return (
    <div className='w-full flex gap-4 text-start justify-start items-start'>
      <span className='w-1/5'>{year}</span>
      <div className='w-4/5 flex flex-col gap-2'>
        <p>{description}</p>
        <div className='flex flex-wrap gap-2'>
          <span className='text-[13px] text-afternoon'>Keywords: </span>
          {keywords?.map((keyword) => (
            <StoryItemKeywordTag key={`${id}-${keyword}`} keyword={keyword} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Story = () => {
  return (
    <CodeSnippet tagName={TAG_NAME}>
      <div className='w-full flex flex-col gap-10'>
        {STORIES.map((story) => (
          <StoryItem
            key={story.id}
            id={story.id}
            year={story.year}
            description={story.description}
            keywords={story.keywords}
          />
        ))}
      </div>
    </CodeSnippet>
  );
};
