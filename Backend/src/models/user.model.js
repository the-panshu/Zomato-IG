const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("user", userSchema); // Create a Mongoose model named "User" using the defined schema
module.exports = userModel; // Export the model for use in other parts of the application
