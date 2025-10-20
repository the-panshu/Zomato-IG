//Logic of how db will be connected
const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(process.env.MONGODB_URI) // Connect to MongoDB using the connection string from environment variables
    .then(() => {
      // If connection is successful
      console.log("DB connected");
    })
    .catch((err) => {
      // If there is an error during connection
      console.log("DB connection error", err);
    });
}

module.exports = connectDB;
