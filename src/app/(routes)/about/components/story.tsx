import { type ReactNode } from 'react';
import { CodeSnippet } from '@/components/code-snippet';

const StoryItemContainer = ({ children }: { children: ReactNode }) => {
  return <p className='w-full flex gap-4'>{children}</p>;
};

interface StoryItemProps {
  year: string;
  children?: ReactNode;
}

const StoryItem = (props: StoryItemProps) => {
  const { year, children } = props;
  return (
    <p className='w-full flex gap-4 text-start justify-start items-start'>
      <span className='w-1/5'>{year}</span>
      <div className='w-4/5'>{children}</div>
    </p>
  );
};

export const Story = () => {
  return (
    <CodeSnippet tagName='story'>
      <div className='w-full flex flex-col gap-8'>
        <StoryItem year='2017-2022'>
          <p>
            I started my journey with Software Engineering, enrolled in Computer Science Bachelor
            degree in City University of Hong Kong.
          </p>
        </StoryItem>

        <StoryItem year='2019-2020'>
          <p>Internship as a Junior Mobile Apps Developer.</p>
        </StoryItem>

        <StoryItem year='2022'>
          <p>
            My 1st full-time position as a Cloud Application Programmer. Developed web applications.
          </p>
        </StoryItem>

        <StoryItem year='2023'>
          <p>
            My 2nd full-time position as a Software Engineer specifying in-house projects. Developed
            Node.js servers.
          </p>
        </StoryItem>

        <StoryItem year='2024-current'>
          <p>Relocated to Toronro, looking for a new opportunity.</p>
        </StoryItem>
      </div>
      {/* <StoryItemContainer>
        <span>2017-2022</span>
        <p>
          I love learning new skills and exploring different possibilities. Recently I am planning
          to visit Toronto and develop my career here. Feel free to contact me for jobs if you think
          I am a good fit and can add value to your team and company!
        </p>
      </StoryItemContainer> */}
    </CodeSnippet>
  );
};
