import {
    faBookmark,
    faCertificate,
    faCheck,
    faEdit,
    faEnvelope,
    faHistory,
    faLock,
    faTrash,
    faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Badge, Button, Card, Col, Container, Form, ListGroup, Nav, Row, Tab } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthContext';
import './Profile.css';

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('profile');
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: currentUser?.name || 'User Name',
    email: currentUser?.email || 'user@example.com',
    bio: 'Frontend developer passionate about creating beautiful and functional user interfaces.',
    location: 'San Francisco, CA',
    website: 'https://myportfolio.com',
    github: 'github.com/username',
    linkedin: 'linkedin.com/in/username'
  });
  
  const [savedItems, setSavedItems] = useState([
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
    }
  ]);
  
  const [learningHistory, setLearningHistory] = useState([
    {
      id: 1,
      title: 'Completed HTML & CSS Module',
      date: '2023-10-01',
      type: 'module'
    },
    {
      id: 2,
      title: 'Started JavaScript Basics',
      date: '2023-10-02',
      type: 'module'
    },
    {
      id: 3,
      title: 'Completed "Building Your First Website" Project',
      date: '2023-09-25',
      type: 'project'
    }
  ]);
  
  const [certificates, setCertificates] = useState([
    {
      id: 1,
      title: 'Web Development Fundamentals',
      issuer: 'AI Mentor',
      date: '2023-09-15',
      credential: 'CERT-12345'
    }
  ]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value
    });
  };
  
  const handleSaveProfile = () => {
    // In a real app, you would send this data to your backend
    setEditMode(false);
  };
  
  const handleRemoveSavedItem = (id) => {
    setSavedItems(savedItems.filter(item => item.id !== id));
  };
  
  return (
    <Container className="py-5">
      <Row>
        <Col lg={3} className="mb-4">
          <Card className="profile-sidebar">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <div className="profile-avatar">
                  {profileData.name.charAt(0)}
                </div>
                <h4 className="mt-3 mb-1">{profileData.name}</h4>
                <p className="text-muted mb-0">{profileData.email}</p>
              </div>
              
              <Nav variant="pills" className="flex-column profile-nav" activeKey={activeTab} onSelect={setActiveTab}>
                <Nav.Item>
                  <Nav.Link eventKey="profile">
                    <FontAwesomeIcon icon={faUser} className="me-2" />
                    Profile
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="saved">
                    <FontAwesomeIcon icon={faBookmark} className="me-2" />
                    Saved Items
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="history">
                    <FontAwesomeIcon icon={faHistory} className="me-2" />
                    Learning History
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="certificates">
                    <FontAwesomeIcon icon={faCertificate} className="me-2" />
                    Certificates
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="settings">
                    <FontAwesomeIcon icon={faLock} className="me-2" />
                    Account Settings
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={9}>
          <Tab.Content>
            {/* Profile Tab */}
            <Tab.Pane active={activeTab === 'profile'}>
              <Card className="mb-4">
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="mb-0">Profile Information</h3>
                    <Button 
                      variant={editMode ? "success" : "outline-primary"} 
                      onClick={() => editMode ? handleSaveProfile() : setEditMode(true)}
                    >
                      <FontAwesomeIcon icon={editMode ? faCheck : faEdit} className="me-2" />
                      {editMode ? 'Save Changes' : 'Edit Profile'}
                    </Button>
                  </div>
                  
                  {editMode ? (
                    <Form>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                              type="text"
                              name="name"
                              value={profileData.name}
                              onChange={handleInputChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              value={profileData.email}
                              onChange={handleInputChange}
                              disabled
                            />
                          </Form.Group>
                        </Col>
                        <Col md={12} className="mb-3">
                          <Form.Group>
                            <Form.Label>Bio</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={3}
                              name="bio"
                              value={profileData.bio}
                              onChange={handleInputChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                              type="text"
                              name="location"
                              value={profileData.location}
                              onChange={handleInputChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label>Website</Form.Label>
                            <Form.Control
                              type="text"
                              name="website"
                              value={profileData.website}
                              onChange={handleInputChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label>GitHub</Form.Label>
                            <Form.Control
                              type="text"
                              name="github"
                              value={profileData.github}
                              onChange={handleInputChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label>LinkedIn</Form.Label>
                            <Form.Control
                              type="text"
                              name="linkedin"
                              value={profileData.linkedin}
                              onChange={handleInputChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Form>
                  ) : (
                    <div className="profile-info">
                      <Row className="mb-4">
                        <Col md={6} className="mb-3 mb-md-0">
                          <div className="profile-field">
                            <div className="profile-field-label">
                              <FontAwesomeIcon icon={faUser} className="me-2" />
                              Full Name
                            </div>
                            <div className="profile-field-value">{profileData.name}</div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="profile-field">
                            <div className="profile-field-label">
                              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                              Email
                            </div>
                            <div className="profile-field-value">{profileData.email}</div>
                          </div>
                        </Col>
                      </Row>
                      
                      <div className="profile-field mb-4">
                        <div className="profile-field-label">Bio</div>
                        <div className="profile-field-value">{profileData.bio}</div>
                      </div>
                      
                      <Row className="mb-4">
                        <Col md={6} className="mb-3 mb-md-0">
                          <div className="profile-field">
                            <div className="profile-field-label">Location</div>
                            <div className="profile-field-value">{profileData.location}</div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="profile-field">
                            <div className="profile-field-label">Website</div>
                            <div className="profile-field-value">
                              <a href={profileData.website} target="_blank" rel="noopener noreferrer">
                                {profileData.website}
                              </a>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      
                      <Row>
                        <Col md={6} className="mb-3 mb-md-0">
                          <div className="profile-field">
                            <div className="profile-field-label">GitHub</div>
                            <div className="profile-field-value">
                              <a href={`https://${profileData.github}`} target="_blank" rel="noopener noreferrer">
                                {profileData.github}
                              </a>
                            </div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="profile-field">
                            <div className="profile-field-label">LinkedIn</div>
                            <div className="profile-field-value">
                              <a href={`https://${profileData.linkedin}`} target="_blank" rel="noopener noreferrer">
                                {profileData.linkedin}
                              </a>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  )}
                </Card.Body>
              </Card>
              
              <Card>
                <Card.Body className="p-4">
                  <h3 className="mb-4">Learning Progress</h3>
                  <div className="learning-stats mb-4">
                    <Row>
                      <Col md={4} className="mb-3 mb-md-0">
                        <div className="stat-card">
                          <div className="stat-value">35%</div>
                          <div className="stat-label">Web Development</div>
                          <div className="progress mt-2">
                            <div 
                              className="progress-bar bg-primary" 
                              role="progressbar" 
                              style={{ width: '35%' }} 
                              aria-valuenow="35" 
                              aria-valuemin="0" 
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </Col>
                      <Col md={4} className="mb-3 mb-md-0">
                        <div className="stat-card">
                          <div className="stat-value">20%</div>
                          <div className="stat-label">UI/UX Design</div>
                          <div className="progress mt-2">
                            <div 
                              className="progress-bar bg-info" 
                              role="progressbar" 
                              style={{ width: '20%' }} 
                              aria-valuenow="20" 
                              aria-valuemin="0" 
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="stat-card">
                          <div className="stat-value">15%</div>
                          <div className="stat-label">Data Science</div>
                          <div className="progress mt-2">
                            <div 
                              className="progress-bar bg-success" 
                              role="progressbar" 
                              style={{ width: '15%' }} 
                              aria-valuenow="15" 
                              aria-valuemin="0" 
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Recent Activity</h5>
                    <Button variant="link" className="p-0" onClick={() => setActiveTab('history')}>
                      View All
                    </Button>
                  </div>
                  
                  <ListGroup variant="flush">
                    {learningHistory.slice(0, 3).map(item => (
                      <ListGroup.Item key={item.id} className="px-0 py-3">
                        <div className="d-flex justify-content-between">
                          <div>
                            <h6 className="mb-1">{item.title}</h6>
                            <small className="text-muted">
                              {new Date(item.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </small>
                          </div>
                          <Badge bg={item.type === 'module' ? 'primary' : 'success'}>
                            {item.type === 'module' ? 'Module' : 'Project'}
                          </Badge>
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Tab.Pane>
            
            {/* Saved Items Tab */}
            <Tab.Pane active={activeTab === 'saved'}>
              <Card>
                <Card.Body className="p-4">
                  <h3 className="mb-4">Saved Items</h3>
                  
                  {savedItems.length === 0 ? (
                    <div className="text-center py-4">
                      <p className="mb-0">You haven't saved any items yet.</p>
                    </div>
                  ) : (
                    <ListGroup variant="flush">
                      {savedItems.map(item => (
                        <ListGroup.Item key={item.id} className="px-0 py-3">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h5 className="mb-1">{item.title}</h5>
                              <div className="d-flex align-items-center">
                                {item.type === 'job' && (
                                  <span className="text-muted me-3">{item.company}</span>
                                )}
                                {item.type === 'resource' && (
                                  <span className="text-muted me-3">{item.provider}</span>
                                )}
                                {item.type === 'roadmap' && item.progress && (
                                  <div className="d-flex align-items-center me-3">
                                    <div className="progress me-2" style={{ width: '100px', height: '8px' }}>
                                      <div 
                                        className="progress-bar bg-primary" 
                                        role="progressbar" 
                                        style={{ width: `${item.progress}%` }} 
                                        aria-valuenow={item.progress} 
                                        aria-valuemin="0" 
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                    <small>{item.progress}%</small>
                                  </div>
                                )}
                                <Badge bg={
                                  item.type === 'job' ? 'primary' : 
                                  item.type === 'resource' ? 'info' : 
                                  'success'
                                }>
                                  {item.type === 'job' ? 'Job' : 
                                   item.type === 'resource' ? 'Resource' : 
                                   'Roadmap'}
                                </Badge>
                              </div>
                            </div>
                            <div>
                              <Button 
                                variant="outline-danger" 
                                size="sm"
                                onClick={() => handleRemoveSavedItem(item.id)}
                              >
                                <FontAwesomeIcon icon={faTrash} />
                              </Button>
                            </div>
                          </div>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  )}
                </Card.Body>
              </Card>
            </Tab.Pane>
            
            {/* Learning History Tab */}
            <Tab.Pane active={activeTab === 'history'}>
              <Card>
                <Card.Body className="p-4">
                  <h3 className="mb-4">Learning History</h3>
                  
                  {learningHistory.length === 0 ? (
                    <div className="text-center py-4">
                      <p className="mb-0">No learning history available.</p>
                    </div>
                  ) : (
                    <div className="timeline">
                      {learningHistory.map(item => (
                        <div key={item.id} className="timeline-item">
                          <div className="timeline-badge">
                            <FontAwesomeIcon icon={item.type === 'module' ? faBookmark : faCertificate} />
                          </div>
                          <div className="timeline-content">
                            <h5 className="mb-1">{item.title}</h5>
                            <div className="d-flex justify-content-between">
                              <small className="text-muted">
                                {new Date(item.date).toLocaleDateString('en-US', { 
                                  year: 'numeric', 
                                  month: 'short', 
                                  day: 'numeric' 
                                })}
                              </small>
                              <Badge bg={item.type === 'module' ? 'primary' : 'success'}>
                                {item.type === 'module' ? 'Module' : 'Project'}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Tab.Pane>
            
            {/* Certificates Tab */}
            <Tab.Pane active={activeTab === 'certificates'}>
              <Card>
                <Card.Body className="p-4">
                  <h3 className="mb-4">Certificates</h3>
                  
                  {certificates.length === 0 ? (
                    <div className="text-center py-4">
                      <p className="mb-0">You haven't earned any certificates yet.</p>
                    </div>
                  ) : (
                    <Row>
                      {certificates.map(cert => (
                        <Col md={6} key={cert.id} className="mb-4">
                          <Card className="certificate-card">
                            <Card.Body className="p-4">
                              <div className="certificate-icon mb-3">
                                <FontAwesomeIcon icon={faCertificate} size="2x" />
                              </div>
                              <h5 className="mb-2">{cert.title}</h5>
                              <p className="text-muted mb-3">Issued by {cert.issuer}</p>
                              <div className="d-flex justify-content-between align-items-center">
                                <small className="text-muted">
                                  {new Date(cert.date).toLocaleDateString('en-US', { 
                                    year: 'numeric', 
                                    month: 'short'
                                  })}
                                </small>
                                <Button variant="outline-primary" size="sm">
                                  View Certificate
                                </Button>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  )}
                </Card.Body>
              </Card>
            </Tab.Pane>
            
            {/* Account Settings Tab */}
            <Tab.Pane active={activeTab === 'settings'}>
              <Card className="mb-4">
                <Card.Body className="p-4">
                  <h3 className="mb-4">Account Settings</h3>
                  
                  <Form>
                    <h5 className="mb-3">Change Password</h5>
                    <Row className="mb-4">
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Current Password</Form.Label>
                          <Form.Control type="password" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mb-4">
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>New Password</Form.Label>
                          <Form.Control type="password" />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Confirm New Password</Form.Label>
                          <Form.Control type="password" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button variant="primary" className="mb-4">
                      Update Password
                    </Button>
                    
                    <hr className="my-4" />
                    
                    <h5 className="mb-3">Notification Settings</h5>
                    <Form.Group className="mb-3">
                      <Form.Check 
                        type="checkbox"
                        id="email-notifications"
                        label="Email Notifications"
                        defaultChecked
                      />
                      <Form.Text className="text-muted">
                        Receive emails about your account activity and roadmap updates
                      </Form.Text>
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                      <Form.Check 
                        type="checkbox"
                        id="job-alerts"
                        label="Job Alerts"
                        defaultChecked
                      />
                      <Form.Text className="text-muted">
                        Receive notifications about new job opportunities matching your profile
                      </Form.Text>
                    </Form.Group>
                    
                    <Form.Group className="mb-4">
                      <Form.Check 
                        type="checkbox"
                        id="resource-recommendations"
                        label="Resource Recommendations"
                        defaultChecked
                      />
                      <Form.Text className="text-muted">
                        Receive notifications about new learning resources
                      </Form.Text>
                    </Form.Group>
                    
                    <Button variant="primary">
                      Save Notification Settings
                    </Button>
                    
                    <hr className="my-4" />
                    
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="text-danger mb-1">Delete Account</h5>
                        <p className="text-muted mb-0">
                          Once you delete your account, there is no going back. Please be certain.
                        </p>
                      </div>
                      <Button variant="outline-danger">
                        Delete Account
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;