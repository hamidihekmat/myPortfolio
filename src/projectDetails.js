const tools = {
  react: {
    id: 1,
    name: 'React',
  },
  recoil: {
    id: 2,
    name: 'Recoil',
  },
  framer: {
    id: 3,
    name: 'Framer',
  },
  css: {
    id: 4,
    name: 'CSS',
  },
  js: {
    id: 5,
    name: 'Javascript',
  },
  html: {
    id: 6,
    name: 'HTML',
  },
  python: {
    id: 7,
    name: 'Python',
  },
  mysql: {
    id: 8,
    name: 'SQL',
  },
  ffmpeg: {
    id: 9,
    name: 'ffmpeg',
  },
  graphql: {
    id: 10,
    name: 'Graphql',
  },
  apollo: {
    id: 11,
    name: 'Apollo',
  },
  next: {
    id: 12,
    name: 'Nextjs',
  },
};

export const projectDetails = [
  {
    id: '1',
    name: 'Airbnb Clone',
    image: 'https://i.imgur.com/GJeMg8f.png',
    description:
      'Airbnb clone created with Nextjs & GraphQL. Uses JWT tokens for authenticating users. Users can view listings and also create a new listing. Images are optimized for browsers and mobile. In this project I learned authentication, graphql and how to integrate apollo client with Nextjs.',
    tools: [tools.next, tools.graphql, tools.apollo],
    github: 'https://github.com/hamidihekmat/next-airbnb',
    live: 'https://next-airbnb.vercel.app',
  },
  {
    id: 2,
    name: 'Portfolio',
    image: 'https://i.imgur.com/HBCXLSj.png',
    description:
      'My Portfolio! This was created with React. It was built with responsiveness in mind. It also has a dark mode option.',
    tools: [tools.react, tools.css, tools.framer],
    github: 'https://github.com/hamidihekmat/myPortfolio',
    live: '',
  },
  {
    id: 3,
    name: 'TikTok Trends Bot',
    image:
      'https://c.files.bbci.co.uk/076D/production/_114310910_tiktok-logo.jpg',
    description:
      'A bot created with python & ffmpeg to gets trending tiktok videos from private api, compiles the videos, and uploads it to youtube. The bot does everything from creating the title to generating the thumbnail. Contact me for code.',
    tools: [tools.python, tools.mysql, tools.ffmpeg],
    live: 'https://www.youtube.com/channel/UCCS5kHZWDoEitXB3IPoKS3A/videos',
    github: '',
  },
  {
    id: 4,
    name: 'Elegant Shop',
    image: 'https://i.imgur.com/mv7CW3U.png',
    description:
      'Elegant Shop is your number one source for all things and products. Dedicated to providing you the very best of products, with an emphasis on elegant design, affortable and beautiful. In this project I learned to manipulate the DOM with JS.',
    tools: [tools.html, tools.css, tools.js],
    github: 'https://github.com/hamidihekmat/elegantshop',
    live: 'https://elegantshop.netlify.app/',
  },
  {
    id: 5,
    name: 'Simple Cart',
    image: 'https://i.imgur.com/S075tfL.png',
    description:
      'Simple Cart is a shopping cart app. The purpose for the project was to try and create a shopping cart component and fetch data async within the cart component itself. In this project I learned to move data dynamically between components.',
    tools: [tools.react, tools.recoil, tools.css],
    github: 'https://github.com/hamidihekmat/simpleshoppingcart',
    live: 'https://simpleshoppingcart.vercel.app/',
  },
];
