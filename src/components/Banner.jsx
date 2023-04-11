import React from 'react';

const Banner = () => {
    return (
        <div className='grid lg:grid-cols-7 container mx-auto mt-10 mb-16 gap-10 w-11/12 bg-blue-50 p-6 md:p -0 md:pl-10 rounded-xl'>
            <div className='lg:col-span-3'>
            <h1 className='text-7xl font-bold'>One Step <br /> Closer To Your <br /><span className='text-blue-700'>Dream Job</span></h1>
            <p className='text-lg text-gray-700 mt-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 ml-24 lg:ml-0 rounded-lg text-lg text-white py-2 px-4 font-medium mt-10">Get Started</button>
            </div>
            <img className='rounded-xl lg:col-span-4 w-11/12 h-full' src="https://www.itresourcescorp.com/wp-content/uploads/2022/05/AdobeStock_310133736.jpeg" alt="" />
        </div>
    );
};

export default Banner;