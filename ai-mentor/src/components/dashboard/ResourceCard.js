import { faBookmark, faExternalLinkAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import './ResourceCard.css';

const ResourceCard = ({ resource }) => {
  // Generate star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FontAwesomeIcon 
          key={i} 
          icon={faStar} 
          className={i < rating ? 'text-warning' : 'text-muted'}
        />
      );
    }
    return stars;
  };
  
  return (
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
        </div>
        
        <div className="mb-3">
          <div className="resource-rating">
            {renderStars(resource.rating)}
            <span className="ms-2">({resource.reviews})</span>
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
          {resource.isPaid && (
            <span className="resource-price">${resource.price}</span>
          )}
          {!resource.isPaid && (
            <span></span>
          )}
          <div>
            <button className="btn btn-sm btn-link text-muted me-2">
              <FontAwesomeIcon icon={faBookmark} />
            </button>
            <a href={resource.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">
              <FontAwesomeIcon icon={faExternalLinkAlt} className="me-1" />
              View
            </a>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ResourceCard;