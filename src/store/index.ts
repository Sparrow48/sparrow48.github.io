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
    'a software developer from Bangladesh. I am a software engineer with a passion for building scalable and high-performance web applications.',
  company: {
    name: 'Northprim',
    link: 'https://northprim.com/',
  },
  description:
    'I have over 3 years of experience developing scalable and high-performance web applications in healthtech, LMS, and Well-being platforms. Proficient in React.js, Redux, TypeScript, Nest.js, and MongoDB, with a proven ability to build intuitive and maintainable applications. Notable achievements include designing live exam modules with offline caching,integrating Zoom SDK for video consultations, and implementing secure payment gateways. Passionate about delivering scalable, performance-optimized solutions.',
  opening:
    'Looking for an opportunity where I can use my skills to contribute to an organization’s development team.',
};

export const experiences: Experience[] = [
  {
    companyName: 'Northprim',
    startDate: 'June 2023',
    endDate: 'March 2025',
    descriptions: [
      'Developed scalable Well-being applications with cutting-edge technology.',
      'Developed REST APIs using TypeScript and Nest.js.',
      'Built reusable and maintainable web applications for doctors and admin interfaces from scratch.',
      'Performed data migration.',
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
      'https://raw.githubusercontent.com/Sparrow48/sparrow48.github.io/main/src/assets/northprim_logo.jpeg',
  },
  {
    companyName: 'Durbin Healthtech',
    startDate: 'May 2022',
    endDate: 'May 2023',
    descriptions: [
      'Developed front-end web of Learning Management Systems and Telemedicine applications with cutting-edge technology.',
      'Developed new features and integrated RESTful APIs.',
      'Integrated bkash payment gateway(front-end).',
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
      'eDoktor is a well-being platform that connects patients with doctors.',
    longDescription:
      'eDoktor is a well-being platform that connects patients with doctors. Patients can book appointments with doctors and get a consultation from anywhere. Doctors can manage their appointments, patients, and prescriptions.',
    workDescriptions: [
      'Developed REST APIs using TypeScript and Nest.js.',
      'Implemented the CorvusPay payment gateway, ensuring secure transactions and seamless payment pro-cessing for medical consultations.',
      'Build reusable and maintainable web applications from scratch for the doctor and admin.',
      'Integrated RESTful APIs.',
      'Integrated a video calling feature using Zoom Video SDK for Doctor Web.',
      'Implemented and integrated an article and health questionnaire features.',
      'Developed a feature-rich Admin Dashboard with analytics for tracking user activity, patient consultations, and promotional statistics.',
      'Performed data migration.',
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
      companyName: 'Northprim.',
      companyLogo:
        'https://raw.githubusercontent.com/Sparrow48/sparrow48.github.io/main/src/assets/northprim_logo.jpeg',
    },
  },
  retinaLms: {
    title: 'RetinaLMS',
    description:
      'An admission coaching-centric scalable learning management system.',
    longDescription:
      'RetinaLMS is a scalable learning management system, with admission, online payment, book distribution, and an online exam system.',
    workDescriptions: [
      'Developed and improved some new features, such as the admission module, classroom module, exam module, the content management module, etc',
      'Integrated RESTful APIs.',
      'Worked on the live exam module with offline answer caching and automatic submission when back online.',
      'Integrated react-player to show YouTube videos directly on the LMS website.',
      'Integrated bkash payment gateway.',
      'Developed a drawing canvas to evaluate the answer script.',
    ],
    techStack: ['React.js', 'Redux Toolkit', 'AntD', 'WebSocket', 'axios'],
    link: 'https://retinalms.com',
    associatedWith: {
      companyName: 'Durbin Healthtech.',
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
