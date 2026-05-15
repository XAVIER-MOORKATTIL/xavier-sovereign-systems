const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`DATABASE ACTIVE: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`CONNECTION FAILURE: ${error.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;