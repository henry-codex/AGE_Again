require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Middleware to parse the body of POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Serve your HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Region to Code Mapping
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

// Handle form submission
app.post('/submit-form', (req, res) => {
  const { firstName, lastName, dobDay, dobMonth, dobYear, region, memberSince, gender } = req.body;
  const dob = `${dobDay}-${dobMonth}-${dobYear}`; // Combine the DOB fields
  const regionCode = regionCodes[region]; // Get the region code
  const ageId = generateRandomId(regionCode); // Generate a region-specific ID

  // Create a new user document using the model
  const newUser = new User({
    firstName,
    lastName,
    dob,
    memberSince,
    gender,
    ageId
  });

  // Save the new user to the database
  newUser.save()
    .then(() => {
      console.log(`Registration Complete. Your ID is ${ageId}`);
      res.send(`Registration Complete. Your ID is ${ageId}`);
    })
    .catch(err => {
      console.error('Error saving user:', err);
      res.status(500).send('Error registering user');
    });
});

function generateRandomId(regionCode) {
  let id = `AGE-${regionCode}-`;
  for (let i = 0; i < 4; i++) { // Adjusted for a total length of 10 characters including the prefix and region code
    id += Math.floor(Math.random() * 9) + 1;
  }
  return id;
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));