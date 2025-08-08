import React from "react";
import { Link } from "react-router-dom";

const FinishRide = (props) => {
  return (
    <>
      <div className="">
        <h5
          onClick={() => {
            props.setFinishRidePannel(false);
          }}
          className="p-0 text-center w-full  relative top-0"
        >
          <i className="ri-arrow-down-wide-line text-3xl text-neutral-500 "></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-5">Finish this ride</h3>

        <div className="flex justify-between items-center pt-4 ">
          <div className="flex items-center gap-3 ">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
              alt=""
              className="h-15 w-15 rounded-full object-cover"
            />
            <h2 className="text-xl font-medium">Harsh Patel</h2>
          </div>
          <h5 className="text-xl font-semibold">2.2 km</h5>
        </div>

        <div className="w-full flex flex-col gap-5 mt-5 mb-8">
          <div className="flex items-center gap-3 p-3  border-b-1 border-b-neutral-300">
            <div className="bg-neutral-200 h-10 w-10 flex items-center justify-center rounded-4xl">
              <i className="ri-map-pin-2-fill text-2xl"></i>
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

        <div className="flex flex-col justify-between gap-3">
          <Link
            to="/captain-riding"
            className="w-full flex justify-center items-center bg-neutral-900 font-semibold p-2 py-3 rounded-lg text-white text-xl"
          >
            Finish Ride
          </Link>

          <p className="text-neutral-600 text-sm text-center">
            Click on finish ride button if you have completed the payment
          </p>
        </div>
      </div>
    </>
  );
};

export default FinishRide;
