const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware to parse the body of POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Serve your HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html'); // Adjusted path assuming HTML is in 'views'
});

// Handle form submission
app.post('/submit-form', (req, res) => {
  const { firstName, lastName, dob, memberSince } = req.body;
  const userId = generateRandomId();
  console.log(`Registration Complete. Your ID is ${userId}`);
  console.log(`Name: ${firstName} ${lastName}, Date of Birth: ${dob}, Member Since: ${memberSince}`);
  // Here, you can add code to save the form data to a database or perform other actions
  res.send(`Registration Complete. Your ID is ${userId}`);
});

function generateRandomId() {
  let id = 'AGE-';
  for (let i = 0; i < 6; i++) {
    id += Math.floor(Math.random() * 9) + 1;
  }
  return id;
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));