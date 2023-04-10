import React, { useEffect, useState } from "react";
import CatagorisedJob from "./CatagorisedJob";

const Jobcategory = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const dataLoader = async () => {
      const res = await fetch("jobcategory.json");
      const loadedData = await res.json();
      setDatas(loadedData);
    };
    dataLoader();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center ">Job Category List</h1>
        <p className="text-lg my-4 text-center text-gray-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-8 mx-auto justify-between p-6 gap-6 lg:pl-16">
        {
            datas.map(data=><CatagorisedJob key={data.id} data={data}></CatagorisedJob>)
        }
      </div>
    </div>
  );
};

export default Jobcategory;
