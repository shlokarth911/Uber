import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link
        to={"/home"}
        className="fixed  h-10 w-10 bg-white flex items-center justify-center rounded-full right-2.5 top-2.5"
      >
        <i className="ri-home-9-line text-lg font-medium"></i>
      </Link>

      <div className="h-1/2">
        <img
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className=" p-4">
        <div className="flex items-center justify-between">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
            alt=""
            className="h-22"
          />

          <div className="text-right">
            <h2 className="text-lg font-medium ">Hello</h2>
            <h4 className="text-2xl font-semibold  -mb-1">MP04 AB 1234</h4>
            <p className="text-neutral-600">Maruti Suzuki Aulto</p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-5 mt-5 mb-8">
          <div className="flex items-center gap-3 p-3  border-b-1 border-b-neutral-300">
            <div className="bg-neutral-200 h-10 w-10 flex items-center justify-center rounded-4xl">
              <i className="ri-map-pin-3-line text-2xl"></i>
            </div>
            <div className="text-lg">
              <h3 className="text-xl font-medium">562/11-A</h3>
              <p className="text-lg -mt-1 text-gray-600">
                Kankariya Talab , Ahemdabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3  border-b-1 border-b-neutral-300">
            <div className="bg-neutral-200 h-10 w-10 flex items-center justify-center rounded-4xl">
              <i className="ri-cash-fill text-2xl"></i>
            </div>
            <div className="text-lg">
              <h3 className="text-xl font-medium">₹193</h3>
              <p className="text-lg -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>

        <button className="w-full bg-neutral-900 font-semibold p-2 rounded-lg text-white text-xl">
          Make a payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
