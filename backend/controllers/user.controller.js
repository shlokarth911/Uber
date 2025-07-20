const userModel = require("../models/user.model");
const userService = require("../services/useer.service");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  const { firstName, lastName } = req.body.fullName || {};

  if (!firstName) {
    return res.status(400).json({ error: "First name is required" });
  }

  const hashPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    firstName,
    lastName,
    email,
    password: hashPassword,
  });

  const token = user.genrateAuthToken();

  res.status(201).json({ token, user });
};
