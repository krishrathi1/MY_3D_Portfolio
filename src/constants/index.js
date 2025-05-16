export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [

];

export const myProjects = [
  {
    title: 'Alumni Link',
    desc: 'I developed an Alumni Association website that serves as a dynamic platform for connecting graduates. The site features alumni registration, networking tools, event management, donation portals, and job listings. It fosters community engagement, supports philanthropy, and helps track success stories, creating a vibrant network for past and present members.',
    subdesc:
      'The website strengthens the bond between alumni and their alma mater, promoting lifelong connections and opportunities',
    href: 'https://alumnilink.netlify.app/',
    texture: '/textures/project/projectalumni.mp4',
    logo: '/assets/alumnilogo.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'html',
        path: '/assets/html.png',
      },
      {
        id: 2,
        name: 'Css',
        path: 'assets/css.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/javascript.png',
      },
    ],
  },
  {
    title: 'Prescripto',
    desc: 'Prescripto is a full-stack web application that enables patients to book appointments and consult with doctors anytime. With real-time interaction, secure authentication, and efficient appointment management, it simplifies healthcare access. Built with React, Node.js, and MongoDB, Prescripto ensures a seamless and user-friendly experience for both patients and doctors.',
    subdesc:
      'Focused on optimizing healthcare accessibility with an intuitive, scalable, and performance-driven solution for both patients and doctors.',
    href: 'https://prescripto.yuvrajarora.info/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
    ],
  },
  {
    title: 'CrisisLens',
    desc: 'CrisisLens is a real-time disaster tracking platform that visualizes ongoing crises on an interactive map. It helps users and authorities monitor natural disasters as they unfold, enabling faster response and informed decision-making',
    subdesc:
      'CrisisLens is a real-time disaster monitoring platform that identifies and visualizes natural calamities on an interactive map. By aggregating live data, it empowers users and emergency responders with timely, location-based insights for swift decision-making and resource allocation. The platform enhances situational awareness and supports proactive disaster management.',
    href: '',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Mongo',
        path: '/assets/mongo.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Open Source Contributer',
    pos: 'Part time',
    duration: '2023 - Present',
    title: "Actively contributed to open-source projects on GitHub, focusing on improving code quality, optimizing performance, and enhancing component modularity. Demonstrated proficiency in collaborative development and version control.",
    icon: '/assets/openlog.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Essay Embassy',
    pos: 'Full Stack Developer',
    duration: 'March 2025 - May 2025',
    title: "Worked as a Full Stack Developer Intern at Essay Embassy, contributing to the development and maintenance of a professional academic writing platform. Focused on enhancing user experience, implementing secure backend logic, and ensuring responsive front-end performance.",
    icon: '/assets/essaylogo.png',
    animation: 'clapping',
  },
];
