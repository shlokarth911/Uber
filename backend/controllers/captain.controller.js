const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const blackListTokenModel = require("../models/blackListToken.model");

module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }

  const { fullName, email, password, vehicle } = req.body;

  const CaptainAlreadyExists = await captainModel.findOne({ email });

  if (CaptainAlreadyExists) {
    res.status(400).json({ message: "Captain already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const captain = await captainService.createCaptain({
    firstName: fullName.firstName,
    lastName: fullName.lastName,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });
  const token = captain.genrateAuthToken();

  res.status(201).json({ token, captain });
};

module.exports.loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const captain = await captainModel.findOne({ email }).select("+password");

  if (!captain) {
    return res.status(401).json({ message: "Invalid Credentials" });
  }

  const isMatch = await captain.comparePasswords(password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid Credentials" });
  }

  const token = captain.genrateAuthToken();

  res.cookie("token", token);

  res.status(200).json({ token, captain });
};

module.exports.getCaptainProfile = (req, res, next) => {
  res.status(201).json({ captain: req.captain });
};

module.exports.logoutCaptin = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];

  await blackListTokenModel.create({ token });

  res.clearCookie("token");

  res.status(200).json({ message: "Logged Out Sucessfully" });
};
