import {
    faArrowLeft,
    faBookmark,
    faDownload,
    faExternalLinkAlt,
    faLock,
    faShare
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Badge, Button, Card, Col, Container, ListGroup, ProgressBar, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Roadmap.css';

const Roadmap = () => {
  const { id } = useParams();
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, you would fetch the roadmap data from an API
    // For demo purposes, we'll use a mock roadmap
    setTimeout(() => {
      setRoadmap({
        id: 'web-development',
        title: 'Web Development Roadmap',
        description: 'A comprehensive guide to becoming a full-stack web developer, covering frontend, backend, and essential tools.',
        level: 'Beginner',
        progress: 35,
        estimatedTime: '6 months',
        modules: [
          {
            id: 'module-1',
            title: 'HTML & CSS Fundamentals',
            description: 'Learn the building blocks of the web.',
            progress: 100,
            status: 'completed',
            resources: [
              { title: 'HTML Crash Course', type: 'video', url: '#' },
              { title: 'CSS Flexbox Guide', type: 'article', url: '#' },
              { title: 'Responsive Design Principles', type: 'course', url: '#' }
            ],
            projects: [
              { title: 'Personal Portfolio Page', description: 'Create a simple portfolio using HTML and CSS' }
            ]
          },
          {
            id: 'module-2',
            title: 'JavaScript Basics',
            description: 'Master the programming language of the web.',
            progress: 75,
            status: 'in-progress',
            resources: [
              { title: 'JavaScript Fundamentals', type: 'video', url: '#' },
              { title: 'DOM Manipulation Guide', type: 'article', url: '#' },
              { title: 'JavaScript Algorithms', type: 'practice', url: '#' }
            ],
            projects: [
              { title: 'Interactive Form Validation', description: 'Build a form with client-side validation' }
            ]
          },
          {
            id: 'module-3',
            title: 'Frontend Frameworks',
            description: 'Learn modern frameworks like React, Vue, or Angular.',
            progress: 0,
            status: 'locked',
            resources: [
              { title: 'React Fundamentals', type: 'course', url: '#' },
              { title: 'State Management in React', type: 'article', url: '#' },
              { title: 'Building SPAs', type: 'video', url: '#' }
            ],
            projects: [
              { title: 'Task Management App', description: 'Create a React app for managing tasks' }
            ]
          },
          {
            id: 'module-4',
            title: 'Backend Development',
            description: 'Build server-side applications with Node.js and Express.',
            progress: 0,
            status: 'locked',
            resources: [
              { title: 'Node.js Crash Course', type: 'video', url: '#' },
              { title: 'RESTful API Design', type: 'article', url: '#' },
              { title: 'Database Integration', type: 'course', url: '#' }
            ],
            projects: [
              { title: 'RESTful API', description: 'Build a REST API for a blog application' }
            ]
          }
        ]
      });
      setLoading(false);
    }, 1000);
  }, [id]);
  
  if (loading) {
    return (
      <Container className="py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading roadmap...</p>
      </Container>
    );
  }
  
  if (!roadmap) {
    return (
      <Container className="py-5 text-center">
        <h2>Roadmap not found</h2>
        <p>The roadmap you're looking for doesn't exist or has been removed.</p>
        <Link to="/dashboard" className="btn btn-primary mt-3">
          <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
          Back to Dashboard
        </Link>
      </Container>
    );
  }
  
  return (
    <Container className="py-5">
      {/* Roadmap Header */}
      <Row className="mb-4">
        <Col>
          <Link to="/dashboard" className="text-decoration-none mb-3 d-inline-block">
            <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
            Back to Dashboard
          </Link>
          <div className="d-flex justify-content-between align-items-start flex-wrap">
            <div>
              <h1 className="mb-2">{roadmap.title}</h1>
              <p className="text-muted mb-3">{roadmap.description}</p>
              <div>
                <Badge bg="primary" className="me-2">
                  {roadmap.level}
                </Badge>
                <Badge bg="secondary">
                  {roadmap.estimatedTime}
                </Badge>
              </div>
            </div>
            <div className="d-flex mt-3 mt-md-0">
              <Button variant="outline-secondary" className="me-2">
                <FontAwesomeIcon icon={faBookmark} className="me-2" />
                Save
              </Button>
              <Button variant="outline-secondary" className="me-2">
                <FontAwesomeIcon icon={faShare} className="me-2" />
                Share
              </Button>
              <Button variant="outline-primary">
                <FontAwesomeIcon icon={faDownload} className="me-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      
      {/* Progress Overview */}
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body className="p-4">
              <h3 className="mb-3">Your Progress</h3>
              <ProgressBar now={roadmap.progress} variant="primary" className="mb-3" style={{ height: '10px' }} />
              <div className="d-flex justify-content-between">
                <span>{roadmap.progress}% Complete</span>
                <span>Estimated Time: {roadmap.estimatedTime}</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      {/* Modules */}
      <h3 className="mb-4">Learning Modules</h3>
      {roadmap.modules.map((module, index) => (
        <Card key={module.id} className={`mb-4 ${module.status === 'locked' ? 'locked-module' : ''}`}>
          <Card.Header className="d-flex justify-content-between align-items-center py-3">
            <div className="d-flex align-items-center">
              <div className="module-number me-3">
                {index + 1}
              </div>
              <h4 className="mb-0">{module.title}</h4>
            </div>
            <Badge 
              bg={
                module.status === 'completed' ? 'success' : 
                module.status === 'in-progress' ? 'warning' : 
                'secondary'
              }
            >
              {module.status === 'completed' ? 'Completed' : 
               module.status === 'in-progress' ? 'In Progress' : 
               'Locked'}
            </Badge>
          </Card.Header>
          <Card.Body className="p-4">
            <p className="text-muted mb-4">{module.description}</p>
            
            {module.status !== 'locked' && (
              <>
                <div className="mb-4">
                  <h5 className="mb-3">Resources</h5>
                  <Row>
                    {module.resources.map((resource, i) => (
                      <Col md={4} key={i} className="mb-3">
                        <Card className="resource-item h-100">
                          <Card.Body className="p-3">
                            <div className="d-flex justify-content-between align-items-start">
                              <h6 className="mb-2">{resource.title}</h6>
                              <Badge 
                                bg={
                                  resource.type === 'video' ? 'danger' : 
                                  resource.type === 'article' ? 'info' : 
                                  resource.type === 'course' ? 'primary' : 
                                  'secondary'
                                }
                                className="text-uppercase"
                              >
                                {resource.type}
                              </Badge>
                            </div>
                            <a href={resource.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary mt-2">
                              <FontAwesomeIcon icon={faExternalLinkAlt} className="me-1" />
                              Access
                            </a>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
                
                <div>
                  <h5 className="mb-3">Projects</h5>
                  <ListGroup variant="flush">
                    {module.projects.map((project, i) => (
                      <ListGroup.Item key={i} className="px-0 py-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="mb-1">{project.title}</h6>
                            <p className="text-muted mb-0">{project.description}</p>
                          </div>
                          <Button variant="outline-primary" size="sm">
                            Start Project
                          </Button>
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </div>
              </>
            )}
            
            {module.status === 'locked' && (
              <div className="text-center py-4">
                <FontAwesomeIcon icon={faLock} size="3x" className="text-secondary mb-3" />
                <p className="mb-3">This module is currently locked. Complete the previous modules to unlock it.</p>
                <Button variant="primary" disabled>
                  Unlock Module
                </Button>
              </div>
            )}
          </Card.Body>
          {module.status === 'in-progress' && (
            <Card.Footer className="bg-white p-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <ProgressBar now={module.progress} variant="primary" className="module-progress" />
                  <small className="text-muted">{module.progress}% Complete</small>
                </div>
                <Button variant="primary">
                  Continue Learning
                </Button>
              </div>
            </Card.Footer>
          )}
        </Card>
      ))}
    </Container>
  );
};

export default Roadmap;