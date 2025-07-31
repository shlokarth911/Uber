import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPannel from "../components/LocationSearchPannel";

const Home = () => {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [pannelOpen, setPannelOpen] = useState(false);
  const pannelRef = useRef(null);
  const pannelCloseRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (pannelOpen) {
      gsap.to(pannelRef.current, {
        height: "70%",
        ease: "power4.out",
        duration: 0.7,
        padding: 24,
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

  return (
    <div className="h-screen relative">
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

        <div ref={pannelRef} className="h-[0%] bg-white">
          <LocationSearchPannel />
        </div>
      </div>
    </div>
  );
};

export default Home;
