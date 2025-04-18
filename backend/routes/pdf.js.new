const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

/**
 * @route   GET /api/pdf/test
 * @desc    Test route to verify PDF API is working
 * @access  Public
 */
router.get('/test', (req, res) => {
  res.json({ message: 'PDF API is working!' });
});

/**
 * @route   POST /api/pdf/generate
 * @desc    Generate a PDF from roadmap data (simplified version)
 * @access  Public
 */
router.post('/generate', async (req, res) => {
  try {
    const { roadmap } = req.body;

    if (!roadmap || !roadmap.title || !roadmap.steps) {
      return res.status(400).json({ error: 'Valid roadmap data is required' });
    }

    // Since we're not using puppeteer, we'll just return success
    // In a real implementation, you would generate the PDF here
    
    return res.json({
      success: true,
      message: 'PDF generation is handled on the client side',
      roadmapTitle: roadmap.title
    });
  } catch (error) {
    console.error('Error in PDF route:', error);
    return res.status(500).json({ error: 'Failed to process PDF request' });
  }
});

module.exports = router;