import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div className=" overflow-hidden">
      <h5
        onClick={() => {
          props.setVehicleFound(false);
        }}
        className="p-0 text-center w-full  relative top-0"
      >
        <i className="ri-arrow-down-wide-line text-3xl text-neutral-500 "></i>
      </h5>

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
    </div>
  );
};

export default WaitingForDriver;
