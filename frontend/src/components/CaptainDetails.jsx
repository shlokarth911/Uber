import React from "react";

const CaptainDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-2">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
          <h4 className="text-lg font-medium">Harsh Patel</h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold">₹295.4</h4>
          <p className="text-sm ">Earned</p>
        </div>
      </div>
      <div className="flex justify-evenly p-4 bg-neutral-100 rounded-2xl mt-5">
        <div className="text-center">
          <i className="text-3xl mb-2  font-thin ri-time-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-neutral-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2  font-thin ri-speed-up-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-neutral-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2  font-thin ri-booklet-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-neutral-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
