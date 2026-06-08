import React from "react";

const FaildTask = ({ data }) => {
  return (
    <div className="h-full shrink-0 w-75 bg-red-600 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-white text-red-600 px-3 py-1 rounded text-sm">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="mt-5 bg-white/20 py-2 rounded-lg text-center">
        <span className="font-semibold text-white">Failed</span>
      </div>
    </div>
  );
};

export default FaildTask;
