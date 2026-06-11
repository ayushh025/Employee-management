import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
import { setLocalStorage } from "./utils/LocalStorage";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData] = useContext(AuthContext);
  const employee = userData?.employessData?.find(
    (e) => e.id === loggedInUserData?.employee?.id,
  );

  useEffect(() => {
    setLocalStorage();
  }, []);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser({ role: userData.role });

      if (userData.role === "Admin") {
        setLoggedInUserData({ admin: userData.data });
      } else {
        setLoggedInUserData({ employee: userData.data });
      }
    }
    setLoading(false);
  }, []);

  const handleLogin = (email, password) => {
    if (userData) {
      const admin = userData.adminData.find(
        (e) => e.email === email && e.password === password,
      );
      const employee = userData.employessData.find(
        (e) => e.email === email && e.password === password,
      );
      if (admin) {
        setUser({ role: "Admin" });
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "Admin", data: admin }),
        );
        setLoggedInUserData({ admin });
      } else if (employee) {
        setUser({ role: "Employee" });
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "Employee", data: employee }),
        );
        setLoggedInUserData({ employee });
      } else {
        alert("Invalid Credentials");
      }
    }
  };
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#111] text-white">
        Loading...
      </div>
    );
  }
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user?.role === "Admin" ? (
        <AdminDashboard admin={loggedInUserData?.admin} setUser={setUser} />
      ) : (
        ""
      )}
      {user?.role === "Employee" ? (
        <EmployeeDashboard employee={employee} setUser={setUser} />
      ) : (
        ""
      )}
    </>
  );
};

export default App;
