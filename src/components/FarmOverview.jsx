import React from "react";

const FarmOverview = () => {
  return (
    <div className="section1">
      <h3>Farm Overview</h3>
      <div className="grid">
        <div className="metric">
          <h4>Temperature</h4>
          <p>25°C</p>
        </div>
        <div className="metric">
          <h4>Humidity</h4>
          <p>60%</p>
        </div>
        <div className="metric">
          <h4>Ammonia</h4>
          <p>10ppm</p>
        </div>
      </div>
    </div>
  );
};

export default FarmOverview;
