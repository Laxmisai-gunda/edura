import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Badge, Card, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './RoadmapCard.css';

const RoadmapCard = ({ roadmap }) => {
  return (
    <Card className="roadmap-card h-100">
      <Card.Body className="p-4">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div>
            <div className="roadmap-icon" style={{ backgroundColor: roadmap.iconBg }}>
              <FontAwesomeIcon icon={roadmap.icon} />
            </div>
          </div>
          <Badge bg={roadmap.level === 'Beginner' ? 'success' : roadmap.level === 'Intermediate' ? 'warning' : 'danger'}>
            {roadmap.level}
          </Badge>
        </div>
        
        <Card.Title className="mb-3">{roadmap.title}</Card.Title>
        <Card.Text className="text-muted mb-4">
          {roadmap.description}
        </Card.Text>
        
        <div className="mb-3">
          <div className="d-flex justify-content-between mb-2">
            <span className="progress-label">Progress</span>
            <span className="progress-percentage">{roadmap.progress}%</span>
          </div>
          <ProgressBar now={roadmap.progress} variant="primary" className="custom-progress" />
        </div>
        
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <small className="text-muted">Next: {roadmap.nextMilestone}</small>
          </div>
          <Link to={`/roadmap/${roadmap.id}`} className="btn btn-sm btn-outline-primary">
            Continue
            <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RoadmapCard;