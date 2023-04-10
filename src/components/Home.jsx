import React from 'react';
import Banner from './Banner';
import Jobcategory from './Jobcategory';
import { useLoaderData } from 'react-router-dom';
import Featuresjob from './Featuresjob';

const Home = () => {
    const jobData= useLoaderData()
    return (
        <div>
           <Banner></Banner>
           <Jobcategory></Jobcategory>
           <Featuresjob props={jobData}></Featuresjob>
        </div>
    );
};

export default Home;