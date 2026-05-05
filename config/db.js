const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error('================================================');
    console.error('CRITICAL: MongoDB connection error!');
    console.error('Message:', err.message);
    console.error('------------------------------------------------');
    console.error('Troubleshooting tips:');
    console.error('1. Check if MONGO_URI is set in your environment variables.');
    console.error('2. Ensure your IP address is whitelisted in MongoDB Atlas.');
    console.error('3. Verify the database credentials in the connection string.');
    console.error('================================================');
    process.exit(1);
  }
};

module.exports = connectDB;
