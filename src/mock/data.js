import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'My name is',
  name: 'Emily Lu',
  subtitle: 'Welcome to my online portfolio!',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'bot.png',
    title: 'Discord Music Bot',
    info: 'Designed and implemented a Discord bot in Python that interacts with the Spotify Web API to support synchronous listening between multiple users and music theory analysis',
    info2:
      'Hosted a user elicitation panel, an architecture inspection meeting, a code review, and post-mortem meetings',
    url: 'https://github.com/bettinabenitez/introspectivespotify',
  },
  {
    id: nanoid(),
    img: 'color.png',
    title: 'Automatic Image Coloring Software',
    info: 'Conceptualized and developed an automatic image and GIF coloring software in Python',
    info2:
      'Utilized a pre-trained object detection AI (detectron2) to segment a black & white image/GIF and color in objects in the image/GIF based on user-inputted colored “scribbles"',
    url: 'colab.research.google.com/drive/11-fho8zioELxdWgipCjFq-dwDOiuOBtw',
  },
  {
    id: nanoid(),
    img: 'snake1.jpg',
    title: 'Snake Game',
    info: 'Programmed a snake game in Java with an optional breadth-first search mode and game variants (reversing the snake, doubling the snake’s speed, and having 3 lives per game)',
    info2: 'Utilized Linked Lists and Object Oriented Programming',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
