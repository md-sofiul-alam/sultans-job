import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

const AppliedJob = ({ props }) => {
  const { address, companyname, icon, id, jobname, jobtime, jobtype, salary } =
    props;
  return (
    <div className="container mx-auto flex gap-8 justify-between items-center border rounded-lg p-6 mt-7">
      <div className="flex gap-10 items-center">
        <div>
          <img className="my-4 w-48 rounded-lg " src={icon} alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{jobname}</h1>
          <h1 className="text-2xl font-bold my-4 text-gray-400">
            {companyname}
          </h1>
          <div className="flex gap-6">
            <button className="btn btn-outline btn-primary text-xl font-medium">
              {jobtype}
            </button>
            <button className="btn btn-outline btn-primary text-xl font-medium">
              {jobtime}
            </button>
          </div>
          <div className="lg:flex gap-4 my-4 pt-4 text-xl text-gray-500">
            <p className="flex gap-2 items-center">
              <MapPinIcon className="h-6 w-6 text text-gray-300" />
              <span>{address}</span>
            </p>
            <p className="flex gap-2 my-4 lg:my-0 items-center">
              <CurrencyDollarIcon className="h-6 w-6 text text-gray-400" />
              <span>{salary}</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <NavLink
          to={`../jobDetails/${id}`}
          className="bg-gradient-to-r from-blue-500 mt-auto to-purple-500 text-white py-2 px-4 rounded-md text-xl font-medium w-44"
        >
          View Details
        </NavLink>
      </div>
    </div>
  );
};

export default AppliedJob;
