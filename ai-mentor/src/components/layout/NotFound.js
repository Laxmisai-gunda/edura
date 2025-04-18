import { faExclamationTriangle, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <Container className="not-found-container text-center py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="error-code">404</div>
          <FontAwesomeIcon icon={faExclamationTriangle} size="4x" className="text-warning mb-4" />
          <h1 className="mb-4">Page Not Found</h1>
          <p className="lead mb-5">
            Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="d-grid gap-2 d-md-block">
            <Link to="/">
              <Button variant="primary" size="lg" className="me-md-2">
                <FontAwesomeIcon icon={faHome} className="me-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;