// Artificial Intelligence Roadmap
export const artificialIntelligenceRoadmap = {
  id: 'artificial-intelligence',
  title: 'Artificial Intelligence Roadmap',
  description: 'A comprehensive guide to mastering artificial intelligence concepts and applications',
  level: 'Intermediate',
  estimatedTime: '7 months',
  prerequisites: ['Basic programming knowledge', 'High school mathematics', 'Analytical thinking'],
  overview: `This roadmap will guide you through the exciting world of artificial intelligence. 
  You'll start with the fundamentals of Python programming for AI, then progress through 
  machine learning, neural networks, and deep learning. By the end of this roadmap, 
  you'll have the skills to build intelligent systems and understand the cutting-edge 
  technologies shaping our future.`,
  modules: [
    {
      id: 1,
      title: 'Python for AI',
      description: 'Learn Python programming fundamentals for AI development',
      status: 'unlocked',
      progress: 0,
      duration: '3 weeks',
      topics: [
        { title: 'Python Basics', completed: false },
        { title: 'Data Structures in Python', completed: false },
        { title: 'Functions and Object-Oriented Programming', completed: false },
        { title: 'NumPy for Numerical Computing', completed: false },
        { title: 'Pandas for Data Manipulation', completed: false }
      ],
      resources: [4, 5],
      projects: [
        { title: 'Data Analysis Script', completed: false }
      ]
    },
    {
      id: 2,
      title: 'Mathematics for AI',
      description: 'Master the mathematical foundations of artificial intelligence',
      status: 'locked',
      progress: 0,
      duration: '4 weeks',
      topics: [
        { title: 'Linear Algebra Essentials', completed: false },
        { title: 'Calculus for Optimization', completed: false },
        { title: 'Probability and Statistics', completed: false },
        { title: 'Information Theory', completed: false },
        { title: 'Mathematical Optimization', completed: false }
      ],
      resources: [4],
      projects: [
        { title: 'Mathematical Model Implementation', completed: false }
      ],
      dependencies: [1]
    },
    {
      id: 3,
      title: 'Machine Learning Fundamentals',
      description: 'Learn the core concepts and algorithms of machine learning',
      status: 'locked',
      progress: 0,
      duration: '5 weeks',
      topics: [
        { title: 'Supervised Learning', completed: false },
        { title: 'Unsupervised Learning', completed: false },
        { title: 'Model Evaluation and Validation', completed: false },
        { title: 'Feature Engineering', completed: false },
        { title: 'Ensemble Methods', completed: false }
      ],
      resources: [4],
      projects: [
        { title: 'Classification Project', completed: false },
        { title: 'Regression Project', completed: false }
      ],
      dependencies: [2]
    },
    {
      id: 4,
      title: 'Neural Networks',
      description: 'Understand the architecture and training of neural networks',
      status: 'locked',
      progress: 0,
      duration: '4 weeks',
      topics: [
        { title: 'Perceptrons and Multi-layer Networks', completed: false },
        { title: 'Backpropagation', completed: false },
        { title: 'Activation Functions', completed: false },
        { title: 'Regularization Techniques', completed: false },
        { title: 'Optimization Algorithms', completed: false }
      ],
      resources: [4],
      projects: [
        { title: 'Neural Network from Scratch', completed: false }
      ],
      dependencies: [3]
    },
    {
      id: 5,
      title: 'Deep Learning',
      description: 'Master deep learning architectures and frameworks',
      status: 'locked',
      progress: 0,
      duration: '5 weeks',
      topics: [
        { title: 'Introduction to TensorFlow and PyTorch', completed: false },
        { title: 'Convolutional Neural Networks', completed: false },
        { title: 'Recurrent Neural Networks', completed: false },
        { title: 'Generative Adversarial Networks', completed: false },
        { title: 'Transfer Learning', completed: false }
      ],
      resources: [4],
      projects: [
        { title: 'Image Classification Project', completed: false },
        { title: 'Natural Language Processing Project', completed: false }
      ],
      dependencies: [4]
    },
    {
      id: 6,
      title: 'Reinforcement Learning',
      description: 'Learn how to train agents through reinforcement',
      status: 'locked',
      progress: 0,
      duration: '4 weeks',
      topics: [
        { title: 'Markov Decision Processes', completed: false },
        { title: 'Q-Learning', completed: false },
        { title: 'Policy Gradients', completed: false },
        { title: 'Deep Reinforcement Learning', completed: false },
        { title: 'Multi-Agent Systems', completed: false }
      ],
      resources: [4],
      projects: [
        { title: 'Game-Playing Agent', completed: false }
      ],
      dependencies: [5]
    },
    {
      id: 7,
      title: 'AI Ethics and Applications',
      description: 'Explore ethical considerations and real-world applications of AI',
      status: 'locked',
      progress: 0,
      duration: '3 weeks',
      topics: [
        { title: 'Ethical Considerations in AI', completed: false },
        { title: 'Bias and Fairness', completed: false },
        { title: 'AI Safety', completed: false },
        { title: 'Industry Applications', completed: false },
        { title: 'Future of AI', completed: false }
      ],
      resources: [4],
      projects: [
        { title: 'Ethical AI Case Study', completed: false }
      ],
      dependencies: [6]
    }
  ]
};

// Web Development Roadmap Details
export const webDevelopmentRoadmap = {
  id: 'web-development',
  title: 'Web Development Roadmap',
  description: 'A comprehensive guide to becoming a full-stack web developer, covering both frontend and backend technologies.',
  level: 'Beginner',
  estimatedTime: '6 months',
  prerequisites: ['Basic computer skills', 'Problem-solving ability'],
  overview: `This roadmap will guide you through the process of becoming a proficient web developer. 
  You'll start with the fundamentals of HTML, CSS, and JavaScript before moving on to more advanced 
  topics like frontend frameworks, backend development, and databases. By the end of this roadmap, 
  you'll have the skills to build complete web applications from scratch.`,
  modules: [
    {
      id: 1,
      title: 'HTML Fundamentals',
      description: 'Learn the building blocks of web pages',
      status: 'completed',
      progress: 100,
      duration: '2 weeks',
      topics: [
        { title: 'Introduction to HTML', completed: true },
        { title: 'HTML Document Structure', completed: true },
        { title: 'HTML Elements and Attributes', completed: true },
        { title: 'HTML Forms', completed: true },
        { title: 'HTML5 Semantic Elements', completed: true }
      ],
      resources: [1, 8],
      projects: [
        { title: 'Personal Profile Page', completed: true }
      ]
    },
    {
      id: 2,
      title: 'CSS Styling',
      description: 'Style your web pages with CSS',
      status: 'completed',
      progress: 100,
      duration: '3 weeks',
      topics: [
        { title: 'CSS Selectors', completed: true },
        { title: 'Box Model', completed: true },
        { title: 'Flexbox Layout', completed: true },
        { title: 'CSS Grid', completed: true },
        { title: 'Responsive Design', completed: true },
        { title: 'CSS Animations', completed: true }
      ],
      resources: [1, 8],
      projects: [
        { title: 'Responsive Landing Page', completed: true }
      ]
    },
    {
      id: 3,
      title: 'JavaScript Basics',
      description: 'Learn the fundamentals of JavaScript programming',
      status: 'in-progress',
      progress: 75,
      duration: '4 weeks',
      topics: [
        { title: 'Variables and Data Types', completed: true },
        { title: 'Operators and Expressions', completed: true },
        { title: 'Control Flow (if/else, loops)', completed: true },
        { title: 'Functions', completed: true },
        { title: 'Arrays and Objects', completed: true },
        { title: 'DOM Manipulation', completed: false },
        { title: 'Events', completed: false },
        { title: 'Error Handling', completed: false }
      ],
      resources: [1, 3, 8],
      projects: [
        { title: 'Interactive Form Validation', completed: false }
      ]
    },
    {
      id: 4,
      title: 'Advanced JavaScript',
      description: 'Deepen your JavaScript knowledge with advanced concepts',
      status: 'locked',
      progress: 0,
      duration: '3 weeks',
      topics: [
        { title: 'Closures and Scope', completed: false },
        { title: 'Asynchronous JavaScript', completed: false },
        { title: 'Promises and Async/Await', completed: false },
        { title: 'ES6+ Features', completed: false },
        { title: 'Object-Oriented JavaScript', completed: false },
        { title: 'Functional Programming Concepts', completed: false }
      ],
      resources: [3, 5],
      projects: [
        { title: 'Weather App with API Integration', completed: false }
      ],
      dependencies: [3]
    },
    {
      id: 5,
      title: 'React Fundamentals',
      description: 'Learn the popular React frontend framework',
      status: 'locked',
      progress: 0,
      duration: '4 weeks',
      topics: [
        { title: 'React Components', completed: false },
        { title: 'JSX Syntax', completed: false },
        { title: 'Props and State', completed: false },
        { title: 'Component Lifecycle', completed: false },
        { title: 'Hooks', completed: false },
        { title: 'Event Handling', completed: false },
        { title: 'Forms in React', completed: false },
        { title: 'React Router', completed: false }
      ],
      resources: [5],
      projects: [
        { title: 'Todo List Application', completed: false }
      ],
      dependencies: [4]
    },
    {
      id: 6,
      title: 'Node.js Basics',
      description: 'Introduction to server-side JavaScript with Node.js',
      status: 'locked',
      progress: 0,
      duration: '3 weeks',
      topics: [
        { title: 'Node.js Environment', completed: false },
        { title: 'NPM Package Management', completed: false },
        { title: 'File System Operations', completed: false },
        { title: 'HTTP Module', completed: false },
        { title: 'Express.js Framework', completed: false },
        { title: 'RESTful API Development', completed: false },
        { title: 'Middleware', completed: false }
      ],
      resources: [1],
      projects: [
        { title: 'Simple REST API', completed: false }
      ],
      dependencies: [4]
    },
    {
      id: 7,
      title: 'Databases',
      description: 'Learn to work with databases in web applications',
      status: 'locked',
      progress: 0,
      duration: '3 weeks',
      topics: [
        { title: 'Database Concepts', completed: false },
        { title: 'SQL Basics', completed: false },
        { title: 'MongoDB Basics', completed: false },
        { title: 'Database Design', completed: false },
        { title: 'CRUD Operations', completed: false },
        { title: 'Data Relationships', completed: false },
        { title: 'Database Integration with Node.js', completed: false }
      ],
      resources: [1, 6],
      projects: [
        { title: 'Blog Application with Database', completed: false }
      ],
      dependencies: [6]
    },
    {
      id: 8,
      title: 'Full Stack Project',
      description: 'Build a complete web application using all the skills you\'ve learned',
      status: 'locked',
      progress: 0,
      duration: '4 weeks',
      topics: [
        { title: 'Project Planning', completed: false },
        { title: 'Frontend Development with React', completed: false },
        { title: 'Backend Development with Node.js', completed: false },
        { title: 'Database Integration', completed: false },
        { title: 'Authentication and Authorization', completed: false },
        { title: 'Deployment', completed: false },
        { title: 'Testing', completed: false }
      ],
      resources: [1, 5],
      projects: [
        { title: 'E-commerce Website', completed: false }
      ],
      dependencies: [5, 7]
    }
  ]
};

// UI/UX Design Roadmap Details
export const uiUxDesignRoadmap = {
  id: 'ui-ux-design',
  title: 'UI/UX Design Roadmap',
  description: 'Master the principles of user interface and experience design to create intuitive and engaging digital products.',
  level: 'Intermediate',
  estimatedTime: '4 months',
  prerequisites: ['Basic computer skills', 'Interest in visual design', 'Problem-solving ability'],
  overview: `This roadmap will guide you through the process of becoming a proficient UI/UX designer. 
  You'll learn design principles, user research methods, wireframing, prototyping, and more. By the end 
  of this roadmap, you'll have the skills to design user-centered digital experiences and build a 
  professional portfolio.`,
  modules: [
    {
      id: 1,
      title: 'Design Principles',
      description: 'Learn the fundamental principles of visual design',
      status: 'completed',
      progress: 100,
      duration: '2 weeks',
      topics: [
        { title: 'Color Theory', completed: true },
        { title: 'Typography', completed: true },
        { title: 'Layout and Composition', completed: true },
        { title: 'Visual Hierarchy', completed: true },
        { title: 'Gestalt Principles', completed: true }
      ],
      resources: [2],
      projects: [
        { title: 'Design Principles Analysis', completed: true }
      ]
    },
    {
      id: 2,
      title: 'User Research Methods',
      description: 'Learn how to understand user needs and behaviors',
      status: 'in-progress',
      progress: 20,
      duration: '3 weeks',
      topics: [
        { title: 'User Interviews', completed: true },
        { title: 'Surveys and Questionnaires', completed: false },
        { title: 'Personas', completed: false },
        { title: 'User Journey Mapping', completed: false },
        { title: 'Empathy Mapping', completed: false },
        { title: 'Competitive Analysis', completed: false }
      ],
      resources: [2],
      projects: [
        { title: 'User Research Report', completed: false }
      ]
    },
    {
      id: 3,
      title: 'Wireframing and Information Architecture',
      description: 'Learn to structure content and create wireframes',
      status: 'locked',
      progress: 0,
      duration: '2 weeks',
      topics: [
        { title: 'Information Architecture Basics', completed: false },
        { title: 'Site Maps', completed: false },
        { title: 'User Flows', completed: false },
        { title: 'Low-Fidelity Wireframing', completed: false },
        { title: 'Mid-Fidelity Wireframing', completed: false },
        { title: 'Wireframing Tools', completed: false }
      ],
      resources: [2],
      projects: [
        { title: 'Website Wireframes', completed: false }
      ],
      dependencies: [2]
    },
    {
      id: 4,
      title: 'UI Design',
      description: 'Create visually appealing user interfaces',
      status: 'locked',
      progress: 0,
      duration: '3 weeks',
      topics: [
        { title: 'UI Elements and Components', completed: false },
        { title: 'Design Systems', completed: false },
        { title: 'Grid Systems', completed: false },
        { title: 'Responsive Design', completed: false },
        { title: 'Visual Style and Branding', completed: false },
        { title: 'UI Design Tools (Figma)', completed: false }
      ],
      resources: [2],
      projects: [
        { title: 'Mobile App UI Design', completed: false }
      ],
      dependencies: [1, 3]
    },
    {
      id: 5,
      title: 'Prototyping and Interaction Design',
      description: 'Create interactive prototypes to test your designs',
      status: 'locked',
      progress: 0,
      duration: '2 weeks',
      topics: [
        { title: 'Interaction Design Principles', completed: false },
        { title: 'Microinteractions', completed: false },
        { title: 'Animation in UI', completed: false },
        { title: 'Prototyping Tools', completed: false },
        { title: 'Interactive Prototypes', completed: false },
        { title: 'Prototype Testing', completed: false }
      ],
      resources: [2],
      projects: [
        { title: 'Interactive Prototype', completed: false }
      ],
      dependencies: [4]
    },
    {
      id: 6,
      title: 'Usability Testing',
      description: 'Learn how to test your designs with real users',
      status: 'locked',
      progress: 0,
      duration: '2 weeks',
      topics: [
        { title: 'Usability Testing Methods', completed: false },
        { title: 'Test Planning', completed: false },
        { title: 'Recruiting Participants', completed: false },
        { title: 'Conducting Tests', completed: false },
        { title: 'Analyzing Results', completed: false },
        { title: 'Iterating Designs', completed: false }
      ],
      resources: [2],
      projects: [
        { title: 'Usability Test Report', completed: false }
      ],
      dependencies: [5]
    },
    {
      id: 7,
      title: 'Portfolio Project',
      description: 'Create a comprehensive UX case study for your portfolio',
      status: 'locked',
      progress: 0,
      duration: '4 weeks',
      topics: [
        { title: 'Problem Definition', completed: false },
        { title: 'User Research', completed: false },
        { title: 'Information Architecture', completed: false },
        { title: 'Wireframing', completed: false },
        { title: 'UI Design', completed: false },
        { title: 'Prototyping', completed: false },
        { title: 'Usability Testing', completed: false },
        { title: 'Case Study Documentation', completed: false }
      ],
      resources: [2],
      projects: [
        { title: 'UX Design Case Study', completed: false }
      ],
      dependencies: [6]
    }
  ]
};

// Data Science Roadmap Details
export const dataScienceRoadmap = {
  id: 'data-science',
  title: 'Data Science Roadmap',
  description: 'Learn data analysis, visualization, and machine learning to extract insights from data.',
  level: 'Advanced',
  estimatedTime: '8 months',
  prerequisites: ['Basic programming knowledge', 'High school mathematics', 'Analytical thinking'],
  overview: `This roadmap will guide you through the process of becoming a data scientist. You'll learn 
  programming with Python, statistics, data analysis, visualization, and machine learning. By the end of 
  this roadmap, you'll have the skills to analyze complex datasets and build predictive models.`,
  modules: [
    {
      id: 1,
      title: 'Introduction to Python',
      description: 'Learn the Python programming language for data science',
      status: 'in-progress',
      progress: 15,
      duration: '4 weeks',
      topics: [
        { title: 'Python Basics', completed: true },
        { title: 'Data Types and Variables', completed: false },
        { title: 'Control Flow', completed: false },
        { title: 'Functions', completed: false },
        { title: 'Object-Oriented Programming', completed: false },
        { title: 'Modules and Packages', completed: false }
      ],
      resources: [4, 9],
      projects: [
        { title: 'Python Data Processing Script', completed: false }
      ]
    },
    {
      id: 2,
      title: 'Mathematics for Data Science',
      description: 'Learn the mathematical foundations of data science',
      status: 'locked',
      progress: 0,
      duration: '4 weeks',
      topics: [
        { title: 'Linear Algebra Basics', completed: false },
        { title: 'Calculus Fundamentals', completed: false },
        { title: 'Probability Theory', completed: false },
        { title: 'Statistical Distributions', completed: false },
        { title: 'Hypothesis Testing', completed: false }
      ],
      resources: [4],
      projects: [
        { title: 'Statistical Analysis Report', completed: false }
      ],
      dependencies: [1]
    },
    {
      id: 3,
      title: 'Data Analysis with Pandas',
      description: 'Learn to analyze data using Python\'s Pandas library',
      status: 'locked',
      progress: 0,
      duration: '3 weeks',
      topics: [
        { title: 'Pandas Basics', completed: false },
        { title: 'Data Cleaning', completed: false },
        { title: 'Data Transformation', completed: false },
        { title: 'Data Aggregation', completed: false },
        { title: 'Time Series Analysis', completed: false },
        { title: 'Working with Different Data Formats', completed: false }
      ],
      resources: [4],
      projects: [
        { title: 'Exploratory Data Analysis Project', completed: false }
      ],
      dependencies: [1]
    },
    {
      id: 4,
      title: 'Data Visualization',
      description: 'Learn to create effective data visualizations',
      status: 'locked',
      progress: 0,
      duration: '3 weeks',
      topics: [
        { title: 'Visualization Principles', completed: false },
        { title: 'Matplotlib', completed: false },
        { title: 'Seaborn', completed: false },
        { title: 'Plotly', completed: false },
        { title: 'Interactive Visualizations', completed: false },
        { title: 'Dashboard Creation', completed: false }
      ],
      resources: [4],
      projects: [
        { title: 'Data Visualization Dashboard', completed: false }
      ],
      dependencies: [3]
    },
    {
      id: 5,
      title: 'Machine Learning Fundamentals',
      description: 'Introduction to machine learning concepts and algorithms',
      status: 'locked',
      progress: 0,
      duration: '4 weeks',
      topics: [
        { title: 'Supervised vs. Unsupervised Learning', completed: false },
        { title: 'Regression Algorithms', completed: false },
        { title: 'Classification Algorithms', completed: false },
        { title: 'Model Evaluation', completed: false },
        { title: 'Feature Engineering', completed: false },
        { title: 'Scikit-Learn Library', completed: false }
      ],
      resources: [4, 10],
      projects: [
        { title: 'Predictive Model Development', completed: false }
      ],
      dependencies: [2, 3]
    },
    {
      id: 6,
      title: 'Advanced Machine Learning',
      description: 'Explore advanced machine learning techniques',
      status: 'locked',
      progress: 0,
      duration: '4 weeks',
      topics: [
        { title: 'Ensemble Methods', completed: false },
        { title: 'Dimensionality Reduction', completed: false },
        { title: 'Clustering Algorithms', completed: false },
        { title: 'Natural Language Processing', completed: false },
        { title: 'Time Series Forecasting', completed: false },
        { title: 'Model Deployment', completed: false }
      ],
      resources: [4, 10],
      projects: [
        { title: 'Advanced ML Application', completed: false }
      ],
      dependencies: [5]
    },
    {
      id: 7,
      title: 'Deep Learning',
      description: 'Introduction to neural networks and deep learning',
      status: 'locked',
      progress: 0,
      duration: '4 weeks',
      topics: [
        { title: 'Neural Network Basics', completed: false },
        { title: 'TensorFlow and Keras', completed: false },
        { title: 'Convolutional Neural Networks', completed: false },
        { title: 'Recurrent Neural Networks', completed: false },
        { title: 'Transfer Learning', completed: false },
        { title: 'Model Optimization', completed: false }
      ],
      resources: [10],
      projects: [
        { title: 'Deep Learning Project', completed: false }
      ],
      dependencies: [6]
    },
    {
      id: 8,
      title: 'Capstone Project',
      description: 'Apply all your data science skills to a real-world problem',
      status: 'locked',
      progress: 0,
      duration: '6 weeks',
      topics: [
        { title: 'Problem Definition', completed: false },
        { title: 'Data Collection', completed: false },
        { title: 'Data Cleaning and Preparation', completed: false },
        { title: 'Exploratory Data Analysis', completed: false },
        { title: 'Model Development', completed: false },
        { title: 'Model Evaluation', completed: false },
        { title: 'Results Communication', completed: false },
        { title: 'Project Documentation', completed: false }
      ],
      resources: [4, 10],
      projects: [
        { title: 'Data Science Capstone Project', completed: false }
      ],
      dependencies: [7]
    }
  ]
};