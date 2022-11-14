import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './materialUitable.css'
import { color } from '@mui/system';

function createData(
  name, id,date,clearnce
) {
  return { name, id,date,clearnce};
}

const rows = [
  createData('Gingerbread', 973249, "14 Apr 2021", "Pending"),
  createData('Eclair', 4006249, "08 March 2019", "Approved"),
  createData('Cupcake', 3236124, "23 June 2022", "Delivered"),
  createData('Gingerbread', 2361253, "13 Aug 2020", "Approved"),
];

export default function BasicTable() {
  const ColorSelect =(clearnce)=>{
    if(clearnce==="Approved"){
      return{
        // background: "#64b5f6",
        fontWeight: "bolder", 
        color: "green",
        fontStyle: "italic"
    }
    }
    else if(clearnce==="Pending"){
      return{
        fontWeight: "bolder", 
        color: "brown",
        fontStyle: "italic"
    }
    }
  else if(clearnce=="Delivered"){
    return{
      fontWeight: "bolder", 
      color: "purple",
      fontStyle: "italic"
    }
  }
  }
  return (
    <div className='tableData' style={{marginBottom: "2rem", marginTop: "2rem"}} >
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow sx={{
        "& th": {
          color: "green",
          fontWeight: "bolder",
          fontSize: "1rem"
        }
      }}>
            <TableCell>Product</TableCell>
            <TableCell align="left">Id</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Clearnce</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left" style={ColorSelect(row.clearnce)}>{row.clearnce}</TableCell>
              <TableCell align="left" style={{color: "red", fontWeight: "bolder", fontStyle: "italic"}}>Details</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}