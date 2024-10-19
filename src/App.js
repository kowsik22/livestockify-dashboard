import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FarmOverview from "./components/FarmOverview";
import DeviceManagement from "./components/DeviceManagement";
import DataVisualization from "./components/DataVisualization";
import AlertsNotifications from "./components/AlertsNotifications";
import { NavLink } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div className="container">
        <div className="header">
          <h2>Livestockify Dashboard</h2>
          <button className="export-btn">Export Data</button>
        </div>

        <div className="tabs">
          <NavLink
            to="/farm-overview"
            className={({ isActive }) =>
              isActive ? "tab-link active-tab" : "tab-link"
            }
          >
            Farm Overview
          </NavLink>
          <NavLink
            to="/device-management"
            className={({ isActive }) =>
              isActive ? "tab-link active-tab" : "tab-link"
            }
          >
            Device Management
          </NavLink>
          <NavLink
            to="/data-visualization"
            className={({ isActive }) =>
              isActive ? "tab-link active-tab" : "tab-link"
            }
          >
            Data Visualization
          </NavLink>
          <NavLink
            to="/alerts-notifications"
            className={({ isActive }) =>
              isActive ? "tab-link active-tab" : "tab-link"
            }
          >
            Alerts & Notifications
          </NavLink>
        </div>

        <Routes>
          <Route path="/farm-overview" element={<FarmOverview />} />
          <Route path="/device-management" element={<DeviceManagement />} />
          <Route path="/data-visualization" element={<DataVisualization />} />
          <Route
            path="/alerts-notifications"
            element={<AlertsNotifications />}
          />

          <Route path="/" element={<FarmOverview />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
