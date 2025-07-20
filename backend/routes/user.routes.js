const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullName.firstName"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Passwrod must be at least 6 charecters long "),
  ],
  userController.registerUser
);

module.exports = router;
