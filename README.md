# User Registration System

This is a Node.js application that provides a user registration system with region-specific ID generation for Ghana.

## Prerequisites

- Node.js
- express
- MongoDB
- npm (Node Package Manager)

## Installation

1. Clone the repository: `https://github.com/henry-codex/AGE_Again.git`

2. Navigate to the project directory:

3. 3. Install dependencies: `npm install`
  
4. Create a `.env` file in the root directory and add your MongoDB connection string:

5. ## Usage

1. Start the server: `node app.js`

2. Open a web browser and navigate to `http://localhost:3000`

3. Fill out the registration form with the following details:
- First Name
- Last Name
- Date of Birth (Day, Month, Year)
- Region
- Member Since
- Gender

4. Submit the form. Upon successful registration, you will receive a unique ID.

## Features

- User registration with form validation
- Region-specific ID generation
- MongoDB integration for data storage

## Project Structure

- `server.js`: Main application file
- `models/User.js`: Mongoose schema for user data
- `views/index.html`: HTML form for user registration
- `public/`: Directory for static files (CSS, client-side JavaScript)

## API Endpoints

- GET `/`: Serves the registration form
- POST `/submit-form`: Handles form submission and user registration

## Region Codes

The application uses the following region codes for Ghana:

```javascript
const regionCodes = {
"Ahafo": "02",
"Ashanti": "03",
"Bono": "04",
"Bono East": "05",
"Central": "06",
"Eastern": "07",
"Greater Accra": "01",
"North East": "08",
"Northern": "09",
"Oti": "10",
"Savannah": "11",
"Upper East": "12",
"Upper West": "13",
"Volta": "14",
"Western": "15",
"Western North": "16"
};
