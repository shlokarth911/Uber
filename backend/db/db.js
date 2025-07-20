const mongoose = require("mongoose");

const connectToDB = () => {
  try {
    mongoose.connect(process.env.DB_CONNECT).then(() => {
      console.log("Connected to DB🚀");
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDB;
