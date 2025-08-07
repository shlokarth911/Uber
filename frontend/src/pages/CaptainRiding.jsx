import React from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";

const CaptainRiding = () => {
  return (
    <div className="h-screen">
      <div className="p-3 top-0 flex items-center justify-between fixed w-full">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt=""
          className="w-16"
        />

        <Link
          to={"/home"}
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full "
        >
          <i className="ri-login-box-line text-lg font-medium"></i>
        </Link>
      </div>

      <div className="h-full">
        <img
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className=" fixed bottom-[0%] w-full p-4 bg-[#fff]">
        <CaptainDetails />
      </div>
    </div>
  );
};

export default CaptainRiding;
