import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

const Statistics = () => {
  const chartsData = useLoaderData();
  return (
    <div className="container mx-auto mt-10 flex flex-col gap-6 justify-center">
        <h1 className="text-3xl bg-blue-100 text-blue-800 text-center">Statistics of Assign results  </h1>
      <div className="container mx-auto mt-10 flex flex-col gap-6 ">
        <RadarChart className="text-xl font-semibold mx-auto" outerRadius={90} width={250} height={270} data={chartsData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 60]} />
          <Radar
            name="Md Sofiul Alam"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </div>
    </div>
  );
};

export default Statistics;
