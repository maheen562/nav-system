import './App.css';
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
