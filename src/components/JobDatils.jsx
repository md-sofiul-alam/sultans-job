import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useParams } from "react-router-dom";
import {
  MapPinIcon,
  CurrencyDollarIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { getAppliedJob } from "./utility";

const JobDatils = () => {
  const jobDetailsData = useLoaderData();
  const { id } = useParams();
  const loadDetails = jobDetailsData.find((object) => object.id === id);
  console.log(id)
  const {
    address,
    educationalRequirements,
    email,
    experiences,
    jobDescription,
    jobResponsibility,
    phoneNo,
    salary,
  } = loadDetails;
  let appliedJob = getAppliedJob();
  const addToDb = id => {
    // add quantity
    const quantity = appliedJob[id];
    if (!quantity) {
        appliedJob[id] = 1;
    }
    else{
        toast ("You Have Already Applied This Post")
    }
    localStorage.setItem('applied-job', JSON.stringify(appliedJob));
}
  return (
    <div>
        <ToastContainer></ToastContainer>
         <h1 className="container mx-auto rounded-xl text-3xl font-bold bg-blue-100 text-blue-800 text-center mt-20 py-24 content-center">Job Details</h1>
      <div className="container mx-auto p-6 mt-16 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3">
          <h4 className="text-xl my-4 text-gray-600">
            <span className="text-black font-bold">Job Description: </span>
            {jobDescription}
          </h4>
          <h4 className="text-xl my-4 text-gray-600">
            <span className="text-black font-bold">Job Responsibility: </span>
            {jobResponsibility}
          </h4>
          <h4 className="text-xl my-4 text-gray-600">
            <span className="text-black font-bold">
              Educational Requirements:
            </span>
            <br />
            {educationalRequirements}
          </h4>
          <h4 className="text-xl my-4 text-gray-600">
            <span className="text-black font-bold">Experiences:</span>
            <br />
            {experiences}
          </h4>
        </div>
        <div className="lg:col-span-2 flex flex-col gap-4 bg-blue-50 rounded-xl p-6">
          <h1 className="text-4xl font-bold">Job Details</h1>
          <hr className="bg-gradient-to-r from-blue-500 to-purple-500 w-10/12" />
          <p className="flex gap-2 lg:my-0 items-center font-semibold">
            <CurrencyDollarIcon className="h-6 w-6 text text-gray-400" />
            <span>{salary}</span> (Per Month)
          </p>
          <p className="flex gap-2 lg:my-0 items-center">
            <BriefcaseIcon className="h-6 w-6 text text-gray-400" />
            <span>{jobDescription}</span>
          </p>
          <h1 className="text-4xl font-bold mt-4">Contact Information</h1>
          <hr className="bg-gradient-to-r from-blue-500 to-purple-500 w-10/12" />
          <p className="flex gap-2 items-center">
            <PhoneIcon className="h-6 w-6 text text-gray-300" />
            <span>{phoneNo}</span>
          </p>
          <p className="flex gap-2 items-center">
            <EnvelopeIcon className="h-6 w-6 text text-gray-300" />
            <span>{email}</span>
          </p>
          <p className="flex gap-2 items-center">
            <MapPinIcon className="h-6 w-6 text text-gray-300" />
            <span>{address}</span>
          </p>
          <button onClick={()=>addToDb(id)} className="bg-gradient-to-r from-blue-500 to-purple-500 w-2/3 text-xl py-2 px-4 rounded-md text-white">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDatils;
