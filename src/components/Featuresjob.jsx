import React from 'react';
import Job from './Job';

const Featuresjob = ({props}) => {
    return (
        <div className='container mx-auto md:px-16 mt-16 px-2'>
            <h1 className='text-4xl font-bold text-center my-4'>Featured Jobs</h1>
            <p className='text-xl text-gray-500 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 container mx-auto p-6 lg:px-16'>
                {
                 props.map(job=> <Job key={job.id} props={job}></Job>)   
                }

            </div>
        </div>
    );
};

export default Featuresjob;