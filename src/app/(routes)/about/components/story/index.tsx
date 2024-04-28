import * as Constants from './constants';
import type { StoryEventProps, StoryEventKeywordTagProps } from './types';
import { CodeSnippet } from '@/components/code-snippet';

const StoryEventKeywordTag = (props: StoryEventKeywordTagProps) => {
  const { keyword } = props;
  return (
    <span className='text-[12px] text-sunset border-[1px] border-sunset rounded-md px-1 '>
      {keyword}
    </span>
  );
};

const StoryEvent = (props: StoryEventProps) => {
  const { id, year, description, keywords } = props;
  return (
    <div className='w-full flex gap-4 text-start justify-start items-start'>
      <span className='w-1/5'>{year}</span>
      <div className='w-4/5 flex flex-col gap-2'>
        <p>{description}</p>
        {/* keywords */}
        <div className='flex flex-wrap gap-2'>
          <span className='text-[13px] text-afternoon'>Keywords: </span>
          {keywords?.map((keyword) => (
            <StoryEventKeywordTag key={`${id}-${keyword}`} keyword={keyword} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Story = () => {
  return (
    <CodeSnippet tagName={Constants.TAG_NAME}>
      <div className='w-full flex flex-col gap-10'>
        {Constants.STORY_EVENTS.map((story) => (
          <StoryEvent
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

export { Story };
