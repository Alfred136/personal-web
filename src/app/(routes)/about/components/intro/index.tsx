import * as Constants from './constants';
import { PointForm } from './point-form';
import { CodeSnippet } from '@/components';

const Intro = () => {
  return (
    <CodeSnippet tagName={Constants.TAG_NAME}>
      <div className='w-full pb-6 flex flex-col text-[15px] ss:text-[16px]'>
        <span className='mb-2'>{Constants.INTRO_SLOGAN}</span>

        {Constants.INTRO_POINT_FORMS.map((item) => (
          <PointForm
            key={item.id}
            emoji={item.emoji}
            statement={item.statement}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </CodeSnippet>
  );
};

export { Intro };
