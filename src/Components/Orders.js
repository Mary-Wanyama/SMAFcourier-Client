// import React from "react";

// const Orders = () => {
//   return (
//     <>
//       <h1>Order List </h1>
//     </>
//   );
// };

// export default Orders;


import { useState } from "react";
import { useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link }from 'react-router-dom';

function Orders() {
const[orders, setOrders]= useState([])

// useEffect(()=>{
//     fetch("http://127.0.0.1:4000/orders")
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data)
//     })

// },[])
useEffect(() => {
  getOrders();
}, []);

async function getOrders() {
  let result = await fetch("http://127.0.0.1:4000/orders");
  result = await result.json();
  setOrders(result);
}

function deleteOrder(id) {
  fetch(`http://127.0.0.1:4000/orders/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(r => r.json())
  .then(()=> { const deleting = orders.filter((order) => order.id !== id)
    setOrders(deleting)



  })

  .catch(err=> console.log(err))
  alert("delete was successful")

}


return(
  <>
    <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableHead>Orders</TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Package Type</TableCell>
                <TableCell align="right">Pick Up Location</TableCell>
                <TableCell align="right">Drop Off Point</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Departure Time</TableCell>
                <TableCell align="right">Arrival Time</TableCell>
                <TableCell align="right">Number Of Kgs</TableCell>
                <TableCell align="right">Price</TableCell>



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
                  <TableCell align="right">{row.package_type}</TableCell>
                  <TableCell align="right">{row.pick_up_location}</TableCell>
                  <TableCell align="right">{row.drop_off_location}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">{row.departute_time}</TableCell>
                  <TableCell align="right">{row.arrival_time}</TableCell>
                  <TableCell align="right">{row.number_of_kgs}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right"><Link to="/orders/:id">{row.view}</Link></TableCell>
                  <button onClick={() => {deleteOrder (row.id)}} type="button display in-line padding: 15px" className="btn-danger btn-xsm">DELETE</button>

                </TableRow>
              ))}
            </TableBody>
          </Table>
    </TableContainer>
  </>
  );
}



export default Orders;