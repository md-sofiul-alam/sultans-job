import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const isOpen = () => setOpen(!open);
  return (
    <div className="container flex justify-between align-middle mt-6 w-11/12 mx-auto relative">
      <NavLink
        to={"/"}
        className="text-2xl lg:text-4xl ml-14 lg:ml-0 font-semibold text-blue-300"
      >
        Sultan<span className="text-blue-500">Job</span>
      </NavLink>
      <div className="hidden lg:flex gap-6 align-middle text-2xl font-semibold">
        <NavLink className={({isActive})=> isActive ? "text-blue-700 font-semibold": ''} to={"/"}>Home</NavLink>
        <NavLink className={({isActive})=> isActive ? "text-blue-700 font-semibold": ''} to={"/statistics"}>Statistics</NavLink>
        <NavLink className={({isActive})=> isActive ? "text-blue-700 font-semibold": ''} to={"/applied"}>Applied Jobs</NavLink>
        <NavLink className={({isActive})=> isActive ? "text-blue-700 font-semibold": ''} to={"/blog"}>Blog</NavLink>
      </div>
      <div className="flex lg:hidden flex-col justify-center absolute left-2 top-2">
        <Bars3Icon
          className={`w-6 h-6 ${!open && "hidden"}`}
          onClick={isOpen}
        ></Bars3Icon>
        <XMarkIcon
          className={`w-6 h-6 ${open && "hidden"}`}
          onClick={isOpen}
        ></XMarkIcon>
        {!open && (
          <div className="flex flex-col align-middle text-lg mt-3 absolute -left-2 top-4 bg-blue-500 rounded-md text-white p-2 font-semibold">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/statistics"}>Statistics</NavLink>
            <NavLink to={"/applied"}>Applied</NavLink>
            <NavLink to={"/blog"}>Blog</NavLink>
          </div>
        )}
      </div>
      <button className="bg-gradient-to-r from-blue-500 to-purple-500 max-h-10 rounded-lg text-center my-auto text-lg lg:text-2xl text-white pt-1 pb-2 px-4 font-medium">
        Start Applying
      </button>
    </div>
  );
};

export default Navbar;
