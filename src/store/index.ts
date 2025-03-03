import {
  About,
  Certificate,
  Experience,
  Issuer,
  Project,
  Skill,
} from '@/@types';

export const about: About = {
  name: 'Md Abu Nasib',
  jobDescription:
    'a software developer from Bangladesh. Currently working as a Software Engineer at',
  company: {
    name: 'eDoctor',
    link: 'https://edoktor.rs/',
  },
  description:
    'I have over 3 years of experience in developing software using React.js, Redux, Antd, Nest.js and TypeScript.',
  opening:
    'Looking for an opportunity where I can use my skills to contribute to an organization’s development team.',
};

export const experiences: Experience[] = [
  {
    companyName: 'eDoktor',
    startDate: 'June 2023',
    endDate: 'Present',
    descriptions: [
      'Developing scalable Telemedicine applications with cutting-edge technology.',
      'Built reusable and maintainable web applications for doctors and admin interfaces from scratch.',
      'Resolving issues and developed REST APIs using TypeScript and Nest.js',
      'Performed data migration for the eDoktor production database.',
    ],
    position: 'Software Engineer',
    techStack: [
      'React.js',
      'Socket.io',
      'Redux Toolkit',
      'AntD',
      'FCM',
      'Nest.js',
      'TypeScript',
      'MongoDB',
    ],
    image:
      'https://raw.githubusercontent.com/Sparrow48/sparrow48.github.io/main/src/assets/eDok.png',
  },
  {
    companyName: 'Durbin Healthtech',
    startDate: 'May 2022',
    endDate: 'May 2023',
    descriptions: [
      'Developed front-end web of Learning Management Systems and Telemedicine applications with cutting-edge technology',
      'Initially, I was assigned to resolve existing bugs. Later I developed and improved some new features, such as the admission module, classroom module, etc.',
      'Integrated RESTful APIs.',
    ],
    position: 'Software Engineer',
    techStack: ['React.js', 'Socket.io', 'Redux Toolkit', 'AntD', 'FCM'],
    image:
      'https://github.com/Sparrow48/sparrow48.github.io/blob/main/src/assets/DHT.png?raw=true',
  },
];

export const skills: Skill[] = [
  {
    name: 'React',
    level: 'expert',
    image:
      'https://github.com/Sparrow48/sparrow48.github.io/blob/a51fe9e3521bc575140da812461311224fe3233d/src/assets/react.png?raw=true',
    exps: '3.5 years',
  },
  {
    name: 'Redux Toolkit',
    level: 'expert',
    image:
      'https://github.com/Sparrow48/sparrow48.github.io/blob/main/src/assets/reduxToolkit.png?raw=true',
    exps: '3 years',
  },

  {
    name: 'Git',
    level: 'expert',
    image:
      'https://github.com/Sparrow48/sparrow48.github.io/blob/main/src/assets/git-logo.png?raw=true',
    exps: '5 years',
  },
  {
    name: 'JavaScript',
    level: 'expert',
    image:
      'https://github.com/Sparrow48/sparrow48.github.io/blob/main/src/assets/js.png?raw=true',
    exps: '4 years',
  },

  {
    name: 'Problem Solving',
    level: 'intermediate',
    image:
      'https://github.com/Sparrow48/sparrow48.github.io/blob/main/src/assets/ps.png?raw=true',
    exps: '100+ solved',
  },

  {
    name: 'Tailwind',
    level: 'intermediate',
    image:
      'https://github.com/Sparrow48/sparrow48.github.io/blob/main/src/assets/tailwind.png?raw=true',
    exps: '2.5 years',
  },
  {
    name: 'AntD',
    level: 'intermediate',
    image:
      'https://github.com/Sparrow48/sparrow48.github.io/blob/main/src/assets/antD.png?raw=true',
    exps: '3 years',
  },
  {
    name: 'WebSocket',
    level: 'intermediate',
    image:
      'https://github.com/Sparrow48/sparrow48.github.io/blob/main/src/assets/webSocket.png?raw=true',
    exps: '2.5 year',
  },
  {
    name: 'HTML',
    level: 'expert',
    image:
      'https://github.com/Sparrow48/sparrow48.github.io/blob/main/src/assets/htmlLogo.png?raw=true',
    exps: '3.5 years',
  },
  {
    name: 'CSS',
    level: 'expert',
    image:
      'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png',
    exps: ' 3.5 years',
  },
  {
    name: 'Linux',
    level: 'expert',
    image:
      'https://github.com/Sparrow48/sparrow48.github.io/blob/main/src/assets/linux.png?raw=true',
    exps: '5.5 years',
  },
  {
    name: 'Node.js',
    level: 'beginner',
    image:
      'https://github.com/Sparrow48/sparrow48.github.io/blob/main/src/assets/node.png?raw=true',
    exps: '2 year',
  },
  {
    name: 'Express.js',
    level: 'beginner',
    image:
      'https://github.com/Sparrow48/sparrow48.github.io/blob/main/src/assets/express.png?raw=true',
    exps: '2 year',
  },
  {
    name: 'MongoDB',
    level: 'beginner',
    image:
      'https://github.com/Sparrow48/sparrow48.github.io/blob/main/src/assets/mongodb.png?raw=true',
    exps: '2 year',
  },
  {
    name: 'Nest.js',
    level: 'beginner',
    image:
      'https://github.com/Sparrow48/sparrow48.github.io/blob/main/src/assets/nest.png?raw=true',
    exps: '1.5 years',
  },
  {
    name: 'TypeScript',
    level: 'beginner',
    image:
      'https://github.com/Sparrow48/sparrow48.github.io/blob/main/src/assets/TS.png?raw=true',
    exps: '1.5 years',
  },
];

export const projects: Record<string, Project> = {
  eDoktor: {
    title: 'eDoktor',
    description:
      'eDoktor is a telemedicine platform that connects patients with doctors.',
    longDescription:
      'eDoktor is a telemedicine platform that connects patients with doctors. Patients can book appointments with doctors and get a consultation from anywhere. Doctors can manage their appointments, patients, and prescriptions.',
    workDescriptions: [
      'Developing scalable Telemedicine applications with cutting-edge technology',
      'Built reusable and maintainable web applications for doctors and admin interfaces from scratch',
      'Integrate RESTful APIs',
      'Integrated a video calling feature using Zoom Video SDK for Doctor Web.',
      'Resolving issues and developing REST APIs using TypeScript and Nest.js.',
      'Implemented doctor review and rating features. Also, Implemented an issue report feature for appointments.',
      'Implemented an API to fetch payment information from Corvus Pay and generate invoice PDFs.',
      'Performed data migration for the eDoktor production database',
    ],
    techStack: [
      'React.js',
      'Redux Toolkit',
      'AntD',
      'WebSocket',
      'FCM',
      'Nest.js',
      'TypeScript',
      'MongoDB',
    ],
    link: 'https://edoktor.rs/',
    associatedWith: {
      companyName: 'eDoktor.',
      companyLogo:
        'https://raw.githubusercontent.com/Sparrow48/sparrow48.github.io/main/src/assets/eDok.png',
    },
  },
  retinaLms: {
    title: 'RetinaLMS',
    description:
      'An admission coaching-centric scalable learning management system.',
    longDescription:
      'RetinaLMS is a scalable learning management system, with admission, online payment, book distribution, and an online exam system.',
    workDescriptions: [
      'Initially, I was assigned to resolve existing bugs. Later I developed and improved some new features, such as the admission module, classroom module, etc.',
      'Integrated RESTful APIs.',
      'worked on the live exam module with offline answer caching and automatic submission when back online.',
      'Enhanced the practice exam and tutorial modules.',
    ],
    techStack: ['React.js', 'Redux Toolkit', 'AntD'],
    link: 'https://retinalms.com',
    associatedWith: {
      companyName: 'Durbin Labs Ltd.',
      companyLogo:
        'https://github.com/Sparrow48/sparrow48.github.io/blob/main/src/assets/DHT.png?raw=true',
    },
  },
  'e-shop': {
    title: 'e-shop',
    description: 'An e-commerce site.',
    longDescription:
      'A typical e-commerce website where users can create accounts and make purchase requests for products. Users can view their purchase history. Anyone can create a list using the add to card option and after logging into the system the user can request a purchase of the cart list through the checkout option.',
    workDescriptions: [
      'Developed both front-end and back-end by me.',
      'Developed RESTful APIs using JavaScript’s expressJs framework',
      'Implemented data storage solutions using MongoDB.',
      'Integrate RESTful APIs.',
    ],
    techStack: [
      'Node.js',
      'Express.js',
      'React.js',
      'MongoDB',
      'Redux Toolkit',
      'Tailwind CSS',
    ],
    link: 'https://e-shop-one-rho.vercel.app/',
    associatedWith: {
      companyName: '',
      companyLogo: '',
    },
  },
};

const issuer: Record<string, Issuer> = {
  udemy: {
    NAME: 'Udemy',
    IMAGE:
      'https://raw.githubusercontent.com/Sparrow48/sparrow48.github.io/main/src/assets/eDok.png', // need to use udemy logo
  },
};

export const certificates: Certificate[] = [
  {
    title: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
    issuer: issuer.udemy.NAME,
    issuerImage: issuer.udemy.IMAGE,
    issueDate: 'February 08, 2022',
    certLink:
      'https://www.udemy.com/certificate/UC-17d3a0eb-dc75-4c79-a46a-dc34f374b7e7/',
    skills: ['react', 'redux', 'rtk-query', 'javascript', 'frontend'],
  },
  {
    title: `Next JS: The Complete Developer's Guide`,
    issuer: issuer.udemy.NAME,
    issuerImage: issuer.udemy.IMAGE,
    issueDate: 'February 24, 2024 ',
    certLink:
      'https://www.udemy.com/certificate/UC-30312d29-0526-493a-840b-b26f8fdab3fe/',
    skills: ['react', 'next', 'javascript', 'frontend'],
  },
];
