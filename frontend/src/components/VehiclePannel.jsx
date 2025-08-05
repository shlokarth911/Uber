import React from "react";

const VehiclePannel = (props) => {
  return (
    <div>
      <h5
        className="p-0 text-center w-full  relative top-0"
        onClick={() => {
          props.setVehiclePannelOpen(false);
        }}
      >
        <i className="ri-arrow-down-wide-line text-3xl text-neutral-500 "></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Ride</h3>

      <div
        onClick={() => {
          props.setConfirmRidePannel(true);
        }}
        className="flex items-center justify-between p-3 w-full border-2 border-neutral-100 active:border-black rounded-2xl mb-2"
      >
        <div className="flex items-center ">
          <div className="">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
              alt=""
              className="h-14"
            />
          </div>
          <div className="">
            <h4 className="text-lg font-medium">
              Uber GO{" "}
              <span className="text-sm text-neutral-600">
                <i className="ri-user-3-fill text-sm"></i>4
              </span>
            </h4>
            <h5 className="text-base">2 mins away</h5>
            <p className="text-xs text-neutral-600">
              Affordable, Compact Rides
            </p>
          </div>
        </div>
        <h2 className="text-xl font-semibold">₹193</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePannel(true);
        }}
        className="flex items-center justify-between p-3 w-full border-2 border-neutral-100 active:border-black rounded-2xl mb-2"
      >
        <div className="flex items-center ">
          <div className="">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
              alt=""
              className="h-14"
            />
          </div>
          <div className="">
            <h4 className="text-lg font-medium">
              Uber Moto{" "}
              <span className="text-sm text-neutral-600">
                <i className="ri-user-3-fill text-sm"></i>1
              </span>
            </h4>
            <h5 className="text-base">2 mins away</h5>
            <p className="text-xs text-neutral-600">
              Affordable, Motorcycle Rides
            </p>
          </div>
        </div>
        <h2 className="text-xl font-semibold">₹65</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePannel(true);
        }}
        className="flex items-center justify-between p-3 w-full border-2 border-neutral-100 active:border-black rounded-2xl mb-2"
      >
        <div className="flex items-center ">
          <div className="">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
              alt=""
              className="h-14"
            />
          </div>
          <div className="">
            <h4 className="text-lg font-medium">
              Uber Auto{" "}
              <span className="text-sm text-neutral-600">
                <i className="ri-user-3-fill text-sm"></i>3
              </span>
            </h4>
            <h5 className="text-base">2 mins away</h5>
            <p className="text-xs text-neutral-600">Affordable, Auto Rides</p>
          </div>
        </div>
        <h2 className="text-xl font-semibold">₹120</h2>
      </div>
    </div>
  );
};

export default VehiclePannel;
