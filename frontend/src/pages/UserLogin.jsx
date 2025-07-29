import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        userData
      );

      if (res.status === 200) {
        const data = res.data;
        setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/home");
      }
    } catch (error) {
      // Optionally handle error here
      console.error(error);
    }

    setEmail("");
    setPassword("");
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
          <form
            action=""
            onSubmit={(e) => {
              SubmitHandler(e);
            }}
          >
            <h3 className="text-2xl mb-2 font-semibold ">What's your E-mail</h3>
            <input
              type="email"
              required
              placeholder="email@example.com"
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <h3 className="text-2xl mb-2  font-semibold">Enter Password</h3>
            <input
              type="password"
              required
              placeholder="password"
              className="bg-[#eeeeee]  mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="bg-[#111] text-2xl  text-white font-semibold mb-7 rounded px-4 py-2  w-full  placeholder:text-base">
              Login
            </button>
          </form>
          <p className="text-center">
            New Here?{" "}
            <Link to={"/register"} className="text-blue-600">
              Create new account
            </Link>
          </p>
        </div>
        <div>
          <Link
            to="/captain-login"
            className="bg-[#e6e6e6] text-lg  inline-flex  items-center justify-center  font-semibold mb-7 rounded px-4 py-2  w-full  placeholder:text-base"
          >
            SignIn as Captain
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
