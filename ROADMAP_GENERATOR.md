# AI Career Roadmap Generator

## Overview

The AI Career Roadmap Generator is a feature that allows users to generate personalized career roadmaps based on their desired job titles. It uses the OpenAI API to create step-by-step learning paths with detailed information about each stage of the career journey.

## Features Implemented

1. **User Interface**
   - Clean, modern design with a simple input field
   - "Generate Roadmap" button to trigger the AI
   - Visually appealing step-wise block format
   - Each step displayed as a clickable card with:
     - Step number and icon
     - Title of the step
     - Description
     - Key skills to acquire
     - Estimated timeframe
     - "Mark as Done" functionality

2. **Backend Integration**
   - OpenAI GPT API integration
   - Structured prompt to generate consistent roadmaps
   - JSON response parsing and error handling
   - Environment variable configuration for API key

3. **Interactive Elements**
   - Step completion tracking
   - Animated card transitions
   - Responsive design for all device sizes
   - Save, share, and download placeholders

4. **Navigation**
   - Added to main navigation with highlight styling
   - Promotional card on the dashboard
   - Protected route requiring authentication

## Technical Implementation

### Backend
- Created a new Express route for AI functionality
- Implemented OpenAI API integration
- Structured the prompt to generate consistent JSON responses
- Added error handling and response validation

### Frontend
- Built a new React component for the roadmap generator
- Created responsive CSS with animations
- Implemented step completion functionality
- Added navigation links and promotional elements

## How to Use

1. **Setup**
   - Add your OpenAI API key to the backend `.env` file
   - Install dependencies with `npm install`
   - Start the backend server with `npm run dev`
   - Start the frontend with `npm start`

2. **Generate a Roadmap**
   - Navigate to the Roadmap Generator page
   - Enter your desired career goal (e.g., "Full Stack Developer")
   - Click "Generate Roadmap"
   - View your personalized roadmap
   - Mark steps as completed as you progress

## Future Enhancements

- User accounts to save multiple roadmaps
- Progress tracking across sessions
- Resource recommendations for each step
- Community sharing and collaboration
- PDF export functionality
- Integration with learning platforms

## Screenshots

(Add screenshots of the application here)

## Credits

- OpenAI GPT for roadmap generation
- React and Bootstrap for frontend
- Express.js for backend
- FontAwesome for icons