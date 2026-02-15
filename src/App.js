import './App.css';
import Navbar from "./components/Navbar";
import EmployeeDirectory from "./components/EmployeeDirectory";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <header> </header>
        <Navbar />
         <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/employeedirectory" element={<EmployeeDirectory />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          </Routes>
      
         </div>
      </div>
    </div>
  );
}

export default App;
