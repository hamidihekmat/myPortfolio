import { uuid } from 'uuidv4';

const tools = {
  react: {
    id: uuid(),
    name: 'React',
  },
  recoil: {
    id: uuid(),
    name: 'Recoil',
  },
  framer: {
    id: uuid(),
    name: 'Framer',
  },
  css: {
    id: uuid(),
    name: 'CSS',
  },
  js: {
    id: uuid(),
    name: 'JS',
  },
  html: {
    id: uuid(),
    name: 'HTML',
  },
  python: {
    id: uuid(),
    name: 'Python',
  },
  mysql: {
    id: uuid(),
    name: 'SQL',
  },
  ffmpeg: {
    id: 9,
    name: 'ffmpeg',
  },
  graphql: {
    id: uuid(),
    name: 'GQL',
  },
  apollo: {
    id: uuid(),
    name: 'Apollo',
  },
  next: {
    id: uuid(),
    name: 'Nextjs',
  },
  ts: {
    id: uuid(),
    name: 'Typescript',
  },
  psql: {
    id: uuid(),
    name: 'PostgreSQL',
  },
};

export const projectDetails = [
  {
    id: uuid(),
    name: 'NOS',
    image:
      'https://github.com/hamidihekmat/NOS/blob/main/docs/main-ui.png?raw=true',
    description:
      'Movies & TV Show web application, designed with Figma, built with Nextjs',
    tools: [tools.next, tools.ts, tools.psql],
    github: 'https://github.com/hamidihekmat/NOS',
    live: 'https://nos.hekmathamidi.me',
  },
  {
    id: uuid(),
    name: 'TikTok Trends Bot',
    image:
      'https://c.files.bbci.co.uk/076D/production/_114310910_tiktok-logo.jpg',
    description:
      'A bot created with python & ffmpeg to get trending videos from private api, compiles the videos, and uploads it to youtube.',
    tools: [tools.python, tools.mysql, tools.ffmpeg],
    live: 'https://www.youtube.com/channel/UCCS5kHZWDoEitXB3IPoKS3A/videos',
    github: '',
  },
  {
    id: uuid(),
    name: 'Portfolio',
    image: 'https://i.imgur.com/HBCXLSj.png',
    description:
      'My Portfolio! This was created with React. It was built with responsiveness in mind. It also has a dark mode option.',
    tools: [tools.react, tools.css],
    github: 'https://github.com/hamidihekmat/myPortfolio',
    live: '',
  },
];
