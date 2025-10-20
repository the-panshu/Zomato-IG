const userModel = require("../models/user.model");
const foodPartnerModel = require("../models/foodpartner.model");
const bcrypt = require("bcryptjs"); // For hashing passwords
const jwt = require("jsonwebtoken"); // For creating and verifying JWT tokens

// Function to register a new user
async function registerUser(req, res) {
  const { fullName, email, password } = req.body; //First try to get data from req body

  const isUserAlreadyExist = await userModel.findOne({
    // Check if user already exists using email
    email,
  });

  if (isUserAlreadyExist) {
    // If user exists, return error response
    return res.status(400).json({
      message: "User already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10); //If user does not exist, hash the password

  // Create a new user in the database
  const user = await userModel.create({
    fullName,
    email,
    password: hashedPassword,
  });
  // Create a JWT token for the user
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );
  res.cookie("token", token); // Set the token in a cookie
  // Return success response with user details
  res.status(201).json({
    message: "User registered successfully",
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });
}
// Function to login a user
async function loginUser(req, res) {
  const { email, password } = req.body; // Get email and password from request body

  const user = await userModel.findOne({
    // Find user by email in database
    email,
  });

  if (!user) {
    // If user not found, return error response
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password); // Compare provided password with hashed password in database

  if (!isPasswordValid) {
    // If password is invalid, return error response
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }
  // Create a JWT token for the user, since email and password are valid
  // User will use this token to access protected routes
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );
  res.cookie("token", token); // Set the token in a cookie
  // Return success response with user details
  res.status(200).json({
    message: "User logged in successfully",
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });
}
// Function to logout a user
function logoutUser(req, res) {
  res.clearCookie("token"); // Clear the token cookie to logout the user
  res.status(200).json({
    // Return success response
    message: "User logged out successfully",
  });
}

// Function to register a new food partner
async function registerFoodPartner(req, res) {
  const { name, email, password, contactName, phone, address } = req.body;

  const isAccountAlreadyExist = await foodPartnerModel.findOne({
    email,
  });

  if (isAccountAlreadyExist) {
    return res.status(400).json({
      message: "Food partner account already exists",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const foodPartner = await foodPartnerModel.create({
    name,
    email,
    password: hashedPassword,
    contactName,
    phone,
    address,
  });

  const token = jwt.sign(
    {
      id: foodPartner._id,
    },
    process.env.JWT_SECRET
  );
  res.cookie("token", token);
  res.status(201).json({
    message: "Food partner registered successfully",
    foodPartner: {
      _id: foodPartner._id,
      email: foodPartner.email,
      name: foodPartner.name,
      contactName: foodPartner.contactName,
      phone: foodPartner.phone,
      address: foodPartner.address,
    },
  });
}
// Function to login a food partner
async function loginFoodPartner(req, res) {
  const { email, password } = req.body;
  const foodPartner = await foodPartnerModel.findOne({
    email,
  });

  if (!foodPartner) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }
  const isPasswordValid = await bcrypt.compare(password, foodPartner.password);
  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  const token = jwt.sign(
    {
      id: foodPartner._id,
    },
    process.env.JWT_SECRET
  );
  res.cookie("token", token);
  res.status(200).json({
    message: "Food partner logged in successfully",
    foodPartner: {
      _id: foodPartner._id,
      email: foodPartner.email,
      name: foodPartner.name,
    },
  });
}
// Function to logout a food partner
function logoutFoodPartner(req, res) {
  res.clearCookie("token");
  res.status(200).json({
    message: "Food partner logged out successfully",
  });
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  registerFoodPartner,
  loginFoodPartner,
  logoutFoodPartner,
};
