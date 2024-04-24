// global constants
const PHRASE_1_HIGHLIGHTED = 'Creative';
const PHRASE_1_NORMAL = ' Software Engineer';
const PHRASE_2_HIGHLIGHTED = 'Interactive UI/UX';
const PHRASE_3_NORMAL = 'Mario lover';
const PHRASE_DIVIDER = '|';

export const Introduction = () => {
  return (
    <div id='home-hero-introduction' className='flex flex-wrap justify-center'>
      <h2>
        <span className='highlight highlight-red'>{PHRASE_1_HIGHLIGHTED}</span>
        <span>{PHRASE_1_NORMAL}</span>
      </h2>
      <h2>&nbsp;{PHRASE_DIVIDER}&nbsp;</h2>
      <h2>
        <span className='highlight highlight-yellow'>{PHRASE_2_HIGHLIGHTED}</span>
      </h2>
      <h2>&nbsp;{PHRASE_DIVIDER}&nbsp;</h2>
      <h2>
        <span>{PHRASE_3_NORMAL}</span>
      </h2>
    </div>
  );
};
