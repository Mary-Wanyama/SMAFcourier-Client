import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

function UpdateOrder() {
    const {id} = useParams();


    const[order, setOrder]= useState({
         package_type: "",
         receiver_name:"",
         pick_up_location:"",
         drop_off_location:"",
         date:"",
         number_of_kgs:""  
   })

   function handleChange(e){


       setOrder({...setOrder, [e.target.id]: e.target.value});
   }

   useEffect(() => {

       fetch(`http://127.0.0.1:4000/orders/${id}`)
         .then((response) => response.json())
         .then((order) => {

             setOrder(order)
            console.log(order)
         })
         .catch((error) => console.log(error));
     }, [id])


     function handleSubmit(e) {
       e.preventDefault();
       fetch(`http://127.0.0.1:4000/orders/${id}`,{
         method:'PATCH',
         headers:{
            'Content-Type': 'application/json'
         },
     body:JSON.stringify(order)
})
.then(resp => resp.json())
.then(order => {
console.log(order)
setOrder(order)
})
   }


   return(
       <div>
           <form  onSubmit={(e)=>handleSubmit(e)}>
           <label>   Receiver Name: </label>
           <input id="receiver-name" value={order.receiver_name} onChange={e=>handleChange(e)}/>
           <label > Pick-up location: </label>
           <input id="pickup-location"onChange={e=>handleChange(e)}
           value={order.pick_up_location}/>
           <label >Drop-off Location :  </label>
           <input value={order.drop_off_location} id="drop-off-location"onChange={e=>handleChange(e)} />
           <label >Package Type:  </label>
           <input value={order.package_type} id="package-type"onChange={e=>handleChange(e)} />
           <label >Number of kgs:  </label>
           <input value={order.number_of_kgs} id="package-details"onChange={e=>handleChange(e)} />
           <label >Date:  </label>
           <input value={order.date} id="package-details"onChange={e=>handleChange(e)} />
           <button type="button display in-line padding: 15px" className="btn btn-primary" onClick={()=>{UpdateOrder()}}>Update</button>

       </form>

       </div>



   )
}


export default UpdateOrder