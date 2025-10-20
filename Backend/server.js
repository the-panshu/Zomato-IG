//We will start server from here.. & connect to db
require("dotenv").config(); // If we want to use .env file.. this is must..
const app = require("./src/app"); // Importing the app from src/app.js for getting the server related code
const connectDB = require("./src/db/db");

connectDB(); //Database connection

app.listen(3000, () => {
  //Server will run on port 3000
  console.log("Server is running at port 3000");
});
