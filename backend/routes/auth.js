const express = require('express');
const router = express.Router();

/**
 * @route   GET /api/auth/test
 * @desc    Test route to verify auth API is working
 * @access  Public
 */
router.get('/test', (req, res) => {
  res.json({ message: 'Auth API is working!' });
});

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user
 * @access  Public
 */
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    // For now, just return success (no actual DB operations)
    return res.status(201).json({ 
      message: 'User registered successfully',
      user: {
        id: 'temp-user-id',
        name,
        email
      }
    });
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ error: 'Server error' });
  }
});

/**
 * @route   POST /api/auth/login
 * @desc    Login user and return token
 * @access  Public
 */
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ error: 'Please provide email and password' });
    }

    // For now, just return success with mock token (no actual authentication)
    return res.json({
      message: 'Login successful',
      token: 'mock-jwt-token',
      user: {
        id: 'temp-user-id',
        name: 'Test User',
        email
      }
    });
  } catch (error) {
    console.error('Error logging in:', error);
    return res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;