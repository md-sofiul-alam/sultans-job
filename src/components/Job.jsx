import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const Job = ({ props }) => {
  const { address, companyname, icon, id, jobname, jobtime, jobtype, salary } =
    props;
  return (
    <div className="border rounded-xl bg-blue-50 p-6 flex flex-col">
      <img className="max-h-20 w-1/3 my-4 rounded-lg" src={icon} alt="" />
      <h1 className="text-2xl font-bold">{jobname}</h1>
      <h1 className="text-2xl font-bold my-4 text-gray-400">{companyname}</h1>
      <div className="flex gap-6">
        <button className="btn btn-outline btn-primary text-xl font-medium">{jobtype}</button>
        <button className="btn btn-outline btn-primary text-xl font-medium">{jobtime}</button>
      </div>
      <div className="lg:flex gap-4 my-4 pt-4 text-xl text-gray-500">
        <p className="flex gap-2"><MapPinIcon className="h-6 w-6 text text-gray-300" />{address}</p>
        <p className="flex gap-2 my-4 lg:my-0"><CurrencyDollarIcon className="h-6 w-6 text text-gray-400" />{salary}</p>
      </div>
      <button className="bg-gradient-to-r from-blue-500 mt-auto to-purple-500 text-white py-2 px-4 rounded-md text-xl font-medium w-44">View Details</button>
    </div>
  );
};

export default Job;
