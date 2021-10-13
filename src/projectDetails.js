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
};

export const projectDetails = [
  {
    id: uuid(),
    name: 'Airbnb Clone',
    image: 'https://i.imgur.com/GJeMg8f.png',
    description:
      'Airbnb clone created with Nextjs & GraphQL. Uses JWT tokens for authenticating users.',
    tools: [tools.next, tools.graphql, tools.apollo],
    github: 'https://github.com/hamidihekmat/next-airbnb',
    live: 'https://next-airbnb.vercel.app',
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
    name: 'Elegant Shop',
    image: 'https://i.imgur.com/mv7CW3U.png',
    description:
      'Elegant Shop is a ecommerce site created with pure html, css and javascript.',
    tools: [tools.html, tools.css, tools.js],
    github: 'https://github.com/hamidihekmat/elegantshop',
    live: 'https://elegantshop.netlify.app/',
  },
];
