import React from "react";

const NewTask = () => {
  return (
    <div className="h-full shrink-0 w-75 bg-blue-500 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
        <h4 className="text-sm">20 Feb 2026</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Make a YouTube Video</h2>
      <p className="text-sm mt-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione porro
        omnis possimus sint, veniam id.
      </p>
      <div className="mt-5">
        <button className="w-full py-2.5 rounded-lg bg-white text-blue-600 text-sm font-medium cursor-pointer hover:bg-gray-100 transition-all duration-200">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
