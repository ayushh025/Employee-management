import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NewTask = ({ data, idx }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const handleAcceptTask = (taskIndex) => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    const employees = [...userData.employessData];

    const employee = employees.find((e) => e.id === loggedInUser.data.id);

    employee.tasks[taskIndex].newTask = false;
    employee.tasks[taskIndex].active = true;

    employee.taskNumbers.newTask -= 1;
    employee.taskNumbers.active += 1;

    localStorage.setItem("employees", JSON.stringify(employees));

    setUserData({
      ...userData,
      employessData: employees,
    });
  };
  return (
    <div className="h-full shrink-0 w-75 bg-blue-500 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded text-sm">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="mt-5">
        <button
          onClick={() => {
            handleAcceptTask(idx);
          }}
          className="w-full py-2.5 rounded-lg bg-white text-blue-600 text-sm font-medium cursor-pointer hover:bg-gray-100 transition-all duration-200"
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
