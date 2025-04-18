import { faBookmark, faBuilding, faDollarSign, faExternalLinkAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import './JobCard.css';

const JobCard = ({ job }) => {
  return (
    <Card className="job-card h-100">
      <Card.Body className="p-4">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div className="company-logo" style={{ backgroundColor: job.logoBg }}>
            {job.company.charAt(0)}
          </div>
          <div>
            <Badge bg={job.type === 'Full-time' ? 'primary' : job.type === 'Part-time' ? 'info' : 'warning'} className="me-2">
              {job.type}
            </Badge>
            <Badge bg={job.remote ? 'success' : 'secondary'}>
              {job.remote ? 'Remote' : 'On-site'}
            </Badge>
          </div>
        </div>
        
        <Card.Title className="mb-2">{job.title}</Card.Title>
        
        <div className="mb-3">
          <div className="job-detail mb-1">
            <FontAwesomeIcon icon={faBuilding} className="me-2 text-muted" />
            {job.company}
          </div>
          <div className="job-detail mb-1">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-muted" />
            {job.location}
          </div>
          <div className="job-detail">
            <FontAwesomeIcon icon={faDollarSign} className="me-2 text-muted" />
            {job.salary}
          </div>
        </div>
        
        <div className="mb-3">
          {job.skills.map((skill, index) => (
            <Badge bg="light" text="dark" key={index} className="me-2 mb-2">
              {skill}
            </Badge>
          ))}
        </div>
        
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">Posted {job.postedDays} days ago</small>
          <div>
            <button className="btn btn-sm btn-link text-muted me-2">
              <FontAwesomeIcon icon={faBookmark} />
            </button>
            <a href={job.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">
              <FontAwesomeIcon icon={faExternalLinkAlt} className="me-1" />
              Apply
            </a>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default JobCard;