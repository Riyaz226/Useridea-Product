import React, { useState } from "react";
import {Link,useNavigate} from 'react-router-dom'
import '../Style.css'

// Material UI Imports
import {
  TextField,
  Button,
  Input,
  Checkbox,
  Alert,
  Stack,
  Grid,
  Card,
  CardContent,
  Typography
} from "@mui/material";

const Home=()=>{
  const[id,idchange]=useState("");
  const[images,imagesChange]=useState("");
  const[title,titleChange]=useState("");  
  const[price,priceChange]=useState("");
   const[feacture,feactureChange]=useState("");
   const[feacture2,feacture2Change]=useState("");
   const[feacture3,feacture3Change]=useState("");
   const[year,yearChange]=useState("");
   const[date,dateChange]=useState("");
   const[active,activeChange]=useState(true);
    const[validation,valChange]=useState(false);
    
const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata={images,title,price,feacture,feacture2,feacture3,year,active};
       
      fetch("http://localhost:3000/products",{
        method:'POST',
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/product/display');
      }).catch((err)=>{
        console.log(err.message)
      })
  }


        
  return (
 <div className="ui">
<Card style={{ maxWidth: 845, padding: "17px 5px", margin: "25px auto",marginTop:"188",
boxShadow:' 5px 10px 8px 10px #888888' }}>
<Grid container display={"flex"} justifyContent={"space-around"}>  

  <Grid item>
     <CardContent sx={{ maxWidth: 345}}>
   <div class="clock">
  <div>
    <div class="info date"></div>
    <div class="info day"></div>
  </div>
  <div class="dot"></div>
  <div>
    <div class="hour-hand"></div>
    <div class="minute-hand"></div>
    <div class="second-hand"></div>
  </div>
  <div>
    <span class="h3">3</span>
    <span class="h6">6</span>
    <span class="h9">9</span>
    <span class="h12">12</span>
  </div>
  <div class="diallines"></div>
</div>

<div id="clock">
    <p class="date">date</p>
    <p class="time">Time</p>
</div>

</CardContent>
</Grid>

<Grid item>
<form className="container" onSubmit={handlesubmit}>
 <CardContent sx={{ maxWidth: 458,marginRight:1}}>
  
  <TextField
  type={'text'}
  variant='standard'
  fullWidth required
  value={id} disabled="disabled"
  />

       <TextField
       type={'file'} 
       variant='standard'
       label="File Choose"
        fullWidth required
        value={images}     onChange={e=>imagesChange(e.target.value)} 
      />


  <TextField
    type={'type'} 
       variant='standard'
       label="Title"  
       onMouseDown={e=>valChange(true)}
       onChange={e=>titleChange(e.target.value)} 
      placeholder='Enter The Title' fullWidth required 
      value={title} 
    >
        {title.length==0 && validation && <span className="text-danger">Enter The Title</span>}
  </TextField>


  <TextField
    type={'type'} 
       variant='standard'
       label="Price"  
       onMouseDown={e=>valChange(true)}
       onChange={e=>priceChange(e.target.value)} 
      placeholder='Enter The Price' fullWidth required 
      value={price} 
    >
  </TextField>

  <TextField
    type={'type'} 
       variant='standard'
       label="Feacture"  
      placeholder='Enter Extra Add ' fullWidth required 
      onChange={e=>feactureChange(e.target.value)} 
      value={feacture} 
   />
     
 
  <TextField
    type={'type'} 
       variant='standard'
       label="Feacture 2"  
      placeholder='Enter Extra 2 Add' fullWidth required 
      onChange={e=>feacture2Change(e.target.value)} 
      value={feacture2}
  />
         
  
  <TextField
    type={'type'} 
       variant='standard'
       label="Feacture 3"  
      placeholder='Enter Extra 2 Add' fullWidth required 
      onChange={e=>feacture3Change(e.target.value)} 
      value={feacture3}
  />

  <TextField
    type={'type'} 
       variant='standard'
       label="Warenty Year"  
      placeholder='Enter Warenty ' fullWidth required 
      onChange={e=>yearChange(e.target.value)} 
      value={year}
  />


<TextField
    type={'date'} 
       variant='standard'
       label="Date"  
       fullWidth required 
      onChange={e=>dateChange(e.target.value)} 
      value={date}
  />

      <div className="col-lg-12">
                    <div className="form-check">
                     <input checked={active} onChange={e=>activeChange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                  <label  className="form-check-label">Is Active</label>
                                  
            </div>
         </div>
        
                <div className="col-lg-12">
                              <div className="form-group">
                                 <button className="btn btn-success" type="submit">Save</button>
                                 <Link to="/products/" className="btn btn-danger">Back</Link>
                              </div>
                          </div>
  
             </CardContent> 
 </form> 

   </Grid>
          
       </Grid>        
        </Card>
        </div>   
  )
}

export default Home