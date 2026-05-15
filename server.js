const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDB = require('./config/db'); // We will create this next
const port = process.env.PORT || 5000;
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/goals', require('./routes/goalRoutes'));

app.get('/', (req, res) => {
    res.status(200).json({ message: "SYSTEM ACTIVE: Xavier is the Architect." });
});

app.listen(port, () => console.log(`Server started on port ${port}`.cyan.underline));