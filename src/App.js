/**
 * App component serves as the main entry point of the application, setting up the layout 
 * and routing for the dashboard and employee directory.
 * It uses React Router for navigation and includes a Navbar component 
 * for consistent navigation across the app.
 * The Routes component defines the different routes available in the application, 
 * including a default route that redirects to the dashboard.
 * @returns {JSX.Element} The rendered App component.
 */

import Navbar from "./components/Navbar";
import EmployeeDirectory from "./components/EmployeeDirectory";
import Dashboard from "./components/Dashboard";
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <header> </header>
        <Navbar />
         <div style={{ flex: 1, padding: 20 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employeedirectory" element={<EmployeeDirectory />} />
            
          </Routes>
      
         </div>
      </div>
    </div>
  );
}

export default App;
