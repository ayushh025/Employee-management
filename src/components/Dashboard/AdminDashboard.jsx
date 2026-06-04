import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const AdminDashboard = ({ admin }) => {
  return (
    <div className="p-5 sm:p-10 bg-[#1C1C1C] min-h-screen text-white">
      <Header name={admin.name} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
