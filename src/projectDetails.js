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
};

export const projectDetails = [
  {
    id: 1,
    name: 'React Player',
    image: 'https://i.imgur.com/FVcd53k.png',
    description:
      'React Player is a beautiful music player with uses data from Chillhop.com to deliver calm lofi music. In this project I learned to combine Sass to dynamically update css using react state. This project is also mobile friendly.',
    tools: [tools.react, tools.recoil, tools.css],
    github: 'https://github.com/hamidihekmat/React-Player',
    live: 'https://react-player-tau.vercel.app/',
  },
  {
    id: 2,
    name: 'Portfolio',
    image: 'https://i.imgur.com/HBCXLSj.png',
    description:
      'My Portfolio! This was built with ReactJS. It was built with responsiveness in mind. It also has a dark mode option! There is also an easter egg within this page ',
    tools: [tools.react, tools.css, tools.framer],
    github: 'https://github.com/hamidihekmat/myPortfolio',
    live: '',
  },
  {
    id: 3,
    name: 'Simple Cart',
    image: 'https://i.imgur.com/S075tfL.png',
    description:
      'Simple Cart is a simple shopping cart app. The purpose for the project was to try and create a shopping cart component and fetch data async within the Cart component. In this project I learned to move data dynamically between components.',
    tools: [tools.react, tools.recoil, tools.css],
    github: 'https://github.com/hamidihekmat/simpleshoppingcart',
    live: 'https://simpleshoppingcart.vercel.app/',
  },
];
