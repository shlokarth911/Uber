import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPannel from "../components/LocationSearchPannel";
import VehiclePannel from "../components/VehiclePannel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [pannelOpen, setPannelOpen] = useState(false);
  const [vehiclePannelOpen, setVehiclePannelOpen] = useState(false);
  const [confirmRidePannel, setConfirmRidePannel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const pannelRef = useRef(null);
  const pannelCloseRef = useRef(null);
  const vehiclePannelRef = useRef(null);
  const connfirmRidePannelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (pannelOpen) {
      gsap.to(pannelRef.current, {
        height: "70%",
        ease: "power4.out",
        duration: 0.7,
      });

      gsap.to(pannelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(pannelRef.current, {
        height: "0%",
        ease: "power4.out",
        duration: 0.7,
        padding: 0,
      });

      gsap.to(pannelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [pannelOpen]);

  useGSAP(() => {
    if (vehiclePannelOpen) {
      gsap.to(vehiclePannelRef.current, {
        transform: "translateY(0)",
        ease: "power4.out",
        duration: 0.5,
      });
    } else {
      gsap.to(vehiclePannelRef.current, {
        transform: "translateY(100%)",
        ease: "power4.out",
        duration: 0.3,
      });
    }
  }, [vehiclePannelOpen]);

  useGSAP(() => {
    if (confirmRidePannel) {
      gsap.to(connfirmRidePannelRef.current, {
        transform: "translateY(0)",
        ease: "power4.out",
        duration: 0.5,
      });
    } else {
      gsap.to(connfirmRidePannelRef.current, {
        transform: "translateY(100%)",
        ease: "power4.out",
        duration: 0.3,
      });
    }
  }, [confirmRidePannel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)",
        ease: "power4.out",
        duration: 0.5,
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
        ease: "power4.out",
        duration: 0.3,
      });
    }
  }, [vehicleFound]);

  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)",
        ease: "power4.out",
        duration: 0.5,
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
        ease: "power4.out",
        duration: 0.3,
      });
    }
  }, [waitingForDriver]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
        className="w-16 absolute z-[-1] left-5 top-5"
        alt=""
      />

      <div className="h-screen w-screen">
        {/* Image for Temporary use */}
        <img
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className=" h-screen flex flex-col justify-end w-full absolute top-0 ">
        <div className=" p-5  pb-8 rounded-t-2xl bg-white relative">
          <h5
            ref={pannelCloseRef}
            onClick={() => setPannelOpen(false)}
            className="absolute top-4 right-5 opacity-0 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            action=""
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              type="text"
              className="bg-[#eee] px-7 py-3 text-xl rounded-lg w-full mt-4"
              placeholder="Add a pickup location"
              value={pickUp}
              onChange={(e) => {
                setPickUp(e.target.value);
              }}
              onClick={() => {
                setPannelOpen(true);
              }}
            />
            <input
              type="text"
              className="bg-[#eee] px-7 py-3 text-xl rounded-lg w-full mt-4"
              placeholder="Enter your destination"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              onClick={() => {
                setPannelOpen(true);
              }}
            />
          </form>
        </div>

        <div ref={pannelRef} className="h-[0%] p bg-white">
          <LocationSearchPannel
            setPannelOpen={setPannelOpen}
            setVehiclePannelOpen={setVehiclePannelOpen}
          />
        </div>
      </div>

      <div
        ref={vehiclePannelRef}
        style={{
          transform: "translateY(100%)",
        }}
        className="fixed z-1 bottom-0 bg-white w-full  rounded-t-2xl  px-3 py-4 "
      >
        <VehiclePannel
          setVehiclePannelOpen={setVehiclePannelOpen}
          setConfirmRidePannel={setConfirmRidePannel}
        />
      </div>
      <div
        ref={connfirmRidePannelRef}
        style={{
          transform: "translateY(100%)",
        }}
        className="fixed z-10 bottom-0 bg-white w-full  rounded-t-2xl  px-3 py-4 "
      >
        <ConfirmRide
          setConfirmRidePannel={setConfirmRidePannel}
          setVehicleFound={setVehicleFound}
        />
      </div>
      <div
        style={{
          transform: "translateY(100%)",
        }}
        className="fixed z-10 bottom-0 bg-white w-full  rounded-t-2xl  px-3 py-4 "
        ref={vehicleFoundRef}
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div
        style={{
          transform: "translateY(100%)",
        }}
        className="fixed z-10 bottom-0 bg-white w-full  rounded-t-2xl  px-3 py-4 "
        ref={waitingForDriverRef}
      >
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
