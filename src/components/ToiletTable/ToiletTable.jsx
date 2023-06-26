import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function DenseTable({ toiletList }) {

  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: '#3CCFC1',
        contrastText: '#FFFFFF'
      },
      secondary: {
        main: '#f44336',
      },
    },
  });

  if (!toiletList) {
    return <span>Loading...</span>;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 320 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center"><span style={{ color: '#FFFFFF' }}>Time</span></TableCell>
              <TableCell align="center"><span style={{ color: '#FFFFFF' }}>Toileting Routine</span></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {toiletList.map((routine) => (
              <TableRow className='table-row'
                key={toiletList.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">{routine.start_time}</TableCell>
                <TableCell align="center">{routine.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
