import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
  const [ridePopUpPannel, setRidePopUpPannel] = useState(true);
  const [confirmRidePopUpPannel, setConfirmRidePopUpPannel] = useState(false);

  const ridePopUpPannelRef = useRef(null);
  const confirmRidePopUpPannelRef = useRef(null);

  useGSAP(() => {
    if (ridePopUpPannel) {
      gsap.to(ridePopUpPannelRef.current, {
        transform: "translateY(0)",
        ease: "power4.out",
        duration: 0.5,
      });
    } else {
      gsap.to(ridePopUpPannelRef.current, {
        transform: "translateY(100%)",
        ease: "power4.out",
        duration: 0.3,
      });
    }
  }, [ridePopUpPannel]);

  useGSAP(() => {
    if (confirmRidePopUpPannel) {
      gsap.to(confirmRidePopUpPannelRef.current, {
        transform: "translateY(0)",
        ease: "power4.out",
        duration: 0.5,
      });
    } else {
      gsap.to(confirmRidePopUpPannelRef.current, {
        transform: "translateY(100%)",
        ease: "power4.out",
        duration: 0.3,
      });
    }
  }, [confirmRidePopUpPannel]);

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

      <div
        ref={ridePopUpPannelRef}
        className="fixed z-10 bottom-0 translate-y-full bg-white w-full  rounded-t-2xl  px-3 py-4"
      >
        <RidePopUp
          setRidePopUpPannel={setRidePopUpPannel}
          setConfirmRidePopUpPannel={setConfirmRidePopUpPannel}
        />
      </div>
      <div
        ref={confirmRidePopUpPannelRef}
        className="fixed h-screen z-10 bottom-0 translate-y-full bg-white w-full  rounded-t-2xl  px-3 py-4"
      >
        <ConfirmRidePopUp
          setConfirmRidePopUpPannel={setConfirmRidePopUpPannel}
          setRidePopUpPannel={setRidePopUpPannel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
