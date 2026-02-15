import React, { use, useEffect, useState } from 'react';

export default function EmployeeDirectory() {

    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/c/092c-8ec9-4627-9bb4")
        .then(res => res.json())
        .then(data => setEmployee(data));
    }, []);
    return (
        <>
        <h1> Employee Directory </h1>
        {employee.map(emp => (
            <div key={emp.id}>
            <p>{emp.name} - Department: {emp.department}</p>
            </div>
        ))}

        </>
    
)}