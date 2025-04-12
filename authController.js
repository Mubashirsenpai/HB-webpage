const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.send('User created successfully');
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).send('Invalid username or password');
    }
    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
      return res.status(401).send('Invalid username or password');
    }
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
    res.send({ token });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

