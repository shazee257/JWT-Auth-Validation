const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Import Routes
const authRoute = require("./auth/auth");
const postRoute = require("./posts");

// Config .env
dotenv.config();

// Connect to DB!
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => console.log("Connected to DB!")
);

// Middlewares
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(5000, () => console.log("Server is running on port 5000!"));
