const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const connectToDB = require("./db/db");
const userRoutes = require("./routes/user.routes");
const app = express();

connectToDB();
app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);

module.exports = app;
