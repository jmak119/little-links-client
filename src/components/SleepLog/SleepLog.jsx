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
            <TableCell align="center">Start Time</TableCell>
            <TableCell align="center">End Time</TableCell>
            <TableCell align="center">Comments</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sleepLog.map((routine) => (
            <TableRow
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
