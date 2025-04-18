# Edura - AI Career Roadmap Generator

Edura is an AI-powered platform that helps users generate personalized career roadmaps based on their goals and interests. The application uses Google's Gemini API to create detailed, step-by-step learning paths for various career goals.

## Features

- AI-generated career roadmaps with detailed steps
- PDF export functionality for roadmaps
- User authentication system
- Responsive design for all devices

## Tech Stack

- **Frontend**: React, React Bootstrap, FontAwesome
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **AI**: Google Gemini API
- **PDF Generation**: jsPDF, html2canvas

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Google Gemini API key

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/edura.git
   cd edura
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd ../ai-mentor
   npm install
   ```

4. Set up environment variables:
   - Copy `.env.example` to `.env` in the backend directory
   ```
   cp .env.example .env
   ```
   - Update the `.env` file with your API keys and configuration

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend development server:
   ```
   cd ../ai-mentor
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Environment Variables

The following environment variables need to be set in the backend `.env` file:

- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token generation
- `PORT`: Port for the backend server (default: 5000)
- `GEMINI_API_KEY`: Google Gemini API key
- `OPENAI_API_KEY`: OpenAI API key (optional, for fallback)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.