const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// Import Routes
const authRoute = require("./routes/auth");
const cors = require("cors");

dotenv.config();

app.use(cors());

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB!")
);

// MiddLewares
app.use(express.json());

// Route MiddLewares
app.use("/api/user", authRoute);

app.listen(5000, () => console.log("Server Up and Running"));
