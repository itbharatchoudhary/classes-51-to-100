require("dotenv").config();
const mongoose = require("mongoose");
const App = require("./src/App");

// Check if .env is loaded
console.log("MONGO_URL =", process.env.MONGO_URL);

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
};

connectToDB();

const PORT = process.env.PORT || 3000;
App.listen(PORT, () => console.log(`Server running on port ${PORT}`));
