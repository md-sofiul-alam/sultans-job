import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAppliedJob } from "./utility";
import AppliedJob from "./AppliedJob";

const Applied = () => {
  const loadedData = useLoaderData();
  const [appliedJobData, setAppliedJobData] = useState([]);
  const [sort,setSort]=useState(1);

  useEffect(() => {
    const storedappliedJobData = getAppliedJob();
    const appliedJob = [];
    for (const id in storedappliedJobData) {
      const addedJob = loadedData.find((job) => job.id === id);
      if (addedJob && sort ===1) {
        appliedJob.push(addedJob);
        setAppliedJobData(appliedJob);
      }
      else if (addedJob && sort ===2) {
        appliedJob.push(addedJob);
        setAppliedJobData(appliedJob.sort((a, b) => (a.jobtype > b.jobtype) ? 1 : -1));
      }
      else if (addedJob && sort ===3) {
        appliedJob.push(addedJob);
        setAppliedJobData(appliedJob.sort((a, b) => (a.jobtype > b.jobtype) ? -1 : 1));
      }
    }
  }, [sort]);
  const sortByOnsite =()=>setSort(2)
  const sortByRemote =()=>setSort(3)
  return (
    <div>
      <h1 className="text-3xl font-bold bg-blue-100 text-blue-800 text-center mt-20 py-24 content-center">
        Job Details
      </h1>
      <h1 className="btn btn-secondary" onClick={sortByOnsite}>
        Sort Onsite
      </h1>
      <h1 className="btn btn-secondary" onClick={sortByRemote}>
        Sort Remote
      </h1>
      {appliedJobData.map((job) => (
        <AppliedJob key={job.id} props={job}></AppliedJob>
      ))}
    </div>
  );
};

export default Applied;
