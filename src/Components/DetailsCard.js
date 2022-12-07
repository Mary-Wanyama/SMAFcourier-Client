import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DetailsCard.css"

function DetailsCard() {
  const [{ data: parcel, error }, setParcel] = useState({
    data: {},
    error: "",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:4000/orders/${id}`).then((response) => {
      if (response.ok) {
        response.json().then((parcel) => {
          console.log(parcel);
            setParcel({ data:   parcel, error: "" });
        });
        
      } else {
        response.json().then((err) =>
            setParcel({
            data: "not found",
            error: err.error,
          })
        );
      }
    });
  }, [id]);

  return (
    <>
      <div className="restbody">
        <div className="container bg-darksalmon">
          <div className="card restcards" key={ parcel.id}>
            <div className="card-body">
              <div className=" card receiptDetails">
                  <h5 className="card-title text-center rec_no">
                    <strong>Sender Name</strong>: { parcel.sender_name}
                  </h5>
                  <p className="card-text text-center">
                    <strong>Receiver Name</strong>:  { parcel.receiver_name}
                  </p>
                  <p className="card-text text-center">
                    <strong>Package Type</strong>: {  parcel.package_type}
                  </p>
                  <p className="card-text text-center">
                    <strong>Number of kgs</strong>:{ parcel.number_of_kgs}
                  </p>
                  <p className="card-text text-center">
                    <strong>Pick up location</strong>: {  parcel.pick_up_location}
                  </p>
                  <p className="card-text text-center">
                    <strong>Drop off location</strong>:{  parcel.drop_off_location}
                  </p>
                  <p className="card-text text-center">
                    <strong>Date</strong>: { parcel.date}
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DetailsCard;