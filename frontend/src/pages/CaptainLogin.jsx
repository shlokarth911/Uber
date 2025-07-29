import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../contexts/CaptainContext";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

  const SubmitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      email: email,
      password: password,
    };

    const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captainData
    );

    if (res.status === 200) {
      const data = res.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setPassword("");

    captain;
  };

  return (
    <>
      <div className="p-7 flex flex-col justify-between h-screen">
        <div>
          <img
            src="https://www.svgrepo.com/show/505031/uber-driver.svg"
            alt=""
            className="w-20 mb-5"
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
            Join a fleet?{" "}
            <Link to={"/captain-register"} className="text-blue-600">
              Register as a captain
            </Link>
          </p>
        </div>
        <div>
          <Link
            to="/login"
            className="bg-[#e6e6e6] text-lg  inline-flex  items-center justify-center  font-semibold mb-7 rounded px-4 py-2  w-full  placeholder:text-base"
          >
            SignIn as User
          </Link>
        </div>
      </div>
    </>
  );
};

export default CaptainLogin;
