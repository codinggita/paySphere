const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    console.log("Tip: Please update your .env file with valid MongoDB credentials.");
    process.exit(1);
  }
};

module.exports = connectDB;
