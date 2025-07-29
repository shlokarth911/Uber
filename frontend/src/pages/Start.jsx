import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <>
      <div className="h-screen w-full pt-5  flex justify-between flex-col bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1515543582370-4cff31e54e8b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt=""
          className="w-16 ml-8"
        />
        <div className="bg-white pb-7 py-5 px-4">
          <h2 className="text-3xl font-bold">Get Started with Uber</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white rounded-lg mt-4 text-xl py-3 "
          >
            Continue
          </Link>
        </div>
      </div>
    </>
  );
};

export default Start;
