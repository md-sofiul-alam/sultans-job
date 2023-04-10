import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isOpen = () => setOpen(!open);
  return (
    <div className="container flex justify-between align-middle mt-6 w-11/12 mx-auto">
      <Link to={"/"} className="text-2xl font-semibold text-blue-300">
        Sultan<span className="text-blue-500">Job</span>
      </Link>
      {<div className="hidden lg:flex gap-6 align-middle text-lg">
        <Link to={"/statistics"}>Statistics</Link>
        <Link to={"/applied"}>Applied Jobs</Link>
        <Link to={"/blog"}>Blog</Link>
      </div>}
      <button className="bg-primary rounded-lg text-lg text-white py-2 px-4 font-medium">Start Applying</button>
    </div>
  );
};

export default Navbar;
