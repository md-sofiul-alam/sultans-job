import React, { useEffect, useState } from 'react';
import { useLoaderData } from "react-router-dom";

const Jobcategory = () => {
    const [data, setData] =useState([])
 const dataLoader= async ()=>{
    const res =await fetch('jobcategory.json');
    setData(res.json());
    }
   useEffect(dataLoader(),[])

    return (
        <div>
            <h1>from job category</h1>
        </div>
    );
};

export default Jobcategory;