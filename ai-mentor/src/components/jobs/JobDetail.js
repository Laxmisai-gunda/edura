import {
    faArrowLeft,
    faBookmark,
    faBuilding,
    faCalendarAlt,
    faClock, faDollarSign,
    faExternalLinkAlt,
    faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { jobs } from '../../data/dashboardData';
import './Jobs.css';

const JobDetail = () => {
  const { id } = useParams();
  const jobId = parseInt(id);
  
  // Find the job with the matching ID
  const job = jobs.find(job => job.id === jobId);
  
  if (!job) {
    return (
      <Container className="py-5">
        <Card className="text-center py-5">
          <Card.Body>
            <h3>Job Not Found</h3>
            <p className="text-muted">The job you're looking for doesn't exist or has been removed.</p>
            <Link to="/jobs" className="btn btn-primary mt-3">
              <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
              Back to Jobs
            </Link>
          </Card.Body>
        </Card>
      </Container>
    );
  }
  
  return (
    <Container className="py-5">
      <Link to="/jobs" className="btn btn-outline-primary mb-4">
        <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
        Back to Jobs
      </Link>
      
      <Card className="job-detail-card mb-4">
        <Card.Body className="p-4">
          <Row>
            <Col md={8}>
              <div className="d-flex">
                <div className="company-logo me-3" style={{ backgroundColor: job.logoBg }}>
                  {job.company.charAt(0)}
                </div>
                <div>
                  <h2 className="mb-1">{job.title}</h2>
                  <h5 className="company-name mb-3">{job.company}</h5>
                  
                  <div className="d-flex flex-wrap mb-4">
                    <div className="job-detail me-4">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                      {job.location} {job.remote && <Badge bg="info" className="ms-2">Remote</Badge>}
                    </div>
                    <div className="job-detail me-4">
                      <FontAwesomeIcon icon={faClock} className="me-2" />
                      {job.type}
                    </div>
                    <div className="job-detail me-4">
                      <FontAwesomeIcon icon={faDollarSign} className="me-2" />
                      {job.salary}
                    </div>
                    <div className="job-detail">
                      <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                      Posted {job.postedDays} {job.postedDays === 1 ? 'day' : 'days'} ago
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} className="d-flex justify-content-end align-items-start">
              <div>
                <Button variant="outline-secondary" className="me-2">
                  <FontAwesomeIcon icon={faBookmark} className="me-2" />
                  Save Job
                </Button>
                <a href={job.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" />
                  Apply Now
                </a>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      
      <Row>
        <Col lg={8}>
          <Card className="mb-4">
            <Card.Body className="p-4">
              <h4 className="mb-4">Job Description</h4>
              <p className="job-description">{job.description}</p>
              
              <h4 className="mt-5 mb-4">Requirements</h4>
              <ul className="requirements-list">
                {job.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
              
              {job.benefits && (
                <>
                  <h4 className="mt-5 mb-4">Benefits</h4>
                  <ul className="benefits-list">
                    {job.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </>
              )}
              
              <h4 className="mt-5 mb-4">Skills</h4>
              <div className="d-flex flex-wrap">
                {job.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="mt-5">
                <a href={job.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" />
                  Apply for this Position
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={4}>
          <Card className="mb-4">
            <Card.Body className="p-4">
              <h4 className="mb-4">Company Information</h4>
              <div className="d-flex align-items-center mb-3">
                <div className="company-logo me-3" style={{ backgroundColor: job.logoBg }}>
                  {job.company.charAt(0)}
                </div>
                <h5 className="mb-0">{job.company}</h5>
              </div>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam tincidunt, nisi nisl aliquam nisi, eget aliquam nisi nisl sit amet nunc.
              </p>
              <Button variant="outline-primary" className="w-100">
                <FontAwesomeIcon icon={faBuilding} className="me-2" />
                View Company Profile
              </Button>
            </Card.Body>
          </Card>
          
          <Card>
            <Card.Body className="p-4">
              <h4 className="mb-4">Similar Jobs</h4>
              {jobs
                .filter(j => j.id !== job.id && j.skills.some(skill => job.skills.includes(skill)))
                .slice(0, 3)
                .map(similarJob => (
                  <div key={similarJob.id} className="similar-job mb-3">
                    <Link to={`/jobs/${similarJob.id}`} className="text-decoration-none">
                      <h5 className="mb-1">{similarJob.title}</h5>
                      <p className="company-name mb-1">{similarJob.company}</p>
                      <div className="d-flex mb-2">
                        <span className="job-detail me-3">
                          <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" />
                          {similarJob.location}
                        </span>
                        <span className="job-detail">
                          <FontAwesomeIcon icon={faDollarSign} className="me-1" />
                          {similarJob.salary}
                        </span>
                      </div>
                    </Link>
                    <hr />
                  </div>
                ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default JobDetail;