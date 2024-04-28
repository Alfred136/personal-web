import * as Constants from './constants';

const Headline = () => {
  return (
    <div className='flex flex-wrap justify-center'>
      <h2>
        <span className='highlight highlight-red'>{Constants.TEXT_1_HIGHLIGHTED}</span>
        <span>{Constants.TEXT_1_NORMAL}</span>
      </h2>
      <h2>&nbsp;{Constants.TEXT_DIVIDER}&nbsp;</h2>
      <h2 className='highlight highlight-yellow'>{Constants.TEXT_2_HIGHLIGHTED}</h2>
      <h2>&nbsp;{Constants.TEXT_DIVIDER}&nbsp;</h2>
      <h2>{Constants.TEXT_3_NORMAL}</h2>
    </div>
  );
};

export { Headline };
