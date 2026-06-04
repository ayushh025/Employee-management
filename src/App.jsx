import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
import { setLocalStorage } from "./utils/LocalStorage";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    setLocalStorage();
  }, []);
  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role);
  //     }
  //   }
  // }, [authData]);

  const handleLogin = (email, password) => {
    if (authData) {
      const admin = authData.adminData.find(
        (e) => e.email === email && e.password === password
      );
      const employee = authData.employessData.find(
        (e) => e.email === email && e.password === password
      );
      if (admin) {
        setUser({ role: "Admin" });
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "Admin" }));
        setLoggedInUserData({ admin });
      } else if (employee) {
        setUser({ role: "Employee" });
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "Employee" })
        );
        setLoggedInUserData({ employee });
      } else {
        alert("Invalid Credentials");
      }
    }
  };
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user?.role === "Admin" ? (
        <AdminDashboard admin={loggedInUserData?.admin} />
      ) : (
        ""
      )}
      {user?.role === "Employee" ? (
        <EmployeeDashboard employee={loggedInUserData?.employee} />
      ) : (
        ""
      )}
    </>
  );
};

export default App;
