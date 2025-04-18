# AI Career Roadmap Generator

This component provides an AI-powered roadmap generator that creates personalized career roadmaps based on job titles.

## Features

- **User-friendly Interface**: Simple input field to enter career goals
- **AI-Generated Roadmaps**: Uses OpenAI GPT to create personalized learning paths
- **Interactive Steps**: Each step appears as a clickable card with:
  - Step number and title
  - Description
  - Key skills to acquire
  - Estimated timeframe
  - "Mark as Done" functionality
- **Visual Design**: Colorful cards with icons and smooth animations
- **Mobile Responsive**: Works well on all device sizes
- **Export Options**: Save, share, or download roadmaps (placeholder functionality)

## How to Use

1. Navigate to the Roadmap Generator page
2. Enter your desired career goal (e.g., "Full Stack Developer", "Data Scientist")
3. Click "Generate Roadmap"
4. View your personalized roadmap with step-by-step guidance
5. Mark steps as completed as you progress
6. (Optional) Save or export your roadmap

## Technical Implementation

### Frontend
- React component with Bootstrap styling
- FontAwesome icons for visual elements
- CSS animations for smooth transitions
- Responsive design for all device sizes

### Backend
- Express.js API endpoint
- OpenAI GPT integration for roadmap generation
- JSON response format for structured data

## Setup Requirements

1. OpenAI API key in the backend `.env` file
2. Node.js and npm installed
3. Required dependencies installed

## API Response Format

```json
{
  "title": "Career Roadmap for [career goal]",
  "description": "A comprehensive guide to becoming a [career goal]",
  "steps": [
    {
      "number": 1,
      "title": "Step title",
      "description": "Step description",
      "skills": ["Skill 1", "Skill 2", "Skill 3"],
      "timeframe": "Estimated time"
    },
    ...
  ]
}
```

## Future Enhancements

- User accounts to save multiple roadmaps
- Progress tracking across sessions
- Resource recommendations for each step
- Community sharing and collaboration
- PDF export functionality
- Integration with learning platforms