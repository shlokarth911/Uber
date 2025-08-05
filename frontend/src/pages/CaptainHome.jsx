import React from "react";
import { Link } from "react-router-dom";

const CaptainHome = () => {
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

      <div className="h-1/2">
        <img
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className=" h-1/2 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-2">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
              alt=""
              className="h-10 w-10 rounded-full object-cover"
            />
            <h4 className="text-lg font-medium">Harsh Patel</h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold">₹295.4</h4>
            <p className="text-sm ">Earned</p>
          </div>
        </div>
        <div className="flex justify-evenly p-4 bg-neutral-100 rounded-2xl">
          <div className="text-center">
            <i className="text-3xl mb-2  font-thin ri-time-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-neutral-600">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl mb-2  font-thin ri-speed-up-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-neutral-600">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl mb-2  font-thin ri-booklet-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-neutral-600">Hours Online</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainHome;
