import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDatils = () => {
    const jobDetailsData = useLoaderData();
    console.log(jobDetailsData);
    return (
        <div>
            
        </div>
    );
};

export default JobDatils;