import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DenseTable( {toiletList} ) {
// console.log(toiletList);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 320 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Toileting Routine</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {toiletList.toiletList.map((routine) => (
            <TableRow
              key={toiletList.toiletList.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{routine.start_time}</TableCell>
              <TableCell align="center">{routine.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
