import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

function UpdateOrder() {
    const {id} = useParams();


    const[data,setData]= useState({
         package_type: "",
         receiver_name:"",
         pick_up_location:"",
         drop_off_location:"",
         date:"",
         number_of_kgs:""  
   })

   function handleChange(e){


       setData({...setData, [e.target.id]: e.target.value});
   }

   useEffect(() => {

       fetch(`http://127.0.0.1:4000/orders/${id}`)
         .then((response) => response.json())
         .then((data) => {

             setData(data)
            console.log(data)
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
     body:JSON.stringify(data)
})
.then(resp => resp.json())
.then(data => {
console.log(data)
setData(data)
})
   }


   return(
       <div>

           <form  onSubmit={(e)=>handleSubmit(e)}>
           <label>   Receiver Name: </label>
           <input id="receiver-name" value={data.receiver_name} onChange={e=>handleChange(e)}/>
           <label > Pick-up location: </label>
           <input id="pickup-location"onChange={e=>handleChange(e)}
           value={data.pick_up_location}/>
           <label >Drop-off Location :  </label>
           <input value={data.drop_off_location} id="drop-off-location"onChange={e=>handleChange(e)} />
           <label >Package Type:  </label>
           <input value={data.package_type} id="package-type"onChange={e=>handleChange(e)} />
           <label >Number of kgs:  </label>
           <input value={data.number_of_kgs} id="package-details"onChange={e=>handleChange(e)} />
           <label >Date:  </label>
           <input value={data.date} id="package-details"onChange={e=>handleChange(e)} />
           <button type="button display in-line padding: 15px" className="btn btn-primary">Update</button>

       </form>

       </div>



   )
}


export default UpdateOrder