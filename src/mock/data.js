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
  paragraphOne: 'I am a senior at Scripps College majoring in Computer Science and minoring in Art! ',
  paragraphTwo: 'My experiences include a software engineering internship, computer science research, software projects, and more. I graduate this upcoming May and I am looking for SWE new grad opportunities.',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// EXPERIENCES DATA
export const experiencesData = [
  {
    title: 'Software Engineering Intern, FactSet, CT',
    info: 'June 2021 - Aug 2021',
    info2: '‣ Worked as a backend engineer on Quotes Team (responsible for TickerPlants that receive and send market data)',
    info3: '‣ Designed critical architecture changes to standardize 30 TickerPlants',
    info4: '‣ Implemented standardization through a C++ framework to be inherited into TickerPlants. Once inherited, the framework would receive, process, and send ~100 million real-time market data messages per day',
    info5: '‣ Presented a demonstration of a TickerPlant with my inherited framework to 20+ engineers',
  },

  {
    title: 'Computer Science Researcher, Harvey Mudd College, CA',
    info: 'May 2020 - Dec 2020',
    info2: '‣ Co-authored a paper with Prof. Lucas Bang that was accepted to Intl. Conference on Software Engineering 2021',
    info3: '‣ Coded a Python script that inlined function calls in C programs, allowing our control flow analysis techniques to measure the complexity of code with function calls',
    info4: '‣ Investigated and validated the accuracy of in-lining through experiments with datasets of 20+ C functions',
  },

  {
    title: 'Information Technology Intern, Office of Information Technology, Scripps College, CA',
    info: 'June 2019 - July 2019',
    info2: '‣ Provided hands-on support to end-users while working closely with a help desk team of 10',
    info3: '‣ Served as head intern liaison for Girls who Code team through daily check-ins and technical support',
  },

  {
    title: 'Computer Science Teaching Assistant, Harvey Mudd College, CA',
    info: 'Sep 2021 - Present',
    info2: '‣ Tutor and grade for a course with 200+ students (Introduction to Computer Science)',
    info3: '‣ Host weekly 2 hour drop-in tutoring sessions for conceptual Python help and debugging support',
  },

  {
    title: 'Marketing Intern, Scripps Communities of Resources and Empowerment, Scripps College, CA',
    info: 'Aug 2019 - May 2020',
    info2: '‣ Oversaw social media engagement on FB and Instagram by creating 7+ graphic designs per month',
  },

];

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
  email: 'emilylu232@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/emily-k-lu/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/emilylu232',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
