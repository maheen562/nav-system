//table defined from tanstack table, data from dummyjson.com, and react-router-dom for navigation.
//https://www.youtube.com/watch?v=hson9BXU9F8&list=PLC3y8-rFHvwgWTSrDiwmUsl4ZvipOw9Cz&index=3

import React, { useMemo, useEffect, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table";
import FilterFunction from "./FilterFunction";

const fallbackData = [];

export default function EmployeeDirectory() {
  const [employee, setEmployee] = useState([]);

  const columns = useMemo(
    () => [
      
      { id: 'id', accessorKey: 'id', header: 'ID' },
      { id: 'name', accessorKey: 'name', header: 'Name' },
      { id: 'department', accessorKey: 'department', header: 'Department' },
      { id: 'position', accessorKey: 'position', header: 'Position' },
      { id: 'email', accessorKey: 'email', header: 'Email' },
      { id: 'status', accessorKey: 'status', header: 'Status' },     ],
      [],
    
  );

  useEffect(() => {
    fetch("https://dummyjson.com/c/092c-8ec9-4627-9bb4")
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  }, []);

  const [columnFilters,setColumnFilters] = useState([]);

  const table = useReactTable({
    columns,
    data: employee ?? fallbackData, //also good to use a fallback array that is defined outside of the component (stable reference)
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
        columnFilters: columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,

  });


  return (
    <>
        <div>   
            <h1> Employee Directory </h1>
        </div>
      <br />
      {/* <input type='text' value={columnFilters} onChange={(e) => setColumnFilters(e.target.value)} /> */}
      <FilterFunction column={table.getColumn("name")} table={table} />
      <br />
      <p>Showing {table.getFilteredRowModel().rows.length} of {table.getRowCount()} employees</p>
      <table style={{ border: "solid 1px blue" }}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  style={{
                    borderBottom: "solid 3px red",
                    background: "aliceblue",
                    color: "black",
                    fontWeight: "bold",
                    padding: "10px",
                  }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getFilteredRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  style={{
                    border: "solid 1px gray",
                    padding: "10px",
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
