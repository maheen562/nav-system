//table defined from tanstack table, data from dummyjson.com, and react-router-dom for navigation.
//https://www.youtube.com/watch?v=hson9BXU9F8&list=PLC3y8-rFHvwgWTSrDiwmUsl4ZvipOw9Cz&index=3
//https://www.youtube.com/watch?v=_Mnk2LB6g6k&list=PLcuAByNrzwnj1az88-vpnwj-tDp4eCwXi&index=16

import React, { useMemo, useEffect, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table";
import { FormControl, Select, MenuItem } from "@mui/material";
import FilterFunction from "./FilterFunction";

const fallbackData = [];

export default function EmployeeDirectory() {
  const [employee, setEmployee] = useState([]);

  const columns = useMemo(
    () => [
      
      { id: 'id', accessorKey: 'id', header: 'ID' },
      { id: 'name', accessorKey: 'name', header: 'Name' },
      { id: 'department', accessorKey: 'department', header: 'Department', enableColumnFilter: true  },
      { id: 'position', accessorKey: 'position', header: 'Position' },
      { id: 'email', accessorKey: 'email', header: 'Email' },
      { id: 'status', accessorKey: 'status', header: 'Status', enableColumnFilter: true },     ],
      [],
    
  );

  useEffect(() => {
    fetch("https://dummyjson.com/c/092c-8ec9-4627-9bb4")
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  }, []);

  const [columnFilters,setColumnFilters] = useState([]);
  const [rowSelection, setRowSelection] = useState({});

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

  const statusOptions = ['All', 'Active', 'On Leave', 'Remote'];
  const departmentOptions = ['All', 'Engineering', 'Marketing', 'Sales', 'HR'];

  return (
    <>
        <div>   
            <h1> Employee Directory </h1>
        </div>
      <br />
      {/* <input type='text' value={columnFilters} onChange={(e) => setColumnFilters(e.target.value)} /> */}
      <FilterFunction column={table.getColumn("name")} table={table} />
      <br />
      
        {table.getFilteredRowModel().rows.length === 0 ? (
        <div>No results found.</div>
        ) : (
        <p>Showing {table.getFilteredRowModel().rows.length} of {employee.length} employees</p>
        )}
    
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
                {header.column.columnDef.enableColumnFilter && (
                    <div style={{ marginTop: "8px" }}>
                    <FormControl fullWidth size="small">
                        <Select
                        value={header.column.getFilterValue() ?? 'All'}
                        onChange={(e) => {
                            const value = e.target.value === 'All' ? '' : e.target.value;
                            header.column.setFilterValue(value);
                        }}
                        displayEmpty
                        style={{ background: "white", fontSize: "0.9em" }}
                        >
                        {header.id === 'status' && 
                            statusOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                            ))
                        }
                        {header.id === 'department' && 
                            departmentOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                            ))
                        }
                        </Select>
                    </FormControl>
                    </div>
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
