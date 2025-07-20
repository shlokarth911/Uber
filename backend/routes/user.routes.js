const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");
const { authUser } = require("../middlewares/auth.middleware");

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

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be atleast 6 charecters long"),
  ],
  userController.loginController
);

router.get("/profile", authUser, userController.getUserProfile);

module.exports = router;
