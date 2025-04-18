import {
  faArrowLeft,
  faBook,
  faCheckCircle,
  faClock,
  faCode,
  faGraduationCap,
  faLock, faPlay,
  faVideo
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Badge, Button, Card, Col, Container, ListGroup, Nav, ProgressBar, Row, Tab } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { resources } from '../../data/dashboardData';
import {
  artificialIntelligenceRoadmap,
  dataScienceRoadmap,
  uiUxDesignRoadmap,
  webDevelopmentRoadmap
} from '../../data/roadmapDetailsData';
import './Roadmap.css';

const RoadmapDetail = () => {
  const { id } = useParams();
  const [roadmap, setRoadmap] = useState(null);
  const [activeModule, setActiveModule] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Get the roadmap data based on the ID
    let roadmapData;
    switch (id) {
      case 'web-development':
        roadmapData = webDevelopmentRoadmap;
        break;
      case 'ui-ux-design':
        roadmapData = uiUxDesignRoadmap;
        break;
      case 'data-science':
        roadmapData = dataScienceRoadmap;
        break;
      case 'artificial-intelligence':
        roadmapData = artificialIntelligenceRoadmap;
        break;
      default:
        roadmapData = null;
    }
    
    setRoadmap(roadmapData);
    
    // Set the active module to the first in-progress module or the first module
    if (roadmapData) {
      const inProgressModule = roadmapData.modules.find(module => module.status === 'in-progress');
      setActiveModule(inProgressModule || roadmapData.modules[0]);
    }
    
    setLoading(false);
  }, [id]);
  
  if (loading) {
    return (
      <Container className="py-5">
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading roadmap...</p>
        </div>
      </Container>
    );
  }
  
  if (!roadmap) {
    return (
      <Container className="py-5">
        <Card className="text-center py-5">
          <Card.Body>
            <h3>Roadmap Not Found</h3>
            <p className="text-muted">The roadmap you're looking for doesn't exist or has been removed.</p>
            <Link to="/dashboard" className="btn btn-primary mt-3">
              <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
              Back to Dashboard
            </Link>
          </Card.Body>
        </Card>
      </Container>
    );
  }
  
  // Calculate overall progress
  const completedModules = roadmap.modules.filter(module => module.status === 'completed').length;
  const totalModules = roadmap.modules.length;
  const overallProgress = Math.round((completedModules / totalModules) * 100);
  
  // Get module resources
  const getModuleResources = (resourceIds) => {
    return resources.filter(resource => resourceIds.includes(resource.id));
  };
  
  return (
    <Container className="py-5">
      <Link to="/dashboard" className="btn btn-outline-primary mb-4">
        <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
        Back to Dashboard
      </Link>
      
      {/* Roadmap Header */}
      <Card className="roadmap-header mb-4">
        <Card.Body className="p-4">
          <Row>
            <Col md={8}>
              <h1 className="mb-2">{roadmap.title}</h1>
              <p className="lead mb-3">{roadmap.description}</p>
              
              <div className="d-flex flex-wrap mb-3">
                <Badge bg="primary" className="me-2 mb-2">
                  Level: {roadmap.level}
                </Badge>
                <Badge bg="info" className="me-2 mb-2">
                  <FontAwesomeIcon icon={faClock} className="me-1" />
                  {roadmap.estimatedTime}
                </Badge>
                <Badge bg="success" className="me-2 mb-2">
                  <FontAwesomeIcon icon={faGraduationCap} className="me-1" />
                  {completedModules} of {totalModules} modules completed
                </Badge>
              </div>
              
              <div className="mb-3">
                {roadmap.tags.map((tag, index) => (
                  <span key={index} className="roadmap-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </Col>
            <Col md={4} className="d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
              <div className="text-center text-md-end">
                <div className="progress-circle">
                  <div className="progress-circle-inner">
                    <span className="progress-value">{overallProgress}%</span>
                    <span className="progress-text">Complete</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      
      {/* Roadmap Content */}
      <Row>
        {/* Modules Sidebar */}
        <Col lg={4} className="mb-4">
          <Card>
            <Card.Body className="p-4">
              <h4 className="mb-4">Modules</h4>
              <ListGroup variant="flush" className="module-list">
                {roadmap.modules.map((module) => (
                  <ListGroup.Item 
                    key={module.id}
                    className={`module-item ${activeModule.id === module.id ? 'active' : ''} ${module.status}`}
                    onClick={() => module.status !== 'locked' && setActiveModule(module)}
                  >
                    <div className="d-flex align-items-center">
                      <div className="module-status-icon me-3">
                        {module.status === 'completed' && <FontAwesomeIcon icon={faCheckCircle} />}
                        {module.status === 'in-progress' && <FontAwesomeIcon icon={faPlay} />}
                        {module.status === 'locked' && <FontAwesomeIcon icon={faLock} />}
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="mb-1">{module.title}</h5>
                        <p className="mb-2">{module.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="module-duration">
                            <FontAwesomeIcon icon={faClock} className="me-1" />
                            {module.duration}
                          </span>
                          {module.status !== 'locked' && (
                            <ProgressBar 
                              now={module.progress} 
                              variant={
                                module.status === 'completed' ? 'success' : 
                                module.status === 'in-progress' ? 'primary' : 'secondary'
                              }
                              className="module-progress"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        
        {/* Module Details */}
        <Col lg={8}>
          <Card className="mb-4">
            <Card.Body className="p-4">
              <div className="d-flex justify-content-between align-items-start mb-4">
                <div>
                  <h3 className="mb-2">{activeModule.title}</h3>
                  <p className="lead mb-0">{activeModule.description}</p>
                </div>
                {activeModule.status === 'in-progress' && (
                  <Button variant="primary">
                    <FontAwesomeIcon icon={faPlay} className="me-2" />
                    Continue Learning
                  </Button>
                )}
                {activeModule.status === 'completed' && (
                  <Button variant="outline-success" disabled>
                    <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
                    Completed
                  </Button>
                )}
                {activeModule.status === 'locked' && (
                  <Button variant="outline-secondary" disabled>
                    <FontAwesomeIcon icon={faLock} className="me-2" />
                    Locked
                  </Button>
                )}
              </div>
              
              <div className="d-flex mb-4">
                <Badge bg="info" className="me-3">
                  <FontAwesomeIcon icon={faClock} className="me-1" />
                  {activeModule.duration}
                </Badge>
                {activeModule.status !== 'locked' && (
                  <div className="d-flex align-items-center">
                    <span className="me-2">Progress:</span>
                    <ProgressBar 
                      now={activeModule.progress} 
                      variant={activeModule.status === 'completed' ? 'success' : 'primary'} 
                      style={{ width: '150px', height: '10px' }}
                    />
                    <span className="ms-2">{activeModule.progress}%</span>
                  </div>
                )}
              </div>
              
              <Tab.Container defaultActiveKey="topics">
                <Nav variant="tabs" className="mb-4">
                  <Nav.Item>
                    <Nav.Link eventKey="topics">Topics</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="resources">Resources</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="projects">Projects</Nav.Link>
                  </Nav.Item>
                </Nav>
                
                <Tab.Content>
                  <Tab.Pane eventKey="topics">
                    <ListGroup variant="flush">
                      {activeModule.topics.map((topic, index) => (
                        <ListGroup.Item key={index} className="py-3">
                          <div className="d-flex align-items-center">
                            <div className={`topic-status-icon me-3 ${topic.completed ? 'completed' : ''}`}>
                              <FontAwesomeIcon icon={topic.completed ? faCheckCircle : faPlay} />
                            </div>
                            <div>
                              <h5 className="mb-0">{topic.title}</h5>
                            </div>
                          </div>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Tab.Pane>
                  
                  <Tab.Pane eventKey="resources">
                    <Row>
                      {activeModule.resources && getModuleResources(activeModule.resources).map(resource => (
                        <Col md={6} key={resource.id} className="mb-4">
                          <Card className="h-100 resource-card">
                            <Card.Body className="p-3">
                              <div className="d-flex mb-3">
                                <div className="resource-icon me-3" style={{ backgroundColor: resource.iconBg }}>
                                  <FontAwesomeIcon icon={resource.icon} />
                                </div>
                                <div>
                                  <h5 className="mb-1">{resource.title}</h5>
                                  <p className="mb-0">{resource.provider}</p>
                                </div>
                              </div>
                              <div className="mb-3">
                                <Badge bg={resource.type === 'course' ? 'primary' : 
                                         resource.type === 'book' ? 'success' : 
                                         resource.type === 'video' ? 'danger' : 'info'} 
                                       className="me-2">
                                  <FontAwesomeIcon icon={
                                    resource.type === 'course' ? faGraduationCap : 
                                    resource.type === 'book' ? faBook : 
                                    resource.type === 'video' ? faVideo : faCode
                                  } className="me-1" />
                                  {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                                </Badge>
                                {resource.isPaid ? (
                                  <Badge bg="warning" text="dark">
                                    ${resource.price}
                                  </Badge>
                                ) : (
                                  <Badge bg="success">Free</Badge>
                                )}
                              </div>
                              <div className="d-flex justify-content-end">
                                <a href={resource.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                                  View Resource
                                </a>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                  
                  <Tab.Pane eventKey="projects">
                    <ListGroup variant="flush">
                      {activeModule.projects.map((project, index) => (
                        <ListGroup.Item key={index} className="py-3">
                          <div className="d-flex align-items-center">
                            <div className={`project-status-icon me-3 ${project.completed ? 'completed' : ''}`}>
                              <FontAwesomeIcon icon={project.completed ? faCheckCircle : faCode} />
                            </div>
                            <div>
                              <h5 className="mb-0">{project.title}</h5>
                              {project.completed ? (
                                <Badge bg="success" className="mt-2">Completed</Badge>
                              ) : (
                                <Button variant="outline-primary" size="sm" className="mt-2">
                                  Start Project
                                </Button>
                              )}
                            </div>
                          </div>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
          </Card>
          
          {/* Prerequisites and Dependencies */}
          <Card>
            <Card.Body className="p-4">
              <h4 className="mb-4">About This Roadmap</h4>
              
              <h5 className="mb-3">Prerequisites</h5>
              <ul className="mb-4">
                {roadmap.prerequisites.map((prerequisite, index) => (
                  <li key={index}>{prerequisite}</li>
                ))}
              </ul>
              
              {activeModule.dependencies && activeModule.dependencies.length > 0 && (
                <>
                  <h5 className="mb-3">Dependencies</h5>
                  <p>Before starting this module, you should complete:</p>
                  <ul>
                    {activeModule.dependencies.map(depId => {
                      const dependency = roadmap.modules.find(m => m.id === depId);
                      return dependency ? (
                        <li key={depId}>
                          <span className={dependency.status === 'completed' ? 'text-success' : 'text-danger'}>
                            {dependency.title}
                            {dependency.status === 'completed' ? 
                              ' (Completed)' : 
                              ' (Not Completed)'}
                          </span>
                        </li>
                      ) : null;
                    })}
                  </ul>
                </>
              )}
              
              <h5 className="mt-4 mb-3">Overview</h5>
              <p>{roadmap.overview}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RoadmapDetail;