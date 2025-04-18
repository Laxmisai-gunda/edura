import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, InputGroup, Badge, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, faFilter, faMapMarkerAlt, faClock, 
  faBookmark, faDollarSign, faBuilding, faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { jobs } from '../../data/dashboardData';
import { internships } from '../../data/internshipsData';
import './Jobs.css';

const Jobs = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filteredInternships, setFilteredInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [savedJobs, setSavedJobs] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    location: '',
    remote: false,
    type: '',
    experience: '',
    salary: ''
  });
  
  useEffect(() => {
    // In a real app, you would fetch jobs from an API
    // For demo purposes, we'll use the imported data
    setTimeout(() => {
      setFilteredJobs(jobs);
      setFilteredInternships(internships);
      setLoading(false);
    }, 1000);
    
    // Load saved jobs from localStorage in a real app
    // For demo purposes, we'll just use an empty array
    setSavedJobs([1, 3]); // IDs of saved jobs
  }, []);
  
  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters({
      ...filters,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const applyFilters = () => {
    setLoading(true);
    
    // Filter jobs
    const jobResults = jobs.filter(job => {
      // Search filter
      if (filters.search && !job.title.toLowerCase().includes(filters.search.toLowerCase()) && 
          !job.company.toLowerCase().includes(filters.search.toLowerCase()) &&
          !job.skills.some(skill => skill.toLowerCase().includes(filters.search.toLowerCase()))) {
        return false;
      }
      
      // Location filter
      if (filters.location && !job.location.toLowerCase().includes(filters.location.toLowerCase())) {
        return false;
      }
      
      // Remote filter
      if (filters.remote && !job.remote) {
        return false;
      }
      
      // Job type filter
      if (filters.type && job.type !== filters.type) {
        return false;
      }
      
      return true;
    });
    
    // Filter internships
    const internshipResults = internships.filter(internship => {
      // Search filter
      if (filters.search && !internship.title.toLowerCase().includes(filters.search.toLowerCase()) && 
          !internship.company.toLowerCase().includes(filters.search.toLowerCase()) &&
          !internship.skills.some(skill => skill.toLowerCase().includes(filters.search.toLowerCase()))) {
        return false;
      }
      
      // Location filter
      if (filters.location && !internship.location.toLowerCase().includes(filters.location.toLowerCase())) {
        return false;
      }
      
      return true;
    });
    
    setFilteredJobs(jobResults);
    setFilteredInternships(internshipResults);
    setLoading(false);
  };
  
  const resetFilters = () => {
    setFilters({
      search: '',
      location: '',
      remote: false,
      type: '',
      experience: '',
      salary: ''
    });
    
    setFilteredJobs(jobs);
    setFilteredInternships(internships);
  };
  
  const toggleSaveJob = (jobId) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter(id => id !== jobId));
    } else {
      setSavedJobs([...savedJobs, jobId]);
    }
  };
  
  return (
    <Container className="py-5">
      <h1 className="mb-4">Job Opportunities</h1>
      
      {/* Search and Filter Section */}
      <Card className="mb-4">
        <Card.Body className="p-4">
          <Row>
            <Col lg={6} className="mb-3 mb-lg-0">
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Search for jobs, companies, or skills"
                  name="search"
                  value={filters.search}
                  onChange={handleFilterChange}
                />
              </InputGroup>
            </Col>
            <Col lg={4} className="mb-3 mb-lg-0">
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Location"
                  name="location"
                  value={filters.location}
                  onChange={handleFilterChange}
                />
              </InputGroup>
            </Col>
            <Col lg={2}>
              <Button variant="primary" className="w-100" onClick={applyFilters}>
                <FontAwesomeIcon icon={faFilter} className="me-2" />
                Filter
              </Button>
            </Col>
          </Row>
          
          <div className="mt-3">
            <Form.Check
              type="checkbox"
              id="remote-check"
              label="Remote only"
              name="remote"
              checked={filters.remote}
              onChange={handleFilterChange}
              className="d-inline-block me-3"
            />
            
            <Form.Select 
              name="type"
              value={filters.type}
              onChange={handleFilterChange}
              className="d-inline-block me-3"
              style={{ width: 'auto' }}
            >
              <option value="">Job Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </Form.Select>
            
            <Button variant="link" className="p-0" onClick={resetFilters}>
              Reset Filters
            </Button>
          </div>
        </Card.Body>
      </Card>
      
      {/* Tabs */}
      <Nav variant="tabs" className="mb-4">
        <Nav.Item>
          <Nav.Link 
            active={activeTab === 'jobs'} 
            onClick={() => setActiveTab('jobs')}
            className="px-4"
          >
            Jobs
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link 
            active={activeTab === 'internships'} 
            onClick={() => setActiveTab('internships')}
            className="px-4"
          >
            Internships
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link 
            active={activeTab === 'saved'} 
            onClick={() => setActiveTab('saved')}
            className="px-4"
          >
            Saved
          </Nav.Link>
        </Nav.Item>
      </Nav>
      
      {/* Jobs List */}
      {activeTab === 'jobs' && (
        <>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="mb-0">
              {loading ? 'Loading jobs...' : `${filteredJobs.length} Jobs Found`}
            </h4>
            <Form.Select className="w-auto">
              <option>Most Relevant</option>
              <option>Newest</option>
              <option>Highest Salary</option>
            </Form.Select>
          </div>
          
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Loading job listings...</p>
            </div>
          ) : filteredJobs.length === 0 ? (
            <Card className="text-center py-5">
              <Card.Body>
                <h4>No jobs found</h4>
                <p className="text-muted">Try adjusting your search filters</p>
              </Card.Body>
            </Card>
          ) : (
            <Row>
              {filteredJobs.map(job => (
                <Col lg={6} key={job.id} className="mb-4">
                  <Card className="job-listing-card h-100">
                    <Card.Body className="p-4">
                      {job.featured && (
                        <Badge bg="warning" text="dark" className="position-absolute top-0 end-0 m-3">
                          Featured
                        </Badge>
                      )}
                      <div className="d-flex mb-3">
                        <div className="company-logo me-3" style={{ backgroundColor: job.logoBg }}>
                          {job.company.charAt(0)}
                        </div>
                        <div>
                          <Link to={`/jobs/${job.id}`} className="text-decoration-none">
                            <h5 className="mb-1">{job.title}</h5>
                          </Link>
                          <p className="company-name mb-0">{job.company}</p>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <div className="job-detail">
                          <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                          {job.location} {job.remote && <Badge bg="info" className="ms-2">Remote</Badge>}
                        </div>
                        <div className="job-detail">
                          <FontAwesomeIcon icon={faClock} className="me-2" />
                          {job.type}
                        </div>
                        <div className="job-detail">
                          <FontAwesomeIcon icon={faDollarSign} className="me-2" />
                          {job.salary}
                        </div>
                      </div>
                      
                      <p className="job-description mb-3">
                        {job.description}
                      </p>
                      
                      <div className="mb-3">
                        {job.skills.map((skill, index) => (
                          <span key={index} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="posted-date">
                          Posted {job.postedDays} {job.postedDays === 1 ? 'day' : 'days'} ago
                        </span>
                        <div>
                          <Button 
                            variant={savedJobs.includes(job.id) ? "warning" : "outline-secondary"} 
                            className="me-2"
                            onClick={() => toggleSaveJob(job.id)}
                          >
                            <FontAwesomeIcon icon={faBookmark} />
                          </Button>
                          <Link to={`/jobs/${job.id}`} className="btn btn-primary">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </>
      )}
      
      {/* Internships List */}
      {activeTab === 'internships' && (
        <>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="mb-0">
              {loading ? 'Loading internships...' : `${filteredInternships.length} Internships Found`}
            </h4>
            <Form.Select className="w-auto">
              <option>Most Relevant</option>
              <option>Newest</option>
            </Form.Select>
          </div>
          
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Loading internship listings...</p>
            </div>
          ) : filteredInternships.length === 0 ? (
            <Card className="text-center py-5">
              <Card.Body>
                <h4>No internships found</h4>
                <p className="text-muted">Try adjusting your search filters</p>
              </Card.Body>
            </Card>
          ) : (
            <Row>
              {filteredInternships.map(internship => (
                <Col lg={6} key={internship.id} className="mb-4">
                  <Card className="job-listing-card h-100">
                    <Card.Body className="p-4">
                      <div className="d-flex mb-3">
                        <div className="company-logo me-3" style={{ backgroundColor: internship.logoBg }}>
                          {internship.company.charAt(0)}
                        </div>
                        <div>
                          <h5 className="mb-1">{internship.title}</h5>
                          <p className="company-name mb-0">{internship.company}</p>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <div className="job-detail">
                          <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                          {internship.location}
                        </div>
                        <div className="job-detail">
                          <FontAwesomeIcon icon={faClock} className="me-2" />
                          {internship.duration}
                        </div>
                        <div className="job-detail">
                          <FontAwesomeIcon icon={faDollarSign} className="me-2" />
                          {internship.paid ? internship.stipend : 'Unpaid'}
                        </div>
                      </div>
                      
                      <p className="job-description mb-3">
                        {internship.description}
                      </p>
                      
                      <div className="mb-3">
                        {internship.skills.map((skill, index) => (
                          <span key={index} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="posted-date">
                          Posted {internship.postedDays} {internship.postedDays === 1 ? 'day' : 'days'} ago
                        </span>
                        <div>
                          <Button 
                            variant="outline-secondary" 
                            className="me-2"
                            onClick={() => toggleSaveJob(internship.id + 1000)} // Adding 1000 to avoid ID conflicts with jobs
                          >
                            <FontAwesomeIcon icon={faBookmark} />
                          </Button>
                          <a href={internship.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" />
                            Apply
                          </a>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </>
      )}
      
      {/* Saved Jobs */}
      {activeTab === 'saved' && (
        <>
          <h4 className="mb-4">Saved Jobs</h4>
          
          {savedJobs.length === 0 ? (
            <Card className="text-center py-5">
              <Card.Body>
                <h4>No saved jobs</h4>
                <p className="text-muted">Jobs you save will appear here</p>
              </Card.Body>
            </Card>
          ) : (
            <Row>
              {jobs.filter(job => savedJobs.includes(job.id)).map(job => (
                <Col lg={6} key={job.id} className="mb-4">
                  <Card className="job-listing-card h-100">
                    <Card.Body className="p-4">
                      <div className="d-flex mb-3">
                        <div className="company-logo me-3" style={{ backgroundColor: job.logoBg }}>
                          {job.company.charAt(0)}
                        </div>
                        <div>
                          <Link to={`/jobs/${job.id}`} className="text-decoration-none">
                            <h5 className="mb-1">{job.title}</h5>
                          </Link>
                          <p className="company-name mb-0">{job.company}</p>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <div className="job-detail">
                          <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                          {job.location} {job.remote && <Badge bg="info" className="ms-2">Remote</Badge>}
                        </div>
                        <div className="job-detail">
                          <FontAwesomeIcon icon={faClock} className="me-2" />
                          {job.type}
                        </div>
                        <div className="job-detail">
                          <FontAwesomeIcon icon={faDollarSign} className="me-2" />
                          {job.salary}
                        </div>
                      </div>
                      
                      <p className="job-description mb-3">
                        {job.description}
                      </p>
                      
                      <div className="mb-3">
                        {job.skills.map((skill, index) => (
                          <span key={index} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="posted-date">
                          Posted {job.postedDays} {job.postedDays === 1 ? 'day' : 'days'} ago
                        </span>
                        <div>
                          <Button 
                            variant="warning" 
                            className="me-2"
                            onClick={() => toggleSaveJob(job.id)}
                          >
                            <FontAwesomeIcon icon={faBookmark} />
                          </Button>
                          <Link to={`/jobs/${job.id}`} className="btn btn-primary">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </>
      )}
      
      {/* Pagination */}
      {(activeTab === 'jobs' && filteredJobs.length > 0) || 
       (activeTab === 'internships' && filteredInternships.length > 0) || 
       (activeTab === 'saved' && savedJobs.length > 0) ? (
        <div className="d-flex justify-content-center mt-4">
          <Button variant="outline-primary" className="me-2">Previous</Button>
          <Button variant="primary" className="me-2">1</Button>
          <Button variant="outline-primary" className="me-2">2</Button>
          <Button variant="outline-primary" className="me-2">3</Button>
          <Button variant="outline-primary">Next</Button>
        </div>
      ) : null}
    </Container>
  );
};

export default Jobs;