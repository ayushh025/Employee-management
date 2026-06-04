import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErr = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      newErr.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErr.email = "Please enter a valid email address";
    }
    if (!password) {
      newErr.password = "Password is required";
    } else if (password.length < 6) {
      newErr.password = "Password must be at least 6 characters";
    }

    setErrors(newErr);

    if (Object.keys(newErr).length === 0) {
      //LOGIC
      handleLogin(email, password);

      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 w-[95vw] sm:w-auto sm:p-20 p-6">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl text-black outline-none bg-transparent w-full"
            autoComplete="email"
            placeholder="Enter your email"
          />
          {errors.email && (
            <span className="text-red-500 text-md mt-1">{errors.email}</span>
          )}
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl text-black outline-none bg-transparent mt-4 w-full"
            autoComplete="current-password"
            placeholder="Enter password"
          />
          {errors.password && (
            <span className="text-red-500 text-md mt-1">{errors.password}</span>
          )}
          <button
            type="submit"
            className="bg-emerald-600 rounded-full py-3 px-5 text-xl text-white outline-none mt-6 border-none w-1/2"
            placeholder="Enter password"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
