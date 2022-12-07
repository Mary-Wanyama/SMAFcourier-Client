// import React, { useState } from 'react'
// import {useParams } from "react-router-dom";

// // function DetailsCard({orders}) {
// //     const params = useParams();
// //     const parcel = orders.find((order) => order.id === params.id);   
// //     console.log(parcel)
// //   return (
// //     <div>
// //         <h1>price: {parcel.price}</h1>
// //     </div>
// //   )
// // }

// function  DetailsCard(){
// const [parcel, setParcel] = useState()

// }

// export default DetailsCard


import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";



function DetailsCard() {
  const [{ data: parcel, error, status }, setParcel] = useState({
    data: {},
    error: "",
    status: "pending",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`/order/${id}`).then((response) => {
      if (response.ok) {
        response.json().then((parcel) => {
          console.log(parcel);
            setParcel({ data:   parcel, error: "", status: "resolved" });
        });
        // console.log(receipt);
      } else {
        response.json().then((err) =>
            setParcel({
            data: "not found",
            error: err.error,
            status: "rejected",
          })
        );
      }
    });
  }, [id]);

  
  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;

  return (
    <>
    {/* <Navbar /> */}
      <div className="restbody">
        <div className="container bg-darksalmon">
          <div className="card restcards" key={ parcel.id}>
            <div className="card-body">
              <div className=" card receiptDetails">
                <div  className="sec1card">
                  <h5 className="card-title text-center rec_no">
                    <strong>Receipt</strong>: { parcel.sender_name}
                  </h5>
                  <p className="card-text text-center">
                    <strong>Sender</strong>:  { parcel.receiver_name}
                  </p>
                  <p className="card-text text-center">
                    <strong>Receiver</strong>: {  parcel.package_type}
                  </p>
                  <p className="card-text text-center">
                    <strong>Nature of Goods</strong>:{" "}
{ parcel.number_of_kgs}
                  </p>
                </div>
                <div className="sec2card">
                  <p className="card-text text-center">
                    <strong>Pickup</strong>: {  parcel.pick_up_location}
                  </p>
                  <p className="card-text text-center">
                    <strong>Destination</strong>:{  parcel.drop_off_location}
                  </p>
                  <p className="card-text text-center">
                    <strong>Date</strong>: { parcel.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='account'>
      <Link
              to="/dashboard"
              onClick={ () => <Dashboard /> }
            >
              <button className="btn btn-primary back-btn">Back</button>
            </Link>
        </div> */}
    </>
  );
}
export default DetailsCard;