// We will create server here..
const express = require("express");
const cookieParser = require("cookie-parser"); // Middleware to parse cookies for authentication
const authRoutes = require("./routes/auth.routes"); // Import authentication routes for user and food partner
const foodRoutes = require("./routes/food.routes"); // Import food-related routes
const cors = require("cors");
const foodPartnerRoutes = require("./routes/food-partner.routes");

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from this origin
    credentials: true, // Allow cookies to be sent with requests
  })
);

app.use(cookieParser()); // Middleware to parse cookies
app.use(express.json()); // Middleware to parse JSON request bodies

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/auth", authRoutes); // Use authentication routes for all /api/auth requests
app.use("/api/food", foodRoutes); // Use food-related routes for all /api/food requests
app.use("/api/food-partner", foodPartnerRoutes); // Use food-partner-related routes for all /api/food-partner requests

module.exports = app;
