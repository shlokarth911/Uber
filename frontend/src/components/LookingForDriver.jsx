import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const LookingForDriver = (props) => {
  const loaderRef = useRef(null);

  useGSAP(() => {
    // Set initial state: center the bar horizontally
    gsap.set(loaderRef.current, {
      xPercent: -50,
      left: "0%",
      width: "40%", // adjust width as needed
      opacity: 1,
      position: "absolute",
    });

    gsap.to(loaderRef.current, {
      xPercent: -50, // move to halfway right
      left: "100%",
      duration: 1.2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <div className=" overflow-hidden">
      <div className="absolute top-2 bg-neutral-200 w-full h-1 left-0">
        <div
          ref={loaderRef}
          className="absolute bg-blue-400 h-full"
          style={{ width: "40%" }}
        ></div>
      </div>

      <h5
        className="p-0 text-center w-full  relative top-0"
        onClick={() => {
          props.setVehicleFound(false);
        }}
      >
        <i className="ri-arrow-down-wide-line text-3xl text-neutral-500 "></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Looking For a driver</h3>
      <div className="flex justify-between items-center flex-col gap-2 ">
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
          alt=""
          className="h-32"
        />
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

export default LookingForDriver;
