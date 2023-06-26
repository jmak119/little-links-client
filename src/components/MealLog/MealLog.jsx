import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import "./MealLog.scss";

export default function DenseTable({ mealLog }) {

  if (!mealLog) {
    return <span>Loading...</span>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 320 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><span style={{ color: '#FFFFFF' }}>Time</span></TableCell>
            <TableCell align="center"><span style={{ color: '#FFFFFF' }}>Description</span></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mealLog.map((meal) => (
            <TableRow className='table-row'
              key={mealLog.name}
              sx={{ 
                '&:last-child td, &:last-child th': { border: 0 },
                

               }}
            >
              <TableCell align="center">{meal.start_time}</TableCell>
              <TableCell align="center">{meal.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}