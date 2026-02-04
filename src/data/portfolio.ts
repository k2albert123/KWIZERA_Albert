export const projects = [
  {
    id: 'online-exam',
    title: 'Online Exam System',
    description:
      'Spring Boot + React/Thymeleaf + PostgreSQL — auto-submission, grading, PDF export, teacher review.',
    technologies: ['Spring Boot', 'React', 'PostgreSQL'],
    link: '#'
  },
  {
    id: 'student-submission',
    title: 'Student Work Submission Platform',
    description:
      'Jakarta EE + Hibernate + JSP + PostgreSQL — uploads (PDF/PPTX/Excel/ZIP), hashed auth, admin roles.',
    technologies: ['Jakarta EE', 'Hibernate', 'PostgreSQL'],
    link: '#'
  },
  {
    id: 'booking-system',
    title: 'Booking System',
    description: 'Spring Boot + React + PostgreSQL — availability-based bookings, admin dashboard.',
    technologies: ['Spring Boot', 'React', 'PostgreSQL'],
    link: '#'
  },
  {
    id: 'chat-app',
    title: 'Chat Application',
    description: 'Spring Boot + WebSockets + React — real-time messaging with history storage.',
    technologies: ['Spring Boot', 'WebSockets', 'React'],
    link: '#'
  },
  {
    id: 'light-scheduler',
    title: 'Light Scheduler with MQTT + WebSockets + Arduino',
    description:
      'Browser interface to set ON/OFF times. WebSocket → MQTT → Arduino flow for device control.',
    technologies: ['WebSockets', 'MQTT', 'Arduino', 'JavaScript'],
    link: '#'
  },
  {
    id: 'dapp-prototype',
    title: 'DApp Prototype',
    description: 'Solidity + Truffle + Ganache + MetaMask — SimpleStorage contract and full folder setup.',
    technologies: ['Solidity', 'Truffle', 'Ganache', 'MetaMask'],
    link: '#'
  }
];

export const portfolioData = {
  skills: [
    { 
      name: 'Backend Ecosystem', 
      level: 'Advanced', 
      description: 'Robust server-side engineering with Spring Boot, Jakarta EE, and Node.js. Experienced in WebSockets, MQTT brokers, and Python automation.',
      icons: [
        '/assets/java.png', 
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original-wordmark.svg', 
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/arduino/arduino-original.svg',
        'https://www.svgrepo.com/show/303670/firebase-1-logo.svg',
        'https://www.svgrepo.com/show/353657/django-icon.svg',
        'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Hibernate-Light.svg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/NestJS.svg/3840px-NestJS.svg.png'
      ],
      category: 'Backend'
    },
    { 
      name: 'Frontend Development', 
      level: 'Advanced', 
      description: 'Sleek, responsive UIs using React, Vite, and Tailwind CSS. Expertise in TypeScript, React Router, Context API, and legacy systems like Thymeleaf/JSP.',
      icons: [
        '/assets/react.jpeg', 
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg', 
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original-wordmark.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
        'https://www.svgrepo.com/show/354113/nextjs-icon.svg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/500px-Vitejs-logo.svg.png',
        'https://www.svgrepo.com/show/353396/angular-icon.svg'
      ],
      category: 'Frontend'
    },
    { 
      name: 'Mobile App Dev', 
      level: 'Advanced', 
      description: 'Cross-platform mobile engineering with React Native, Expo, and Flutter. Proficient in EAS builds and mobile CI/CD workflows.',
      icons: [
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', 
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/apple/apple-original.svg',
        'https://cdn.worldvectorlogo.com/logos/expo-1.svg',
        'https://www.svgrepo.com/show/303500/react-1-logo.svg'
      ],
      category: 'Mobile'
    },
    { 
      name: 'Database Systems', 
      level: 'Advanced', 
      description: 'Designing and optimizing relational schemas with PostgreSQL and MySQL. Experience with H2 for development and testing cycles.',
      icons: [
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg', 
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/960px-Postgresql_elephant.svg.png',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
        'https://staging.svgrepo.com/show/331488/mongodb.svg',
        'https://firebase.google.com/static/images/products/icons/build_firestore.svg'
      ],
      category: 'Databases'
    },
    { 
      name: 'Web3 & Blockchain', 
      level: 'Intermediate', 
      description: 'Developing smart contracts with Solidity. Familiar with Hardhat, Truffle, Ganache, and MetaMask integration.',
      icons: [
        '/assets/solidity.png', 
        'https://download.logo.wine/logo/Solidity/Solidity-Logo.wine.png',
        'https://www.svgviewer.dev/static-svgs/482369/eth.svg'
      ],
      category: 'Blockchain'
    },
    { 
      name: 'DevOps & Tooling', 
      level: 'Intermediate', 
      description: 'Streamlining development with Git, GitHub, Vercel, and Maven. Strong focus on testing with JUnit and Mockito.',
      icons: [
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg',
        'https://cdn.worldvectorlogo.com/logos/vercel.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/maven/maven-original.svg',
        'https://cdn.worldvectorlogo.com/logos/git.svg',
        'https://www.svgrepo.com/show/373625/gitlab.svg',
        'https://www.svgrepo.com/show/331370/docker.svg',
        'https://www.svgrepo.com/show/361653/vercel-logo.svg'
      ],
      category: 'DevOps'
    }
  ],
  databases: ['PostgreSQL', 'MySQL (conceptual)', 'MongoDB (conceptual)'],
  backendExperience: [
    'REST APIs with Spring Boot & Jakarta EE',
    'JWT authentication, password hashing & reset flows',
    'File handling: PDF, Excel, PPTX, ZIP uploads',
    'Email and notification services'
  ],
  frontendProjects: [
    'Full React + Tailwind setups (routing, layouts, auth views, landing pages)',
    'Adaptive and accessible interfaces (AI/ML ideas for TTS, sound input)',
    'Dark theme design and clean UI'
  ],
  mobileDevelopmentKnowledge: [
    'React Native (Expo & CLI) project setup',
    'Understanding cross-platform vs native trade-offs'
  ],
  otherKnowledgeAreas: [
    'Mechanics & Physics problem solving (curvilinear/circular/projectile motion)',
    'Tree data structures and algorithms'
  ],
  strengths: [
    'Cross-disciplinary developer (backend, frontend, databases, embedded)',
    'Comfortable in enterprise Java and modern JS ecosystems',
    'Focus on accessibility and usability',
    'Design full-stack systems end-to-end',
    'Interest in AI/ML-powered adaptive interfaces'
  ]
};