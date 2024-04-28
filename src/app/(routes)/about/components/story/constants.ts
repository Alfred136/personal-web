import type { StoryEvent } from './types';

const TAG_NAME: string = 'story';
const STORY_EVENTS: StoryEvent[] = [
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

export { TAG_NAME, STORY_EVENTS };
