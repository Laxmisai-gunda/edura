import React, { useState, useRef } from 'react';
import { Alert, Badge, Button, Card, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowRight, 
  faBookmark, 
  faCheckCircle, 
  faClock, 
  faDownload, 
  faGraduationCap, 
  faShare, 
  faSpinner 
} from '@fortawesome/free-solid-svg-icons';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './RoadmapGenerator.css';

const RoadmapGenerator = () => {
  const [careerGoal, setCareerGoal] = useState('');
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [pdfLoading, setPdfLoading] = useState(false);
  const roadmapRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!careerGoal.trim()) {
      setError('Please enter a career goal');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('http://localhost:5000/api/ai/generate-roadmap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ careerGoal }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate roadmap');
      }
      
      setRoadmap(data);
      setCompletedSteps([]);
    } catch (err) {
      console.error('Error generating roadmap:', err);
      setError(err.message || 'Failed to generate roadmap. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const toggleStepCompletion = (stepNumber) => {
    setCompletedSteps(prev => {
      if (prev.includes(stepNumber)) {
        return prev.filter(step => step !== stepNumber);
      } else {
        return [...prev, stepNumber];
      }
    });
  };

  const exportAsPDF = async () => {
    if (!roadmap || !roadmapRef.current) return;
    
    try {
      setPdfLoading(true);
      
      // Notify user that PDF generation has started
      console.log('Generating PDF...');
      
      try {
        // Try client-side PDF generation first
        // Create a new jsPDF instance
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        
        // Set document properties
        pdf.setProperties({
          title: roadmap.title,
          subject: roadmap.description,
          creator: 'Edura AI Career Roadmap Generator',
          author: 'Edura'
        });
        
        // Add title page
        pdf.setFontSize(24);
        pdf.setTextColor(33, 37, 41);
        pdf.text(roadmap.title, pdfWidth / 2, 30, { align: 'center' });
        
        pdf.setFontSize(14);
        pdf.setTextColor(73, 80, 87);
        const descriptionLines = pdf.splitTextToSize(roadmap.description, pdfWidth - 40);
        pdf.text(descriptionLines, pdfWidth / 2, 45, { align: 'center' });
        
        pdf.setFontSize(12);
        pdf.setTextColor(108, 117, 125);
        pdf.text(`Generated on ${new Date().toLocaleDateString()}`, pdfWidth / 2, 65, { align: 'center' });
        
        // Add a separator line
        pdf.setDrawColor(222, 226, 230);
        pdf.line(20, 75, pdfWidth - 20, 75);
        
        // Capture the roadmap content as an image
        const roadmapElement = roadmapRef.current;
        const canvas = await html2canvas(roadmapElement, {
          scale: 2, // Higher scale for better quality
          useCORS: true,
          logging: false,
          allowTaint: true
        });
        
        // Convert canvas to image
        const imgData = canvas.toDataURL('image/png');
        
        // Calculate the aspect ratio to fit the image within the PDF
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, (pdfHeight - 90) / imgHeight);
        const imgWidthPdf = imgWidth * ratio - 40; // Adjust for margins
        const imgHeightPdf = imgHeight * ratio;
        
        // Add a new page for the roadmap content
        pdf.addPage();
        
        // Add the roadmap image to the PDF
        pdf.addImage(
          imgData, 
          'PNG', 
          20, // x position (left margin)
          20, // y position (top margin)
          imgWidthPdf, 
          imgHeightPdf
        );
        
        // Save the PDF
        pdf.save(`${roadmap.title.replace(/\s+/g, '_')}_Roadmap.pdf`);
        
        console.log('PDF generated successfully on client side!');
      } catch (clientError) {
        console.error('Client-side PDF generation failed, trying server-side:', clientError);
        
        // If client-side fails, try server-side
        try {
          const response = await fetch('http://localhost:5000/api/pdf/generate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ roadmap }),
          });
          
          if (!response.ok) {
            throw new Error('Server-side PDF generation failed');
          }
          
          const data = await response.json();
          console.log('Server response:', data);
          
          if (data.success) {
            alert(`PDF generation successful! In a production environment, the PDF would be downloaded automatically.`);
          } else {
            throw new Error('Server returned error');
          }
        } catch (serverError) {
          console.error('Server-side PDF generation failed:', serverError);
          throw new Error('Both client and server PDF generation failed');
        }
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setPdfLoading(false);
    }
  };

  const shareRoadmap = () => {
    // This would be implemented with a sharing API
    alert('Share functionality would be implemented here');
  };

  const saveRoadmap = () => {
    // This would save the roadmap to the user's account
    alert('Save functionality would be implemented here');
  };

  // Function to get an icon for each step
  const getStepIcon = (stepNumber) => {
    const icons = [
      faGraduationCap, // Learning
      faArrowRight,    // Progress
      faBookmark,      // Bookmark
      faClock,         // Time
      faCheckCircle,   // Complete
      faShare,         // Share
      faDownload,      // Download
      faSpinner        // Loading
    ];
    
    return icons[stepNumber % icons.length];
  };

  return (
    <Container className="py-5">
      <Row className="mb-5">
        <Col lg={8} className="mx-auto text-center">
          <h1 className="display-4 mb-3">AI Career Roadmap Generator</h1>
          <p className="lead mb-4">
            Enter your desired career goal, and our AI will create a personalized step-by-step roadmap to help you achieve it.
          </p>
          
          <Form onSubmit={handleSubmit} className="roadmap-form mb-4">
            <div className="d-flex">
              <Form.Control
                type="text"
                placeholder="Enter Your Career Goal (e.g., Full Stack Developer, Data Scientist)"
                value={careerGoal}
                onChange={(e) => setCareerGoal(e.target.value)}
                className="me-2 py-3"
              />
              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                disabled={loading}
                className="generate-btn"
              >
                {loading ? (
                  <>
                    <Spinner animation="border" size="sm" className="me-2" />
                    Generating...
                  </>
                ) : (
                  'Generate Roadmap'
                )}
              </Button>
            </div>
          </Form>
          
          {error && (
            <Alert variant="danger" className="mb-4">
              {error}
            </Alert>
          )}
        </Col>
      </Row>
      
      {roadmap && (
        <div className="roadmap-result" ref={roadmapRef}>
          <Row className="mb-4">
            <Col>
              <Card className="roadmap-header">
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between align-items-start flex-wrap">
                    <div>
                      <h2 className="mb-2">{roadmap.title}</h2>
                      <p className="lead mb-3">{roadmap.description}</p>
                      <Badge bg="primary" className="me-2">
                        {completedSteps.length} of {roadmap.steps.length} steps completed
                      </Badge>
                    </div>
                    <div className="d-flex mt-3 mt-md-0">
                      <Button variant="outline-secondary" className="me-2" onClick={saveRoadmap}>
                        <FontAwesomeIcon icon={faBookmark} className="me-2" />
                        Save
                      </Button>
                      <Button variant="outline-secondary" className="me-2" onClick={shareRoadmap}>
                        <FontAwesomeIcon icon={faShare} className="me-2" />
                        Share
                      </Button>
                      <Button 
                        variant="outline-primary" 
                        onClick={exportAsPDF}
                        disabled={pdfLoading}
                      >
                        {pdfLoading ? (
                          <>
                            <Spinner animation="border" size="sm" className="me-2" />
                            Generating PDF...
                          </>
                        ) : (
                          <>
                            <FontAwesomeIcon icon={faDownload} className="me-2" />
                            Download PDF
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <Row>
            {roadmap.steps.map((step) => (
              <Col md={6} lg={4} key={step.number} className="mb-4">
                <Card 
                  className={`roadmap-step-card h-100 ${completedSteps.includes(step.number) ? 'completed' : ''}`}
                >
                  <Card.Body className="p-4">
                    <div className="step-number-icon">
                      <FontAwesomeIcon icon={getStepIcon(step.number - 1)} />
                      <span>{step.number}</span>
                    </div>
                    
                    <h3 className="step-title mb-3">{step.title}</h3>
                    <p className="step-description mb-4">{step.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="mb-2">Key Skills:</h5>
                      <div className="skills-container">
                        {step.skills.map((skill, index) => (
                          <Badge bg="info" key={index} className="me-2 mb-2">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <Badge bg="secondary" className="timeframe">
                        <FontAwesomeIcon icon={faClock} className="me-1" />
                        {step.timeframe}
                      </Badge>
                      
                      <Button 
                        variant={completedSteps.includes(step.number) ? "success" : "outline-primary"} 
                        size="sm"
                        onClick={() => toggleStepCompletion(step.number)}
                      >
                        {completedSteps.includes(step.number) ? (
                          <>
                            <FontAwesomeIcon icon={faCheckCircle} className="me-1" />
                            Completed
                          </>
                        ) : (
                          'Mark as Done'
                        )}
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </Container>
  );
};

export default RoadmapGenerator;