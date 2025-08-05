import React from "react";

const LocationSearchPannel = (props) => {
  //  sampleArrayOfLocations

  const locations = [
    "24b, Hello World , JH",
    "24b, Hello World , JH",
    "24b, Hello World , JH",
    "24b, Hello World , JH",
    "24b, Hello World , JH",
  ];

  return (
    <div className="px-3">
      {/* SAMPLE DATA */}

      <div className="flex flex-col gap-7">
        {locations.map((element, idx) => (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePannelOpen(true);
              props.setPannelOpen(false);
            }}
            className="flex items-center border-1 px-3 py-2 active:border-neutral-500 border-transparent rounded-lg  justify-start "
          >
            <h2 className="bg-[#eee] h-10 w-10 rounded-full flex items-center justify-center ">
              <i className="ri-map-pin-fill text-lg"></i>
            </h2>
            <div className="ml-3">
              <h4 className="text-lg font-medium ">{element}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationSearchPannel;
