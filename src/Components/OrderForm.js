import React, {useState} from 'react'
import "../Css/OrderForm.css"
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel'
import "../Css/OrderForm.css"


function OrderForm() {

    // t.string "package_type"
    // t.string "pick_up_location"
    // t.string "drop_off_location"
    // t.string "date"
    // t.string "departute_time"
    // t.string "arrival_time"
    // t.integer "number_of_kgs"
    // t.integer "price"

  const [package_type, setPackage_Type] = useState('')
  const [pick_up_location, setPick_Up_Location] = useState('')
  const [number_of_kgs, setNumber_Of_Kgs] = useState('')
  const [drop_off_location, setDrop_Off_Location] = useState('')
  const [date, setDate] = useState('')
  const [departute_time, setDepartute_Time] = useState('')
  const [arrival_time, setArrival_Time] = useState('')
  const [price, setPrice] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://127.0.0.1:4000/orders',{
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
            package_type,
            pick_up_location,
            number_of_kgs,
            drop_off_location,
            departute_time,
            arrival_time,
            price,
            date
        }
      ),
    })
    .then((r) => r.json())
    navigate('/order')
  }

  return(
    <>
      <div className='order-form'>
        <form onSubmit={handleSubmit} className="form">
          <Box
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              style={{"background":"white",
              "padding":'20px',
              "marginTop":"10px",
              "marginBottom": '30px',
              "width":'100%',
              }}
            >
            <FormLabel
              style={{"justifyContent": 'center',
                "alignItems":"center",
                "display": "flex",
                "fontWeight": "bolder",
                "color": "black",
                "fontSize": "40px"
              }}
            >
              <h2> Send Your Delivery</h2>
            </FormLabel>
            <div className='class'>

            <TextField
                  id="outlined-password-input"
                  label="Kilograms"
                  value={number_of_kgs}
                  onChange={(e)=>setNumber_Of_Kgs(e.target.value)}
                />
              <TextField
                required
                id="outlined-required"
                label="Package Type"
                value={package_type}
                onChange={(e)=>setPackage_Type(e.target.value)}
              />
              <TextField
                id="outlined-disabled"
                label=" Drop Off Location"
                value={drop_off_location}
                onChange={(e)=>setDrop_Off_Location(e.target.value)}
              />
               <TextField
                id="outlined-disabled"
                label=" Departure Time"
                value={departute_time}
                onChange={(e)=>setDepartute_Time(e.target.value)}
              />
              </div>
           
              <div className='class'>
                <TextField
                  id="outlined-password-input"
                  label="Date"
                  value={date}
                  onChange={(e)=>setDate(e.target.value)}
                />
                <TextField
                  id="outlined-read-only-input"
                  label="Pick Up Location"
                  value={pick_up_location}
                  onChange={(e)=>setPick_Up_Location(e.target.value)}

                />
                <TextField
                  id="outlined-read-only-input"
                  label="Arrival Time"
                  value={arrival_time}
                  onChange={(e)=>setArrival_Time(e.target.value)}

                />
                <TextField
                  id="outlined-read-only-input"
                  label="Price"
                  value={price}
                  onChange={(e)=>setPrice(e.target.value)}

                />
                
                
              </div>
              <div>
                <Button className='orderbtn' type="submit" variant="contained" 
                // style={{
                //   "margin":"18px", "background-color": "#3897f0", "width": "462px", "padding": "15px", "margin-left":"10px" ,"display" : "center"
                // }}
                >Send Parcel</Button>
              </div>
            </Box>
        </form>
      </div>
    </>
  )

}

export default OrderForm;
