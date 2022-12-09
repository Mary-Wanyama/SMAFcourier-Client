import { useState } from "react";
import { useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./AdminDash.css"

function AdminDash() {
        const[orders, setOrders]= useState([])
        // const detailNav= useNavigate()
        
        useEffect(() => {
          getOrders();
        }, []);
        
        async function getOrders() {
          let result = await fetch("http://127.0.0.1:4000/orders");
          result = await result.json();
          setOrders(result);
        }
  return (
    <>
    <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead >
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Reciever Name</TableCell>
                <TableCell align="right">Package Type</TableCell>
                <TableCell align="right">NumberOf Kgs</TableCell>
                <TableCell align="right">PickUp Location</TableCell>
                <TableCell align="right">Drop Off Location</TableCell>
                <TableCell align="right">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.receiver_name}</TableCell>
                  <TableCell align="right">{row.package_type}</TableCell>
                  <TableCell align="right">{row.number_of_kgs}</TableCell>
                  <TableCell align="right">{row.pick_up_location}</TableCell>
                  <TableCell align="right">{row.drop_off_location}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
    </TableContainer>
  </>
  
  );
}

export default AdminDash



  
