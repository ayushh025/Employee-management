import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123456") {
      setUser("Admin");
    } else if (email === "employee1@example.com" && password === "123456") {
      setUser("Employee");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "Admin" ? <AdminDashboard /> : ""}
      {user === "Employee" ? <EmployeeDashboard /> : ""}
    </>
  );
};

export default App;
