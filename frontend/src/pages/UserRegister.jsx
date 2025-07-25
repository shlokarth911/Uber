import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");

    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });

    console.log(userData);
  };

  return (
    <>
      <div className="p-7 flex flex-col justify-between h-screen">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
            alt=""
            className="w-16 mb-10"
          />

          <form action="" onSubmit={(e) => submitHandler(e)}>
            <h3 className="text-2xl mb-2 font-semibold ">What's your Name</h3>
            <div className="flex justify-between items-center gap-4">
              <input
                type="text"
                required
                placeholder="First Name"
                className="bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <input
                type="text"
                required
                placeholder="Last Name"
                className="bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>

            <h3 className="text-2xl mb-2 font-semibold ">What's your E-mail</h3>
            <input
              type="email"
              required
              placeholder="email@example.com"
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h3 className="text-2xl mb-2  font-semibold">Enter Password</h3>
            <input
              type="password"
              required
              placeholder="password"
              className="bg-[#eeeeee]  mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="bg-[#111] text-2xl  text-white font-semibold mb-7 rounded px-4 py-2  w-full  placeholder:text-base">
              Login
            </button>
          </form>
          <p className="text-center">
            Already have an account?{" "}
            <Link to={"/login"} className="text-blue-600">
              Login here
            </Link>
          </p>
        </div>
        <div>
          <Link
            to="/captain-register"
            className="bg-[#e6e6e6] text-lg  inline-flex  items-center justify-center  font-semibold mb-7 rounded px-4 py-2  w-full  placeholder:text-base"
          >
            Register as Captain
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserRegister;
