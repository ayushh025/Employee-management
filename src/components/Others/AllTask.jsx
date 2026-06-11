import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="bg-[#2A2A2A] p-4 rounded-b-xl">
      {/* Desktop Header */}
      <div className="hidden md:flex bg-red-400 mb-3 py-3 px-4 rounded font-medium">
        <h3 className="w-1/5">Employee</h3>
        <h3 className="w-1/5">New</h3>
        <h3 className="w-1/5">Active</h3>
        <h3 className="w-1/5">Completed</h3>
        <h3 className="w-1/5">Failed</h3>
      </div>

      <div className="md:max-h-60 md:overflow-auto custom-scroll">
        {userData.employessData.map((emp) => (
          <div key={emp.id}>
            {/* Desktop / Tablet */}
            <div className="hidden md:flex mb-2 py-3 px-4 bg-[#1C1C1C] rounded-lg">
              <p className="w-1/5 text-white">{emp.name}</p>
              <p className="w-1/5 text-blue-400 ml-2">
                {emp.taskNumbers.newTask}
              </p>
              <p className="w-1/5 text-yellow-400 ml-2">
                {emp.taskNumbers.active}
              </p>
              <p className="w-1/5 text-green-500 ml-2">
                {emp.taskNumbers.completed}
              </p>
              <p className="w-1/5 text-red-500 ml-2">
                {emp.taskNumbers.failed}
              </p>
            </div>

            {/* Mobile */}
            <div className="md:hidden bg-[#1C1C1C] rounded-lg p-4 mb-3">
              <h3 className="text-white font-semibold text-lg mb-3">
                {emp.name}
              </h3>

              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-[#2A2A2A] p-2 rounded">
                  <p className="text-gray-400">New</p>
                  <p className="text-blue-400 font-semibold">
                    {emp.taskNumbers.newTask}
                  </p>
                </div>

                <div className="bg-[#2A2A2A] p-2 rounded">
                  <p className="text-gray-400">Active</p>
                  <p className="text-yellow-400 font-semibold">
                    {emp.taskNumbers.active}
                  </p>
                </div>

                <div className="bg-[#2A2A2A] p-2 rounded">
                  <p className="text-gray-400">Completed</p>
                  <p className="text-green-500 font-semibold">
                    {emp.taskNumbers.completed}
                  </p>
                </div>

                <div className="bg-[#2A2A2A] p-2 rounded">
                  <p className="text-gray-400">Failed</p>
                  <p className="text-red-500 font-semibold">
                    {emp.taskNumbers.failed}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
