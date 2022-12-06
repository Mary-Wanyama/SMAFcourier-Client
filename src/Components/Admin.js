import React from 'react'

function Admin() {
  return (
    <div className='Admin'>
         <div className="dashboard">
            <section className="dashboard__content">
             <div className="history__container ">
             <div className="kevooh">
             <div className="sendit-mainn"><p>Placed Parcel orders</p></div>
             </div>
             <br />
                 <div className="rows">
                   <div className="history__item velda_header">Customer Name</div>
                   <div className="history__item velda_header">Drop off Point</div>
                   <div className="history__item velda_header ">Pick up point</div>
                   <div className="history__item velda_header ">Current status</div>
                   <div className="history__item velda_header ">Edit</div>
                 </div>
               </div>
             {/* <div id="row_data" className="row-data"></div> */}
            </section>
         </div>
        <div className="modal-overlay closed" id="modal-overlay"></div>
        <div className="modal closed" id="modal">
          <button className="close-button" id="close-button">X</button>
          <div className="modal-guts">
          <h1>Update parcel</h1>
          <div id="alert" role="alert"></div>
           <form id="admineditform" >
             <div className="form-group">
             <label for="Current Status">Current Status</label><br />
             <select className="form-control" id="adminstatus">
               <option value="Pending"> Pending </option>
               <option value="completed"> Complete </option>
               <option value="declined"> Decline </option>
               <option value="accepted"> Accept </option>
               <option value="In Transit"> In Transit </option>
             </select>
        </div>
      </form>
     </div>
    </div>
    </div>
  )
}

export default Admin;