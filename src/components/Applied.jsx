import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAppliedJob } from "./utility";
import AppliedJob from "./AppliedJob";

const Applied = () => {
  const loadedData = useLoaderData();
  const [appliedJobData, setAppliedJobData] = useState([]);
  const storedappliedJobData = getAppliedJob();
  useEffect(() => {
    const appliedJob = [];
    for (const id in storedappliedJobData) {
      const addedJob = loadedData.find((job) => job.id === id);
      if (addedJob) {
        appliedJob.push(addedJob);
        setAppliedJobData(appliedJob);
      } 
    }

  }, []);
  const sortByOnsite = () => {
    const appliedJob = [];
    for (const id in storedappliedJobData) {
      const addedJob = loadedData.find((job) => job.id === id);
      if (addedJob) {
        appliedJob.push(addedJob);
        const filterByOnsite = appliedJob.filter(job=>job.jobtype==="Onsite")
        setAppliedJobData(filterByOnsite);
      } 
    }
    
  };
  const sortByRemote = () => {
    const appliedJob = [];
    for (const id in storedappliedJobData) {
      const addedJob = loadedData.find((job) => job.id === id);
      if (addedJob) {
        appliedJob.push(addedJob);
        const filterByRemote = appliedJob.filter(job=>job.jobtype==="Remote")
        setAppliedJobData(filterByRemote);
      } 
    }
    
  };
  return (
    <div className="container relative mx-auto">
      <h1 className="text-3xl font-bold bg-blue-100 text-blue-800 text-center mt-10 py-24 content-center">
        Job Details
      </h1>
      <div className="mt-10 flex justify-end mr-6 gap-6">
        <button className="btn bg-gradient-to-r from-blue-500 to-purple-500" onClick={sortByOnsite}>
          Filter By Onsite
        </button>
        <button className="btn bg-gradient-to-r from-blue-500 to-purple-500" onClick={sortByRemote}>Filter By Remote</button>
      </div>
      <div>
        {appliedJobData.map((job) => (
          <AppliedJob key={job.id} props={job}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default Applied;
