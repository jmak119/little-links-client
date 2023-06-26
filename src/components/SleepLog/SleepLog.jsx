import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DenseTable( {sleepLog} ) {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 320 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><span style={{ color: '#FFFFFF' }}>Start Time</span></TableCell>
            <TableCell align="center"><span style={{ color: '#FFFFFF' }}>End Time</span></TableCell>
            <TableCell align="center"><span style={{ color: '#FFFFFF' }}>Comments</span></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sleepLog.map((routine) => (
            <TableRow className='table-row'
              key={sleepLog.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{routine.start_time}</TableCell>
              <TableCell align="center">{routine.end_time}</TableCell>
              <TableCell align="center">{routine.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
