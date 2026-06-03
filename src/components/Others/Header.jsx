import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="text-3xl font-semibold">Ayush 👋</span>
      </h1>
      <button className="bg-red-600 text-lg font-medium text-white px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-sm cursor-pointer active:scale-95">Log Out</button>
    </div>
  );
};

export default Header;
