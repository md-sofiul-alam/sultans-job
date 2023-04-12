import React, { useState } from 'react';
import Job from './Job';

const Featuresjob = ({props}) => {
    const [jobs, setJobs]= useState(props.slice(0,4));
    const [more, setMore]= useState(false);
    const seeMore =()=> {setMore(true); setJobs(props)};
    return (
        <div className='container mx-auto md:px-16 mt-16 mb-10 px-2'>
            <h1 className='text-4xl font-bold text-center my-4'>Featured Jobs</h1>
            <p className='text-xl text-gray-500 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 container mx-auto p-6 lg:px-16'>
                {
                 jobs.map(job=> <Job key={job.id} props={job}></Job>)   
                }

            </div>
            <div className='flex justify-center'>
            <button className={`bg-gradient-to-r from-blue-500 to-purple-500 text-xl py-2 px-4 rounded-md mx-auto text-white ${more && "hidden"}`} onClick={seeMore}>See All</button>
            </div>
        </div>
    );
};

export default Featuresjob;