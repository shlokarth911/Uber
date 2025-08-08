import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finishRidePannel, setFinishRidePannel] = useState(false);

  const finishRidePannelRef = useRef(null);

  useGSAP(() => {
    if (finishRidePannel) {
      gsap.to(finishRidePannelRef.current, {
        transform: "translateY(0)",
        ease: "power4.out",
        duration: 0.5,
      });
    } else {
      gsap.to(finishRidePannelRef.current, {
        transform: "translateY(100%)",
        ease: "power4.out",
        duration: 0.3,
      });
    }
  }, [finishRidePannel]);

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

      <div className="h-4/5">
        <img
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="h-1/5 bg-white rounded-t-2xl">
        <h5 className="p-0  text-center w-full  relative top-0">
          <i className="ri-arrow-down-wide-line text-3xl text-neutral-500 "></i>
        </h5>

        <div className="flex items-center justify-between p-6 rounded-t-2xl ">
          <h4 className="text-xl font-semibold">4km away</h4>
          <button
            onClick={() => {
              setFinishRidePannel(true);
            }}
            className=" bg-neutral-900 font-semibold px-6 py-3 rounded-lg text-white text-lg"
          >
            Complete Ride
          </button>
        </div>
      </div>

      <div
        ref={finishRidePannelRef}
        className="fixed z-10 bottom-0 translate-y-full bg-white w-full  rounded-t-2xl  px-3 py-4"
      >
        <FinishRide setFinishRidePannel={setFinishRidePannel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
