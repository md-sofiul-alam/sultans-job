import React from 'react';

const CatagorisedJob = ({data}) => {
    const {jobname, imglink, job}=data
    return (
        <div className='border rounded-md p-6 w-fit bg-blue-50'>
            <img className='w-fit max-h-10 mx-2 mb-6' src={imglink} alt="" />
            <h3 className='text-2xl font-medium mb-2'>{jobname}</h3>
            <p className='text-xl text-gray-500'>{job} Jobs Available</p>
        </div>
    );
};

export default CatagorisedJob;