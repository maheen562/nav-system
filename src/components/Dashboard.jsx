/**
 * Dashboard component 
 * @returns {JSX.Element} The rendered Dashboard component.
 * */
import React from 'react'
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

export default function Dashboard() {
  return (
    <>
        <h1>Dashboard</h1>
        <br />
        <h2>Welcome to the Dashboard page.</h2>
        <br />
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 20 }}>
                    Total Employees: 15
                </Typography>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 20 }}>
                    Employees Active: 12
                </Typography>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 20 }}>    
                    Employees on Leave: 3
                </Typography>  

                <CardActions>
                    <Button variant="contained" size="large" href="/employeedirectory">Go to Employee Directory</Button>
                </CardActions>

            </CardContent>
        </Card>

    </>

  )
}
