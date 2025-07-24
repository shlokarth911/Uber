const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const connectToDB = require("./db/db");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");
const app = express();

connectToDB();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/users", userRoutes);
app.use("/captains", captainRoutes);

module.exports = app;
