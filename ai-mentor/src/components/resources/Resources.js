import {
  faBook,
  faBookmark,
  faChartBar,
  faCode,
  faDatabase,
  faExternalLinkAlt,
  faGraduationCap,
  faLaptopCode,
  faMobileAlt,
  faPalette,
  faSearch,
  faServer,
  faStar,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Badge, Button, Card, Col, Container, Form, InputGroup, Row, Tab, Tabs } from 'react-bootstrap';
import './Resources.css';

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    type: '',
    level: '',
    price: ''
  });
  
  useEffect(() => {
    // In a real app, you would fetch resources from an API
    // For demo purposes, we'll use mock data
    setTimeout(() => {
      setResources([
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
          url: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/'
        },
        {
          id: 2,
          title: 'Machine Learning A-Z™: Hands-On Python & R',
          provider: 'Udemy',
          instructor: 'Kirill Eremenko, Hadelin de Ponteves',
          type: 'course',
          category: 'data-science',
          level: 'intermediate',
          rating: 4.5,
          reviews: 145000,
          duration: '44 hours',
          isPaid: true,
          price: 19.99,
          description: 'Learn to create Machine Learning Algorithms in Python and R from two Data Science experts.',
          tags: ['Python', 'R', 'Machine Learning', 'Data Science', 'AI'],
          icon: faChartBar,
          iconBg: '#36D1DC',
          url: 'https://www.udemy.com/course/machinelearning/'
        },
        {
          id: 3,
          title: 'JavaScript Algorithms and Data Structures',
          provider: 'freeCodeCamp',
          instructor: 'freeCodeCamp Team',
          type: 'course',
          category: 'programming',
          level: 'intermediate',
          rating: 4.8,
          reviews: 12000,
          duration: '300 hours',
          isPaid: false,
          description: 'Learn fundamental programming concepts in JavaScript. You will start with basic data structures like numbers and strings. Then you will learn to work with arrays, objects, functions, loops, and more.',
          tags: ['JavaScript', 'Algorithms', 'Data Structures', 'Programming'],
          icon: faCode,
          iconBg: '#FF5858',
          url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/'
        },
        {
          id: 4,
          title: 'CS50: Introduction to Computer Science',
          provider: 'Harvard (edX)',
          instructor: 'David J. Malan',
          type: 'course',
          category: 'computer-science',
          level: 'beginner',
          rating: 4.9,
          reviews: 25000,
          duration: '12 weeks',
          isPaid: false,
          description: 'An introduction to the intellectual enterprises of computer science and the art of programming. This course teaches students how to think algorithmically and solve problems efficiently.',
          tags: ['Computer Science', 'C', 'Python', 'SQL', 'Algorithms'],
          icon: faGraduationCap,
          iconBg: '#8E54E9',
          url: 'https://www.edx.org/course/cs50s-introduction-to-computer-science'
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
          price: 19.99,
          description: 'Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',
          tags: ['React', 'JavaScript', 'Redux', 'Hooks', 'Next.js'],
          icon: faLaptopCode,
          iconBg: '#4776E6',
          url: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/'
        },
        {
          id: 6,
          title: 'UI/UX Design Specialization',
          provider: 'Coursera',
          instructor: 'California Institute of the Arts',
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
          url: 'https://www.coursera.org/specializations/ui-ux-design'
        },
        {
          id: 7,
          title: 'The Odin Project',
          provider: 'The Odin Project',
          instructor: 'Community',
          type: 'curriculum',
          category: 'web-development',
          level: 'beginner',
          rating: 4.8,
          reviews: 5000,
          duration: 'Self-paced',
          isPaid: false,
          description: 'The Odin Project provides a free open source coding curriculum that can be taken entirely online. It helps you learn web development with a focus on projects and real-world skills.',
          tags: ['HTML', 'CSS', 'JavaScript', 'Ruby on Rails', 'Full Stack'],
          icon: faLaptopCode,
          iconBg: '#4776E6',
          url: 'https://www.theodinproject.com/'
        },
        {
          id: 8,
          title: 'Flutter & Dart - The Complete Guide',
          provider: 'Udemy',
          instructor: 'Maximilian Schwarzmüller',
          type: 'course',
          category: 'mobile-development',
          level: 'intermediate',
          rating: 4.6,
          reviews: 42000,
          duration: '42 hours',
          isPaid: true,
          price: 19.99,
          description: 'A Complete Guide to the Flutter SDK & Flutter Framework for building native iOS and Android apps.',
          tags: ['Flutter', 'Dart', 'Mobile Development', 'iOS', 'Android'],
          icon: faMobileAlt,
          iconBg: '#5CDB95',
          url: 'https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/'
        },
        {
          id: 9,
          title: 'AWS Certified Solutions Architect',
          provider: 'A Cloud Guru',
          instructor: 'Ryan Kroonenburg',
          type: 'certification',
          category: 'cloud-computing',
          level: 'advanced',
          rating: 4.7,
          reviews: 32000,
          duration: '40 hours',
          isPaid: true,
          price: 39.99,
          description: 'Prepare for the AWS Solutions Architect Associate certification. Learn to design and deploy scalable systems on AWS.',
          tags: ['AWS', 'Cloud Computing', 'DevOps', 'Infrastructure', 'Certification'],
          icon: faDatabase,
          iconBg: '#FF8C00',
          url: 'https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c02'
        },
        {
          id: 10,
          title: 'DevOps with Docker, Kubernetes & Terraform',
          provider: 'Udemy',
          instructor: 'Mumshad Mannambeth',
          type: 'course',
          category: 'devops',
          level: 'intermediate',
          rating: 4.6,
          reviews: 28000,
          duration: '38 hours',
          isPaid: true,
          price: 19.99,
          description: 'Learn DevOps with Docker, Kubernetes, Terraform, Ansible, Jenkins, and more. Includes hands-on labs and projects.',
          tags: ['Docker', 'Kubernetes', 'Terraform', 'DevOps', 'CI/CD'],
          icon: faServer,
          iconBg: '#FF5E62',
          url: 'https://www.udemy.com/course/devops-with-docker-kubernetes-and-terraform/'
        },
        {
          id: 11,
          title: 'Digital Marketing Specialization',
          provider: 'Coursera',
          instructor: 'University of Illinois',
          type: 'specialization',
          category: 'marketing',
          level: 'beginner',
          rating: 4.5,
          reviews: 15000,
          duration: '8 months',
          isPaid: true,
          price: 49.99,
          description: 'Master strategic marketing concepts and tools to address brand communication in a digital world.',
          tags: ['Digital Marketing', 'SEO', 'Social Media', 'Content Marketing', 'Analytics'],
          icon: faUsers,
          iconBg: '#4776E6',
          url: 'https://www.coursera.org/specializations/digital-marketing'
        },
        {
          id: 12,
          title: 'MDN Web Docs',
          provider: 'Mozilla',
          instructor: 'Mozilla Contributors',
          type: 'documentation',
          category: 'web-development',
          level: 'all-levels',
          rating: 4.9,
          reviews: 20000,
          duration: 'Self-paced',
          isPaid: false,
          description: 'The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps.',
          tags: ['HTML', 'CSS', 'JavaScript', 'Web APIs', 'Documentation'],
          icon: faBook,
          iconBg: '#4776E6',
          url: 'https://developer.mozilla.org/'
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  // Generate star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FontAwesomeIcon 
          key={i} 
          icon={faStar} 
          className={i < Math.floor(rating) ? 'text-warning' : 'text-muted'}
        />
      );
    }
    return stars;
  };
  
  const filteredResources = resources.filter(resource => {
    // Tab filter
    if (activeTab !== 'all' && resource.category !== activeTab) {
      return false;
    }
    
    // Search filter
    if (filters.search && !resource.title.toLowerCase().includes(filters.search.toLowerCase()) && 
        !resource.provider.toLowerCase().includes(filters.search.toLowerCase()) &&
        !resource.description.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    
    // Category filter
    if (filters.category && resource.category !== filters.category) {
      return false;
    }
    
    // Type filter
    if (filters.type && resource.type !== filters.type) {
      return false;
    }
    
    // Level filter
    if (filters.level && resource.level !== filters.level) {
      return false;
    }
    
    // Price filter
    if (filters.price === 'free' && resource.isPaid) {
      return false;
    }
    if (filters.price === 'paid' && !resource.isPaid) {
      return false;
    }
    
    return true;
  });
  
  return (
    <Container className="py-5">
      <h1 className="mb-4">Learning Resources</h1>
      
      {/* Search */}
      <Card className="mb-4">
        <Card.Body className="p-4">
          <Row>
            <Col lg={10} className="mb-3 mb-lg-0">
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Search for courses, tutorials, or topics"
                  name="search"
                  value={filters.search}
                  onChange={handleFilterChange}
                />
              </InputGroup>
            </Col>
            <Col lg={2}>
              <Button variant="primary" className="w-100">
                <FontAwesomeIcon icon={faSearch} className="me-2" />
                Search
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      
      {/* Category Tabs */}
      <Tabs
        activeKey={activeTab}
        onSelect={handleTabChange}
        className="mb-4 resource-tabs"
      >
        <Tab eventKey="all" title="All Resources" />
        <Tab eventKey="web-development" title={
          <span><FontAwesomeIcon icon={faLaptopCode} className="me-2" />Web Development</span>
        } />
        <Tab eventKey="data-science" title={
          <span><FontAwesomeIcon icon={faChartBar} className="me-2" />Data Science</span>
        } />
        <Tab eventKey="design" title={
          <span><FontAwesomeIcon icon={faPalette} className="me-2" />Design</span>
        } />
        <Tab eventKey="mobile-development" title={
          <span><FontAwesomeIcon icon={faMobileAlt} className="me-2" />Mobile Dev</span>
        } />
        <Tab eventKey="cloud-computing" title={
          <span><FontAwesomeIcon icon={faDatabase} className="me-2" />Cloud</span>
        } />
      </Tabs>
      
      <Row>
        {/* Filters Sidebar */}
        <Col lg={3} className="mb-4">
          <Card>
            <Card.Body className="p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="mb-0">Filters</h5>
                <Button variant="link" className="p-0" onClick={() => setFilters({
                  search: '',
                  category: '',
                  type: '',
                  level: '',
                  price: ''
                })}>
                  Clear All
                </Button>
              </div>
              
              <Form>
                <Form.Group className="mb-4">
                  <Form.Label>Resource Type</Form.Label>
                  <Form.Select 
                    name="type"
                    value={filters.type}
                    onChange={handleFilterChange}
                  >
                    <option value="">All Types</option>
                    <option value="course">Courses</option>
                    <option value="tutorial">Tutorials</option>
                    <option value="documentation">Documentation</option>
                    <option value="book">Books</option>
                    <option value="video">Videos</option>
                    <option value="specialization">Specializations</option>
                    <option value="certification">Certifications</option>
                  </Form.Select>
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label>Level</Form.Label>
                  <Form.Select 
                    name="level"
                    value={filters.level}
                    onChange={handleFilterChange}
                  >
                    <option value="">All Levels</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="all-levels">All Levels</option>
                  </Form.Select>
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label>Price</Form.Label>
                  <Form.Select 
                    name="price"
                    value={filters.price}
                    onChange={handleFilterChange}
                  >
                    <option value="">All Prices</option>
                    <option value="free">Free</option>
                    <option value="paid">Paid</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        
        {/* Resource Listings */}
        <Col lg={9}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="mb-0">
              {loading ? 'Loading resources...' : `${filteredResources.length} Resources Found`}
            </h5>
            <Form.Select className="w-auto">
              <option>Most Relevant</option>
              <option>Highest Rated</option>
              <option>Newest</option>
            </Form.Select>
          </div>
          
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Loading resources...</p>
            </div>
          ) : filteredResources.length === 0 ? (
            <Card className="text-center py-5">
              <Card.Body>
                <h4>No resources found</h4>
                <p className="text-muted">Try adjusting your search filters</p>
              </Card.Body>
            </Card>
          ) : (
            <Row>
              {filteredResources.map(resource => (
                <Col lg={6} key={resource.id} className="mb-4">
                  <Card className="resource-card h-100">
                    <Card.Body className="p-4">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div className="resource-icon" style={{ backgroundColor: resource.iconBg }}>
                          <FontAwesomeIcon icon={resource.icon} />
                        </div>
                        <Badge bg={resource.isPaid ? 'warning' : 'success'}>
                          {resource.isPaid ? 'Paid' : 'Free'}
                        </Badge>
                      </div>
                      
                      <Card.Title className="mb-2">{resource.title}</Card.Title>
                      <div className="mb-2">
                        <span className="resource-provider">{resource.provider}</span>
                        {resource.instructor && (
                          <span className="resource-instructor"> • {resource.instructor}</span>
                        )}
                      </div>
                      
                      <div className="mb-3">
                        <div className="resource-rating">
                          {renderStars(resource.rating)}
                          <span className="ms-2">{resource.rating} ({resource.reviews.toLocaleString()})</span>
                        </div>
                      </div>
                      
                      <Card.Text className="text-muted mb-3">
                        {resource.description}
                      </Card.Text>
                      
                      <div className="mb-3">
                        {resource.tags.map((tag, index) => (
                          <Badge bg="light" text="dark" key={index} className="me-2 mb-2">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          {resource.isPaid && (
                            <span className="resource-price">₹{resource.price}</span>
                          )}
                          {resource.duration && (
                            <span className="resource-duration ms-3">
                              <FontAwesomeIcon icon={faGraduationCap} className="me-1" />
                              {resource.duration}
                            </span>
                          )}
                        </div>
                        <div>
                          <Button variant="outline-secondary" className="me-2">
                            <FontAwesomeIcon icon={faBookmark} />
                          </Button>
                          <a href={resource.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" />
                            View
                          </a>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
          
          {!loading && filteredResources.length > 0 && (
            <div className="d-flex justify-content-center mt-4">
              <Button variant="outline-primary" className="me-2">Previous</Button>
              <Button variant="primary" className="me-2">1</Button>
              <Button variant="outline-primary" className="me-2">2</Button>
              <Button variant="outline-primary" className="me-2">3</Button>
              <Button variant="outline-primary">Next</Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Resources;