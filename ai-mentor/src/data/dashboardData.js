import {
  faBrain,
  faChartBar,
  faCode,
  faLaptopCode,
  faPalette
} from '@fortawesome/free-solid-svg-icons';

// Roadmaps data
export const roadmaps = [
  {
    id: 'web-development',
    title: 'Web Development Roadmap',
    description: 'Learn frontend and backend web development from scratch',
    level: 'Beginner',
    progress: 35,
    nextMilestone: 'JavaScript Basics',
    totalModules: 24,
    completedModules: 8,
    estimatedTime: '6 months',
    icon: faLaptopCode,
    iconBg: '#4776E6',
    tags: ['Frontend', 'Backend', 'Full Stack'],
    popular: true
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design Roadmap',
    description: 'Master the principles of user interface and experience design',
    level: 'Intermediate',
    progress: 20,
    nextMilestone: 'User Research Methods',
    totalModules: 18,
    completedModules: 4,
    estimatedTime: '4 months',
    icon: faPalette,
    iconBg: '#FF5858',
    tags: ['Design', 'User Experience', 'Prototyping'],
    popular: true
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence Roadmap',
    description: 'Master AI concepts, machine learning, and neural networks',
    level: 'Intermediate',
    progress: 0,
    nextMilestone: 'Python for AI',
    totalModules: 28,
    completedModules: 0,
    estimatedTime: '7 months',
    icon: faBrain,
    iconBg: '#9C27B0',
    tags: ['Machine Learning', 'Neural Networks', 'Deep Learning'],
    popular: true
  },
  {
    id: 'data-science',
    title: 'Data Science Roadmap',
    description: 'Learn data analysis, visualization, and machine learning',
    level: 'Advanced',
    progress: 15,
    nextMilestone: 'Introduction to Python',
    totalModules: 30,
    completedModules: 5,
    estimatedTime: '8 months',
    icon: faChartBar,
    iconBg: '#36D1DC',
    tags: ['Python', 'Machine Learning', 'Statistics'],
    popular: true
  }
];

// Jobs data
export const jobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechCorp India',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    remote: true,
    salary: '₹12,00,000 - ₹18,00,000',
    postedDays: 3,
    skills: ['React', 'JavaScript', 'CSS', 'Redux', 'Webpack'],
    description: 'We are looking for a skilled Frontend Developer to join our team. You will be responsible for building user interfaces and implementing responsive designs.',
    requirements: [
      'At least 2 years of experience with React',
      'Strong understanding of JavaScript, HTML, and CSS',
      'Experience with state management libraries like Redux',
      'Knowledge of modern frontend build tools'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health and medical insurance',
      'Flexible work schedule',
      'Professional development budget'
    ],
    logoBg: '#4776E6',
    url: '#',
    featured: true
  },
  {
    id: 2,
    title: 'UX/UI Designer',
    company: 'CreativeMinds India',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    remote: true,
    salary: '₹10,00,000 - ₹15,00,000',
    postedDays: 2,
    skills: ['Figma', 'UI Design', 'Wireframing', 'Prototyping', 'User Research'],
    description: 'Join our design team to create beautiful and functional user interfaces. You will collaborate with product managers and developers to deliver exceptional user experiences.',
    requirements: [
      'At least 3 years of experience in UI/UX design',
      'Proficiency with design tools like Figma or Sketch',
      'Strong portfolio demonstrating your design process',
      'Experience conducting user research and usability testing'
    ],
    benefits: [
      'Competitive salary',
      'Comprehensive benefits package',
      'Remote-first culture',
      'Creative environment'
    ],
    logoBg: '#FF5858',
    url: '#',
    featured: true
  },
  {
    id: 3,
    title: 'Data Scientist',
    company: 'AnalyticsPro India',
    location: 'Remote',
    type: 'Full-time',
    remote: true,
    salary: '₹15,00,000 - ₹22,00,000',
    postedDays: 7,
    skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow', 'Data Visualization'],
    description: 'We are seeking a Data Scientist to help us extract insights from complex datasets. You will build machine learning models and create data visualizations to drive business decisions.',
    requirements: [
      'Masters or PhD in a quantitative field',
      'Strong programming skills in Python',
      'Experience with machine learning frameworks',
      'Excellent communication skills'
    ],
    benefits: [
      'Competitive compensation',
      'Flexible work arrangements',
      'Health and wellness benefits',
      'Continuous learning opportunities'
    ],
    logoBg: '#36D1DC',
    url: '#',
    featured: false
  },
  {
    id: 4,
    title: 'Full Stack Developer',
    company: 'InnovateTech India',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    remote: false,
    salary: '₹14,00,000 - ₹20,00,000',
    postedDays: 5,
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express'],
    description: 'Looking for a Full Stack Developer to build and maintain web applications. You will work on both frontend and backend development using modern JavaScript frameworks.',
    requirements: [
      'At least 3 years of experience in full stack development',
      'Proficiency with React and Node.js',
      'Experience with NoSQL databases',
      'Knowledge of RESTful API design'
    ],
    benefits: [
      'Competitive salary',
      'Health insurance',
      'Provident Fund',
      'Professional development opportunities'
    ],
    logoBg: '#4776E6',
    url: '#',
    featured: false
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    company: 'CloudSystems India',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    remote: true,
    salary: '₹18,00,000 - ₹25,00,000',
    postedDays: 1,
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    description: 'Join our DevOps team to build and maintain our cloud infrastructure. You will automate deployment processes and ensure the reliability of our systems.',
    requirements: [
      'At least 4 years of experience in DevOps or SRE roles',
      'Strong knowledge of AWS services',
      'Experience with containerization and orchestration',
      'Proficiency with infrastructure as code tools'
    ],
    benefits: [
      'Competitive salary',
      'Remote work options',
      'Comprehensive benefits package',
      'Learning and development budget'
    ],
    logoBg: '#FF8C00',
    url: '#',
    featured: true
  },
  {
    id: 6,
    title: 'Mobile App Developer',
    company: 'AppWorks India',
    location: 'Chennai, Tamil Nadu',
    type: 'Full-time',
    remote: true,
    salary: '₹12,00,000 - ₹18,00,000',
    postedDays: 4,
    skills: ['React Native', 'iOS', 'Android', 'JavaScript', 'Mobile UI'],
    description: 'We are looking for a Mobile App Developer to build cross-platform applications. You will work on creating engaging mobile experiences for our users.',
    requirements: [
      'At least 2 years of experience in mobile app development',
      'Proficiency with React Native',
      'Understanding of iOS and Android platforms',
      'Experience with state management in mobile apps'
    ],
    benefits: [
      'Competitive salary',
      'Flexible work hours',
      'Health and wellness benefits',
      'Professional growth opportunities'
    ],
    logoBg: '#5CDB95',
    url: '#',
    featured: false
  },
  {
    id: 7,
    title: 'AI Engineer',
    company: 'IntelliSystems India',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    remote: true,
    salary: '₹20,00,000 - ₹30,00,000',
    postedDays: 1,
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning', 'Deep Learning'],
    description: 'We are seeking an AI Engineer to develop and implement artificial intelligence solutions. You will work on cutting-edge AI projects and collaborate with cross-functional teams.',
    requirements: [
      'At least 3 years of experience in AI/ML development',
      'Strong knowledge of deep learning frameworks (TensorFlow, PyTorch)',
      'Experience with natural language processing or computer vision',
      'Proficiency in Python and data science libraries'
    ],
    benefits: [
      'Competitive salary and equity options',
      'Remote-first culture',
      'Comprehensive health benefits',
      'Continuous learning budget',
      'Flexible work schedule'
    ],
    logoBg: '#9C27B0',
    url: '#',
    featured: true
  }
];

// Resources data
export const resources = [
  {
    id: 1,
    title: 'The Complete Web Development Bootcamp',
    provider: 'Udemy',
    instructor: 'Dr. Angela Yu',
    type: 'course',
    category: 'web-development',
    level: 'beginner',
    rating: 4.7,
    reviews: 158000,
    duration: '65 hours',
    isPaid: true,
    price: 1499,
    description: 'Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB, and more!',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
    icon: faLaptopCode,
    iconBg: '#4776E6',
    url: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/',
    popular: true
  },
  {
    id: 2,
    title: 'UI/UX Design Specialization',
    provider: 'Coursera',
    instructor: 'Indian Institute of Design',
    type: 'specialization',
    category: 'design',
    level: 'beginner',
    rating: 4.5,
    reviews: 18000,
    duration: '3 months',
    isPaid: true,
    price: 3999,
    description: 'Design High-Impact User Experiences. Research, design, and prototype effective, visually-driven websites and apps.',
    tags: ['UI Design', 'UX Design', 'User Research', 'Wireframing', 'Prototyping'],
    icon: faPalette,
    iconBg: '#FF5858',
    url: 'https://www.coursera.org/specializations/ui-ux-design',
    popular: true
  },
  {
    id: 3,
    title: 'freeCodeCamp JavaScript Algorithms',
    provider: 'freeCodeCamp',
    instructor: 'freeCodeCamp Team',
    type: 'course',
    category: 'programming',
    level: 'intermediate',
    rating: 4.8,
    reviews: 12000,
    duration: '300 hours',
    isPaid: false,
    description: 'Learn fundamental programming concepts in JavaScript. You will start with basic data structures like numbers and strings.',
    tags: ['JavaScript', 'Algorithms', 'Data Structures', 'Programming'],
    icon: faCode,
    iconBg: '#FF5858',
    url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
    popular: true
  },
  {
    id: 4,
    title: 'Machine Learning A-Z',
    provider: 'Udemy',
    instructor: 'Kirill Eremenko, Hadelin de Ponteves',
    type: 'course',
    category: 'data-science',
    level: 'intermediate',
    rating: 4.5,
    reviews: 145000,
    duration: '44 hours',
    isPaid: true,
    price: 1499,
    description: 'Learn to create Machine Learning Algorithms in Python and R from two Data Science experts.',
    tags: ['Python', 'R', 'Machine Learning', 'Data Science', 'AI'],
    icon: faChartBar,
    iconBg: '#36D1DC',
    url: 'https://www.udemy.com/course/machinelearning/',
    popular: false
  },
  {
    id: 5,
    title: 'React - The Complete Guide',
    provider: 'Udemy',
    instructor: 'Maximilian Schwarzmüller',
    type: 'course',
    category: 'web-development',
    level: 'intermediate',
    rating: 4.6,
    reviews: 135000,
    duration: '48 hours',
    isPaid: true,
    price: 1499,
    description: 'Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',
    tags: ['React', 'JavaScript', 'Redux', 'Hooks', 'Next.js'],
    icon: faLaptopCode,
    iconBg: '#4776E6',
    url: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
    popular: false
  },
  {
    id: 6,
    title: 'Deep Learning Specialization',
    provider: 'Coursera',
    instructor: 'Andrew Ng',
    type: 'specialization',
    category: 'artificial-intelligence',
    level: 'intermediate',
    rating: 4.9,
    reviews: 185000,
    duration: '5 months',
    isPaid: true,
    price: 3999,
    description: 'Master Deep Learning and break into AI. Learn to build neural networks and lead successful machine learning projects.',
    tags: ['Deep Learning', 'Neural Networks', 'TensorFlow', 'Python', 'AI'],
    icon: faBrain,
    iconBg: '#9C27B0',
    url: 'https://www.coursera.org/specializations/deep-learning',
    popular: true
  },
  {
    id: 7,
    title: 'Artificial Intelligence: Reinforcement Learning in Python',
    provider: 'Udemy',
    instructor: 'Lazy Programmer Inc.',
    type: 'course',
    category: 'artificial-intelligence',
    level: 'advanced',
    rating: 4.6,
    reviews: 12500,
    duration: '16 hours',
    isPaid: true,
    price: 1499,
    description: 'Complete guide to artificial intelligence and machine learning, prep for deep reinforcement learning.',
    tags: ['Reinforcement Learning', 'Python', 'AI', 'Machine Learning'],
    icon: faBrain,
    iconBg: '#9C27B0',
    url: 'https://www.udemy.com/course/artificial-intelligence-reinforcement-learning-in-python/',
    popular: false
  }
];

// Learning progress data
export const learningProgress = {
  webDevelopment: 35,
  uiUxDesign: 20,
  dataScience: 15,
  artificialIntelligence: 0,
  completedCourses: 3,
  streak: 7,
  totalHours: 42,
  lastActive: '2023-10-05',
  certificates: 1,
  projects: 2,
  skillLevels: {
    html: 75,
    css: 70,
    javascript: 45,
    react: 20,
    nodejs: 15,
    figma: 40,
    python: 25,
    machinelearning: 10,
    deeplearning: 5
  }
};

// Events data
export const events = [
  {
    id: 1,
    title: 'Web Development Workshop',
    date: '2023-10-15',
    time: '10:00 AM - 12:00 PM',
    location: 'Online',
    description: 'Learn how to build responsive websites using the latest CSS techniques from top Indian developers.',
    type: 'Workshop',
    free: true,
    url: '#'
  },
  {
    id: 2,
    title: 'Career Q&A Session',
    date: '2023-10-22',
    time: '2:00 PM - 3:30 PM',
    location: 'Online',
    description: 'Join our panel of industry experts from leading Indian tech companies to get answers to your career questions.',
    type: 'Q&A',
    free: true,
    url: '#'
  },
  {
    id: 3,
    title: 'AI & ML Hackathon',
    date: '2023-11-05',
    time: '9:00 AM - 6:00 PM',
    location: 'VIT-AP University, Amaravati',
    description: 'Participate in this exciting hackathon focused on AI and Machine Learning applications. Great prizes to be won!',
    type: 'Hackathon',
    free: true,
    url: '#'
  }
];

// Daily tasks data
export const dailyTasks = [
  {
    id: 1,
    title: 'Complete "JavaScript Basics" module',
    status: 'completed',
    roadmap: 'web-development',
    type: 'module',
    points: 50
  },
  {
    id: 2,
    title: 'Work on personal portfolio project',
    status: 'in-progress',
    roadmap: 'web-development',
    type: 'project',
    points: 100
  },
  {
    id: 3,
    title: 'Start "React Fundamentals" course',
    status: 'pending',
    roadmap: 'web-development',
    type: 'course',
    points: 75
  },
  {
    id: 4,
    title: 'Practice coding challenges',
    status: 'pending',
    roadmap: 'web-development',
    type: 'practice',
    points: 30
  }
];