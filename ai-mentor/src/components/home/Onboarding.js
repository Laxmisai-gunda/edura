import {
    faArrowLeft,
    faArrowRight,
    faChartBar,
    faCheck,
    faDatabase,
    faLaptopCode,
    faMobileAlt,
    faPalette,
    faRobot,
    faServer, faUsers
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Button, Card, Col, Container, Form, ProgressBar, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import './Onboarding.css';

const Onboarding = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    interests: [],
    skillLevel: '',
    goals: [],
    learningPreference: '',
    timeCommitment: '',
    jobStatus: ''
  });
  
  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;
  
  const handleInterestChange = (interest) => {
    const updatedInterests = [...formData.interests];
    
    if (updatedInterests.includes(interest)) {
      // Remove interest if already selected
      const index = updatedInterests.indexOf(interest);
      updatedInterests.splice(index, 1);
    } else {
      // Add interest if not already selected
      updatedInterests.push(interest);
    }
    
    setFormData({
      ...formData,
      interests: updatedInterests
    });
  };
  
  const handleGoalChange = (goal) => {
    const updatedGoals = [...formData.goals];
    
    if (updatedGoals.includes(goal)) {
      // Remove goal if already selected
      const index = updatedGoals.indexOf(goal);
      updatedGoals.splice(index, 1);
    } else {
      // Add goal if not already selected
      updatedGoals.push(goal);
    }
    
    setFormData({
      ...formData,
      goals: updatedGoals
    });
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Submit form data
      handleSubmit();
    }
  };
  
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  const handleSubmit = () => {
    // In a real app, you would send this data to your backend
    console.log('Form data submitted:', formData);
    
    // Navigate to dashboard
    navigate('/dashboard');
  };
  
  const interests = [
    { id: 'webdev', name: 'Web Development', icon: faLaptopCode, color: '#4776E6' },
    { id: 'ai', name: 'Artificial Intelligence', icon: faRobot, color: '#8E54E9' },
    { id: 'design', name: 'UI/UX Design', icon: faPalette, color: '#FF5858' },
    { id: 'data', name: 'Data Science', icon: faChartBar, color: '#36D1DC' },
    { id: 'mobile', name: 'Mobile Development', icon: faMobileAlt, color: '#5CDB95' },
    { id: 'cloud', name: 'Cloud Computing', icon: faDatabase, color: '#FF8C00' },
    { id: 'devops', name: 'DevOps', icon: faServer, color: '#FF5E62' },
    { id: 'marketing', name: 'Digital Marketing', icon: faUsers, color: '#4776E6' }
  ];
  
  const goals = [
    { id: 'job', name: 'Find a Job' },
    { id: 'skills', name: 'Learn New Skills' },
    { id: 'career', name: 'Change Career' },
    { id: 'startup', name: 'Build a Startup' },
    { id: 'freelance', name: 'Start Freelancing' },
    { id: 'promotion', name: 'Get a Promotion' }
  ];
  
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="onboarding-card">
            <Card.Body className="p-4 p-md-5">
              <div className="text-center mb-4">
                <h2 className="onboarding-title">Let's Personalize Your Experience</h2>
                <p className="text-muted">
                  {currentUser?.name ? `Hi ${currentUser.name}! ` : ''}
                  Tell us about yourself so we can create your personalized roadmap
                </p>
              </div>
              
              <ProgressBar 
                now={progress} 
                variant="primary" 
                className="mb-4" 
                style={{ height: '8px' }}
              />
              
              <div className="step-content">
                {step === 1 && (
                  <>
                    <h3 className="step-title mb-4">What are you interested in?</h3>
                    <p className="text-muted mb-4">Select all that apply. You can change these later.</p>
                    
                    <Row className="mb-4">
                      {interests.map((interest) => (
                        <Col xs={6} md={4} lg={3} key={interest.id} className="mb-3">
                          <div 
                            className={`interest-card ${formData.interests.includes(interest.id) ? 'selected' : ''}`}
                            onClick={() => handleInterestChange(interest.id)}
                          >
                            <div className="interest-icon" style={{ backgroundColor: interest.color }}>
                              <FontAwesomeIcon icon={interest.icon} />
                              {formData.interests.includes(interest.id) && (
                                <div className="selected-check">
                                  <FontAwesomeIcon icon={faCheck} />
                                </div>
                              )}
                            </div>
                            <div className="interest-name">{interest.name}</div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </>
                )}
                
                {step === 2 && (
                  <>
                    <h3 className="step-title mb-4">What's your current skill level?</h3>
                    <p className="text-muted mb-4">This helps us tailor content to your experience level.</p>
                    
                    <Form.Group className="mb-4">
                      <div className="skill-level-options">
                        <div 
                          className={`skill-level-card ${formData.skillLevel === 'beginner' ? 'selected' : ''}`}
                          onClick={() => setFormData({...formData, skillLevel: 'beginner'})}
                        >
                          <h4>Beginner</h4>
                          <p>I'm just starting out and have little to no experience</p>
                        </div>
                        
                        <div 
                          className={`skill-level-card ${formData.skillLevel === 'intermediate' ? 'selected' : ''}`}
                          onClick={() => setFormData({...formData, skillLevel: 'intermediate'})}
                        >
                          <h4>Intermediate</h4>
                          <p>I have some experience and understand the basics</p>
                        </div>
                        
                        <div 
                          className={`skill-level-card ${formData.skillLevel === 'advanced' ? 'selected' : ''}`}
                          onClick={() => setFormData({...formData, skillLevel: 'advanced'})}
                        >
                          <h4>Advanced</h4>
                          <p>I have significant experience and looking to specialize further</p>
                        </div>
                      </div>
                    </Form.Group>
                  </>
                )}
                
                {step === 3 && (
                  <>
                    <h3 className="step-title mb-4">What are your goals?</h3>
                    <p className="text-muted mb-4">Select all that apply. This helps us focus your roadmap.</p>
                    
                    <Row className="mb-4">
                      {goals.map((goal) => (
                        <Col md={6} key={goal.id} className="mb-3">
                          <div 
                            className={`goal-card ${formData.goals.includes(goal.id) ? 'selected' : ''}`}
                            onClick={() => handleGoalChange(goal.id)}
                          >
                            <div className="d-flex align-items-center">
                              <div className="goal-checkbox">
                                {formData.goals.includes(goal.id) && <FontAwesomeIcon icon={faCheck} />}
                              </div>
                              <div className="goal-name">{goal.name}</div>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </>
                )}
                
                {step === 4 && (
                  <>
                    <h3 className="step-title mb-4">Almost there! A few more details...</h3>
                    <p className="text-muted mb-4">This information helps us create a realistic roadmap for you.</p>
                    
                    <Form.Group className="mb-4">
                      <Form.Label>How do you prefer to learn?</Form.Label>
                      <Form.Select 
                        name="learningPreference"
                        value={formData.learningPreference}
                        onChange={handleInputChange}
                        className="mb-3"
                      >
                        <option value="">Select your preference</option>
                        <option value="video">Video Courses</option>
                        <option value="reading">Reading (Books/Articles)</option>
                        <option value="interactive">Interactive Tutorials</option>
                        <option value="project">Project-Based Learning</option>
                        <option value="mixed">Mix of Everything</option>
                      </Form.Select>
                    </Form.Group>
                    
                    <Form.Group className="mb-4">
                      <Form.Label>How much time can you commit weekly?</Form.Label>
                      <Form.Select 
                        name="timeCommitment"
                        value={formData.timeCommitment}
                        onChange={handleInputChange}
                        className="mb-3"
                      >
                        <option value="">Select time commitment</option>
                        <option value="5">Less than 5 hours</option>
                        <option value="10">5-10 hours</option>
                        <option value="20">10-20 hours</option>
                        <option value="30">20+ hours</option>
                      </Form.Select>
                    </Form.Group>
                    
                    <Form.Group className="mb-4">
                      <Form.Label>What's your current job status?</Form.Label>
                      <Form.Select 
                        name="jobStatus"
                        value={formData.jobStatus}
                        onChange={handleInputChange}
                      >
                        <option value="">Select your status</option>
                        <option value="student">Student</option>
                        <option value="employed">Employed (Non-Tech)</option>
                        <option value="tech">Employed (Tech Industry)</option>
                        <option value="unemployed">Unemployed</option>
                        <option value="career">Career Changer</option>
                      </Form.Select>
                    </Form.Group>
                  </>
                )}
              </div>
              
              <div className="d-flex justify-content-between mt-4">
                <Button 
                  variant="outline-secondary" 
                  onClick={handleBack}
                  disabled={step === 1}
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                  Back
                </Button>
                
                <Button 
                  variant="primary" 
                  onClick={handleNext}
                  disabled={
                    (step === 1 && formData.interests.length === 0) ||
                    (step === 2 && !formData.skillLevel) ||
                    (step === 3 && formData.goals.length === 0) ||
                    (step === 4 && (!formData.learningPreference || !formData.timeCommitment || !formData.jobStatus))
                  }
                >
                  {step < totalSteps ? (
                    <>
                      Next
                      <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                    </>
                  ) : (
                    'Complete Setup'
                  )}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Onboarding;