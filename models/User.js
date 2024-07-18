const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: { type: String, required: true }, // Changed type to String to accommodate the format "DD-MM-YYYY"
  memberSince: { type: Number, required: true },
  gender: { type: String, required: true }, // Added gender field
  ageId: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;