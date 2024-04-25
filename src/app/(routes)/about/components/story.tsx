import { type ReactNode } from 'react';
import { CodeSnippet } from '@/components/code-snippet';

// global constants
const TAG_NAME = 'story';
const STORIES: StoryItem[] = [
  {
    id: 's-start',
    year: '2017-2022',
    description:
      'The start of my <b>Software Engineering</b> journey. Enrolled in Computer Science Bachelor degree in City University of Hong Kong.'
  },
  {
    id: 's-intern',
    year: '2019-2020',
    description: 'Internship as a Junior Mobile Apps Developer.'
  },
  {
    id: 's-1stJob',
    year: '2022',
    description:
      'My 1st full-time position as a Cloud Application Programmer. Developed web applications..'
  },
  {
    id: 's-2ndJob',
    year: '2023',
    description:
      'My 2nd full-time position as a Software Engineer specifying in-house projects. Developed Node.js servers.'
  },
  {
    id: 's-now',
    year: '2024-current',
    description: 'Relocated to Toronro, looking for a new opportunity.'
  }
];

interface StoryItem {
  id: string;
  year: string;
  description: string;
}

interface StoryItemProps {
  year: string;
  description: string;
}

const StoryItem = (props: StoryItemProps) => {
  const { year, description } = props;
  return (
    <div className='w-full flex gap-4 text-start justify-start items-start'>
      <span className='w-1/5'>{year}</span>
      <p className='w-4/5'>{description}</p>
    </div>
  );
};

export const Story = () => {
  return (
    <CodeSnippet tagName={TAG_NAME}>
      <div className='w-full flex flex-col gap-8'>
        {STORIES.map((story) => (
          <StoryItem key={story.id} year={story.year} description={story.description} />
        ))}
      </div>
    </CodeSnippet>
  );
};
