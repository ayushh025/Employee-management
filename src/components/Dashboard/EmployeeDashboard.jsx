import React from "react";
import Header from "../Others/Header";
import TaskListNumbers from "../Others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ employee, setUser }) => {
  return (
    <div>
      <div className="p-5 sm:p-10 bg-[#1C1C1C] min-h-screen text-white">
        <Header name={employee.name} setUser={setUser} />
        <TaskListNumbers taskNumbers={employee.taskNumbers} />
        <TaskList tasks={employee.tasks} taskNumbers={employee.taskNumbers} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
