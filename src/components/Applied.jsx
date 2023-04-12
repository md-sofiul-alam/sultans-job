import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getAppliedJob } from './utility';
import AppliedJob from './AppliedJob';

const Applied = () => {
    const loadedData= useLoaderData();
    const [appliedJobData, setAppliedJobData]=useState([]);

    useEffect(()=>{
        const storedappliedJobData = getAppliedJob();
        const appliedJob = [];
        for (const id in storedappliedJobData){
            const addedJob = loadedData.find(job=>job.id===id)
            if(addedJob){
                appliedJob.push(addedJob);
            }
            setAppliedJobData(appliedJob)
        }
    },[])
    console.log(appliedJobData)
    return (
        <div>
            <h1 className="text-3xl font-bold bg-blue-100 text-blue-800 text-center mt-20 py-24 content-center">Job Details</h1>
            {
            appliedJobData.map(job=><AppliedJob key={job.id} props={job}></AppliedJob>)
            }
        </div>
    );
};

export default Applied;