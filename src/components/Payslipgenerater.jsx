import React from 'react'
import { useEffect, useState } from 'react';
import { Grid, FormControl, InputLabel, Select, MenuItem, Typography, Button } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';

function Payslipgenerater() {

    const[selectedYear, setselectedYear] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedNumber, setSelectNumber] = useState('');
    const navigate = useNavigate();

const years = Array.from({length:81},(_ , i) => 1980 + i);
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const numbers = Array.from ({length:1000}, (_, i) => i + 1);

function handleonclick() {
    navigate('/payslip')
}
  return (
    <div style={{ textAlign: 'center', margin: '10px' }}>
        <Typography variant="h4" gutterBottom  >
        PaySlip Generator
      </Typography>
        <Grid container spacing={2} justifyContent="left" marginLeft={'160px'} padding={'20px'} marginTop={'10px'}>
        <Grid item >
        <FormControl>
        <InputLabel required= "true" shrink={false} id="year-label">Year</InputLabel>
          <Select id="Year" labelId="year-label" value={selectedYear} onChange={(e) => setselectedYear(e.target.value)}  style={{width:'300px'}}>
                  {years.map((year) =>  (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
          </Select>
          </FormControl> 
        </Grid>
        

        <Grid item >
        <FormControl>
        <InputLabel required= "true" shrink={false} id="month-label">Month</InputLabel>
          <Select id="Month" labelId="month-label" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}  style={{width:'300px'}}>
                  {months.map((month) =>  (
                    <MenuItem key={month} value={month}>
                      {month}
                    </MenuItem>
                  ))}
          </Select>
          </FormControl> 
        </Grid>

        <Grid item >
          <FormControl>
        <InputLabel required= "true" shrink={false} id="empId-label">Employee Id</InputLabel>
          <Select id="EmployeeId" labelId="empId-label" value={selectedNumber} onChange={(e) => setSelectNumber(e.target.value)}  style={{width:'300px'}}>
                  {numbers.map((number) =>  (
                    <MenuItem key={number} value={number}>
                      {number}
                    </MenuItem>
                  ))}
          </Select>
          </FormControl> 
        </Grid>
        </Grid>

        <Grid container spacing={2} justifyContent="center">
        <Grid item >
          <Button variant='outlined' size = 'large' onClick={handleonclick}>Generate</Button>
          </Grid>
        </Grid>

    </div>
  )
}

export default Payslipgenerater