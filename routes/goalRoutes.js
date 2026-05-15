const express = require('express');
const router = express.Router();
const { getGoals, setGoal } = require('../controllers/goalController');

router.route('/').get(getGoals).post(setGoal);

module.exports = router;