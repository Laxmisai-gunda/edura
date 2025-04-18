// Daily tasks data
export const dailyTasks = [
  {
    id: 1,
    title: 'Complete "JavaScript Basics" module',
    status: 'completed',
    roadmap: 'web-development',
    type: 'module',
    points: 50,
    dueDate: '2023-10-05'
  },
  {
    id: 2,
    title: 'Work on personal portfolio project',
    status: 'in-progress',
    roadmap: 'web-development',
    type: 'project',
    points: 100,
    dueDate: '2023-10-10'
  },
  {
    id: 3,
    title: 'Start "React Fundamentals" course',
    status: 'pending',
    roadmap: 'web-development',
    type: 'course',
    points: 75,
    dueDate: '2023-10-12'
  },
  {
    id: 4,
    title: 'Practice coding challenges',
    status: 'pending',
    roadmap: 'web-development',
    type: 'practice',
    points: 30,
    dueDate: '2023-10-08'
  },
  {
    id: 5,
    title: 'Complete UI wireframing exercise',
    status: 'pending',
    roadmap: 'ui-ux-design',
    type: 'exercise',
    points: 40,
    dueDate: '2023-10-15'
  },
  {
    id: 6,
    title: 'Read article on color theory',
    status: 'completed',
    roadmap: 'ui-ux-design',
    type: 'reading',
    points: 20,
    dueDate: '2023-10-03'
  },
  {
    id: 7,
    title: 'Watch Python data analysis tutorial',
    status: 'in-progress',
    roadmap: 'data-science',
    type: 'video',
    points: 35,
    dueDate: '2023-10-07'
  },
  {
    id: 8,
    title: 'Complete SQL practice problems',
    status: 'pending',
    roadmap: 'data-science',
    type: 'practice',
    points: 45,
    dueDate: '2023-10-20'
  }
];

// Weekly goals data
export const weeklyGoals = [
  {
    id: 1,
    title: 'Complete 3 JavaScript modules',
    progress: 66,
    roadmap: 'web-development',
    completed: 2,
    total: 3
  },
  {
    id: 2,
    title: 'Spend 5 hours on portfolio project',
    progress: 40,
    roadmap: 'web-development',
    completed: 2,
    total: 5
  },
  {
    id: 3,
    title: 'Complete 2 UI design exercises',
    progress: 50,
    roadmap: 'ui-ux-design',
    completed: 1,
    total: 2
  },
  {
    id: 4,
    title: 'Watch 4 data science tutorials',
    progress: 25,
    roadmap: 'data-science',
    completed: 1,
    total: 4
  }
];

// Learning milestones data
export const milestones = [
  {
    id: 1,
    title: 'HTML & CSS Fundamentals',
    roadmap: 'web-development',
    status: 'completed',
    completedDate: '2023-09-15'
  },
  {
    id: 2,
    title: 'JavaScript Basics',
    roadmap: 'web-development',
    status: 'in-progress',
    progress: 75
  },
  {
    id: 3,
    title: 'React Fundamentals',
    roadmap: 'web-development',
    status: 'locked',
    dependencies: [2]
  },
  {
    id: 4,
    title: 'Backend Development with Node.js',
    roadmap: 'web-development',
    status: 'locked',
    dependencies: [2, 3]
  },
  {
    id: 5,
    title: 'Design Principles',
    roadmap: 'ui-ux-design',
    status: 'completed',
    completedDate: '2023-09-20'
  },
  {
    id: 6,
    title: 'User Research Methods',
    roadmap: 'ui-ux-design',
    status: 'in-progress',
    progress: 20
  },
  {
    id: 7,
    title: 'Introduction to Python',
    roadmap: 'data-science',
    status: 'in-progress',
    progress: 15
  }
];