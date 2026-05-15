const Goal = require('../models/goalModel');

// @desc    Get goals
// @route   GET /api/goals
const getGoals = async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
};

// @desc    Set goal
// @route   POST /api/goals
const setGoal = async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  const goal = await Goal.create({ text: req.body.text });
  res.status(200).json(goal);
};

module.exports = { getGoals, setGoal };