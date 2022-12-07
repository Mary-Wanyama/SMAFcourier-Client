import React from 'react'
import {useParams } from "react-router-dom";

function DetailsCard({orders}) {
    const params = useParams();
    const parcel = orders.find((order) => order.id === params.id);   
    console.log(parcel)
  return (
    <div>
        <h1>price: {parcel.price}</h1>
    </div>
  )
}

export default DetailsCard