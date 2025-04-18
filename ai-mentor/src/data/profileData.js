// User profile data
export const userProfile = {
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  bio: 'Frontend developer passionate about creating beautiful and functional user interfaces.',
  location: 'San Francisco, CA',
  website: 'https://alexjohnson.dev',
  github: 'github.com/alexjohnson',
  linkedin: 'linkedin.com/in/alexjohnson',
  joinDate: '2023-08-15',
  avatar: '/assets/images/avatar.jpg',
  interests: ['Web Development', 'UI/UX Design', 'JavaScript', 'React'],
  goals: [
    'Master React and its ecosystem',
    'Learn Node.js for backend development',
    'Build a full-stack portfolio project',
    'Contribute to open source'
  ]
};

// Saved items
export const savedItems = [
  {
    id: 1,
    type: 'job',
    title: 'Frontend Developer',
    company: 'TechCorp',
    date: '2023-10-05'
  },
  {
    id: 2,
    type: 'resource',
    title: 'React - The Complete Guide',
    provider: 'Udemy',
    date: '2023-10-03'
  },
  {
    id: 3,
    type: 'roadmap',
    title: 'Web Development Roadmap',
    progress: 35,
    date: '2023-09-28'
  },
  {
    id: 4,
    type: 'job',
    title: 'Full Stack Developer',
    company: 'InnovateTech',
    date: '2023-10-01'
  },
  {
    id: 5,
    type: 'resource',
    title: 'JavaScript Algorithms and Data Structures',
    provider: 'freeCodeCamp',
    date: '2023-09-25'
  }
];

// Learning history
export const learningHistory = [
  {
    id: 1,
    title: 'Completed HTML & CSS Module',
    date: '2023-10-01',
    type: 'module',
    roadmap: 'web-development'
  },
  {
    id: 2,
    title: 'Started JavaScript Basics',
    date: '2023-10-02',
    type: 'module',
    roadmap: 'web-development'
  },
  {
    id: 3,
    title: 'Completed "Building Your First Website" Project',
    date: '2023-09-25',
    type: 'project',
    roadmap: 'web-development'
  },
  {
    id: 4,
    title: 'Watched "Introduction to UI Design" Video',
    date: '2023-09-20',
    type: 'video',
    roadmap: 'ui-ux-design'
  },
  {
    id: 5,
    title: 'Completed Color Theory Quiz',
    date: '2023-09-18',
    type: 'quiz',
    roadmap: 'ui-ux-design'
  },
  {
    id: 6,
    title: 'Started Python Basics',
    date: '2023-10-04',
    type: 'module',
    roadmap: 'data-science'
  },
  {
    id: 7,
    title: 'Completed "Responsive Landing Page" Project',
    date: '2023-09-15',
    type: 'project',
    roadmap: 'web-development'
  }
];

// Certificates
export const certificates = [
  {
    id: 1,
    title: 'Web Development Fundamentals',
    issuer: 'AI Mentor',
    date: '2023-09-15',
    credential: 'CERT-12345',
    skills: ['HTML', 'CSS', 'Responsive Design'],
    url: '#'
  },
  {
    id: 2,
    title: 'JavaScript Essentials',
    issuer: 'freeCodeCamp',
    date: '2023-08-20',
    credential: 'CERT-67890',
    skills: ['JavaScript', 'ES6', 'DOM Manipulation'],
    url: '#'
  }
];

// Projects
export const projects = [
  {
    id: 1,
    title: 'Personal Portfolio Website',
    description: 'A responsive portfolio website built with HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/assets/images/project1.jpg',
    demoUrl: '#',
    codeUrl: '#',
    date: '2023-09-10',
    roadmap: 'web-development'
  },
  {
    id: 2,
    title: 'Weather App',
    description: 'A weather application that fetches data from a weather API and displays current conditions.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
    image: '/assets/images/project2.jpg',
    demoUrl: '#',
    codeUrl: '#',
    date: '2023-08-25',
    roadmap: 'web-development'
  }
];

// Notification settings
export const notificationSettings = {
  email: true,
  jobAlerts: true,
  resourceRecommendations: true,
  roadmapUpdates: true,
  events: true,
  achievements: true
};

// Account settings
export const accountSettings = {
  language: 'English',
  timezone: 'America/Los_Angeles',
  theme: 'light',
  privacySettings: {
    profileVisibility: 'public',
    showProgress: true,
    showCertificates: true
  }
};