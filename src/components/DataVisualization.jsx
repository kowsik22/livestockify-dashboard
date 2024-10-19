// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";

// const data = [
//   { name: "Jan", temperature: 25, humidity: 60, ammonia: 10 },
//   { name: "Feb", temperature: 26, humidity: 65, ammonia: 12 },
//   { name: "Mar", temperature: 27, humidity: 70, ammonia: 15 },
//   { name: "Apr", temperature: 28, humidity: 75, ammonia: 18 },
//   { name: "May", temperature: 29, humidity: 80, ammonia: 20 },
//   { name: "june", temperature: 33, humidity: 90, ammonia: 28 },
// ];

// const DataVisualization = () => {
//   return (
//     <div className="section">
//       <h3>Data Visualization</h3>
//       <LineChart className="line" width={900} height={600} data={data}>
//         <XAxis dataKey="name" />
//         <YAxis />
//         <CartesianGrid stroke="#ccc" />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
//         <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
//         <Line type="monotone" dataKey="ammonia" stroke="#34A8FF" />
//       </LineChart>
//     </div>
//   );
// };

// export default DataVisualization;

import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", temperature: 25, humidity: 60, ammonia: 10 },
  { name: "Feb", temperature: 26, humidity: 65, ammonia: 12 },
  { name: "Mar", temperature: 27, humidity: 70, ammonia: 15 },
  { name: "Apr", temperature: 28, humidity: 75, ammonia: 18 },
  { name: "May", temperature: 29, humidity: 80, ammonia: 20 },
  { name: "June", temperature: 33, humidity: 90, ammonia: 28 },
];

const DataVisualization = () => {
  const [chartWidth, setChartWidth] = useState(900);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setChartWidth(window.innerWidth - 100); // Reducing width for small screens
      } else {
        setChartWidth(900);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize the width on load

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="section">
      <h3>Data Visualization</h3>
      <LineChart className="line" width={chartWidth} height={600} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#ccc" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
        <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
        <Line type="monotone" dataKey="ammonia" stroke="#34A8FF" />
      </LineChart>
    </div>
  );
};

export default DataVisualization;
