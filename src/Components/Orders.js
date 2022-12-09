
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
import { useNavigate } from "react-router-dom";
import DetailsCard from "./DetailsCard";

function Orders() {
const[orders, setOrders]= useState([])
const detailNav= useNavigate()

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
  console.log(orders)
  
return(
  <>
    <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead >
              <TableRow>
                <TableCell>Id</TableCell>
                {/* <TableCell  align="right">Sender Name</TableCell> */}
                <TableCell align="right">Reciever Name</TableCell>
                <TableCell align="right">Package Type</TableCell>
                {/* <TableCell align="right">NumberOf Kgs</TableCell> */}
                {/* <TableCell align="right">PickUp Location</TableCell> */}
                {/* <TableCell align="right">Drop Off Location</TableCell> */}
                {/* <TableCell align="right">Date</TableCell> */}
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
                  {/* <TableCell align="right">{row.sender_name}</TableCell> */}
                  <TableCell align="right">{row.receiver_name}</TableCell>
                  <TableCell align="right">{row.package_type}</TableCell>
                  {/* <TableCell align="right">{row.number_of_kgs}</TableCell> */}
                  {/* <TableCell align="right">{row.pick_up_location}</TableCell> */}
                  {/* <TableCell align="right">{row.drop_off_location}</TableCell> */}
                  {/* <TableCell align="right">{row.date}</TableCell> */}
                  <TableCell align="right"><Link to="/orders/:id">{row.view}</Link></TableCell>
                  <button onClick={() => {deleteOrder (row.id)}} type="button display in-line padding: 15px" className="btn-danger btn-xsm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                  </button>
                  <button onClick={()=>{detailNav("./" + row.id)}}>
                  <Link
              to={`/order/${row.id}`}
              onClick={() => <DetailsCard key={row.id} />}
              target="blank"
            >
            </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </button>
                  <button className="edit-order" 
                  onClick={()=>{detailNav(`/updateorder/${row.id}`)}}
                  >
                  {/* <Link
              to={`/updateorder/:id`}
              onClick={() => <UpdateOrder key={row.id} />}
              target="blank"
            >
            </Link> */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                  </button>
 
                </TableRow>
              ))}
            </TableBody>
          </Table>
    </TableContainer>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={()=>{detailNav("/")}} >Log out</button>
  </>
  
  );
  
}

export default Orders;