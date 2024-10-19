import React from "react";

const AlertsNotifications = () => {
  return (
    <div className="section">
      <h3 className="three">Alerts & Notifications</h3>
      <div className="alert">
        <h4>Alert 1</h4>
        <p>Temperature exceeded 30°C</p>
      </div>
      <div className="alert">
        <h4>Alert 2</h4>
        <p>Humidity exceeded 80%</p>
      </div>
      <div className="alert">
        <h4>Alert 3</h4>
        <p>Ammonia exceeded 20ppm</p>
      </div>
    </div>
  );
};

export default AlertsNotifications;
