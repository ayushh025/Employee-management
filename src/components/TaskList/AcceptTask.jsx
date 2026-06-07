import React from "react";

const AcceptTask = () => {
  return (
    <div className="h-full shrink-0 w-75 bg-yellow-400 text-black rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
        <h4 className="text-sm">20 Feb 2026</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Make a YouTube Video</h2>
      <p className="text-sm mt-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione porro
        omnis possimus sint, veniam id.
      </p>
      <div className="flex gap-2 mt-5">
        <button className="flex-1 bg-green-600 hover:bg-green-700 transition-all py-2 rounded-lg text-sm font-medium cursor-pointer">
          Mark Completed
        </button>

        <button className="flex-1 bg-red-600 hover:bg-red-700 transition-all py-2 rounded-lg text-sm font-medium cursor-pointer">
          Mark Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
