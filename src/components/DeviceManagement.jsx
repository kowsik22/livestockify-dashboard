import React, { useState } from "react";

const devices = [
  { id: 1, name: "Device 1", status: "online", battery: 80 },
  { id: 2, name: "Device 2", status: "offline", battery: 50 },
  { id: 3, name: "Device 3", status: "online", battery: 90 },
];

const DeviceManagement = () => {
  const [selectedDevice, setSelectedDevice] = useState(null);

  return (
    <div className="section">
      <h3>Device Management</h3>
      <p>Click on view details button for better understanding</p>

      <div className="grid">
        {devices.map((device) => (
          <div key={device.id} className="device-card">
            <h4>{device.name}</h4>
            <p>Status: {device.status}</p>
            <p>Battery: {device.battery}%</p>
            <button onClick={() => setSelectedDevice(device)}>
              View Details
            </button>
          </div>
        ))}
      </div>
      {selectedDevice && (
        <div className="device-details">
          <h4>Details of {selectedDevice.name} </h4>
          <p>Status: {selectedDevice.status}</p>
          <p>Battery: {selectedDevice.battery}%</p>
        </div>
      )}
    </div>
  );
};

export default DeviceManagement;
