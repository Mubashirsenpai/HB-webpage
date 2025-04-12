const mongoose = require('../config/database');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

userSchema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
