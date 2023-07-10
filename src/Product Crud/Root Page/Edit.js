import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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

const Edit=()=>{
 
  const { proid } = useParams();

  //const [empdata, empdatachange] = useState({});

//   useEffect(() => {
//     fetch("http://localhost:4000/products" + proid).then((res) => {
//         return res.json();
//     }).then((resp) => {
//         idchange(resp.id);
//         imagesChange(resp.name);
//         titleChange(resp.email);
//         pricechange(resp.phone);
//         feacturechange(resp.feacture)
//         feacturechange(resp.feacture2)
//         feacturechange(resp.feacture3)
//         yearchange(resp.year)
//         activechange(resp.isactive);
//     }).catch((err) => {
//         console.log(err.message);
//     })
// }, []);

  const[id,idchange]=useState("");
  const[images,imagesChange]=useState("");
  const[title,titleChange]=useState("");  
  const[price,pricechange]=useState("");
   const[feacture,feacturechange]=useState("");
   const[feacture2,feacture2change]=useState("");
   const[feacture3,feacture3change]=useState("");
   const[year,yearchange]=useState("");
   const[active,activechange]=useState(true);
    const[validation,valchange]=useState(false);
    

  const navigate=useNavigate();

  const handlesubmit=(e)=>{
    e.preventDefault();
    const prodata={id,images,title,price,feacture,feacture2,feacture3,year,active};
    

    fetch("http://localhost:3000/products/"+proid,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(prodata)
    }).then((res)=>{
      alert('Saved successfully.')
      navigate('/product/display');
    }).catch((err)=>{
      console.log(err.message)
    })

  }
  return (
 <div className="ui">
<Card style={{ maxWidth: 845, padding: "17px 5px", margin: "25px auto",marginTop:"48",
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
       label="Price"  
       onMouseDown={e=>valchange(true)}
       onChange={e=>titleChange(e.target.value)} 
      placeholder='Enter The Title' fullWidth required 
      value={title} 
    >
        {title.length==0 && validation && <span className="text-danger">Enter The Price</span>}
  </TextField>


  <TextField
    type={'type'} 
       variant='standard'
       label="Title"  
       onMouseDown={e=>valchange(true)}
       onChange={e=>pricechange(e.target.value)} 
      placeholder='Enter The Price' fullWidth required 
      value={price} 
    >
  </TextField>

  <TextField
    type={'type'} 
       variant='standard'
       label="Feacture"  
      placeholder='Enter Extra Add ' fullWidth required 
      onChange={e=>feacturechange(e.target.value)} 
      value={feacture} 
   />
     
 
  <TextField
    type={'type'} 
       variant='standard'
       label="Feacture 2"  
      placeholder='Enter Extra 2 Add' fullWidth required 
      onChange={e=>feacture2change(e.target.value)} 
      value={feacture2}
  />
         
  
  <TextField
    type={'type'} 
       variant='standard'
       label="Feacture 3"  
      placeholder='Enter Extra 2 Add' fullWidth required 
      onChange={e=>feacture3change(e.target.value)} 
      value={feacture3}
  />

  <TextField
    type={'type'} 
       variant='standard'
       label="Warenty Year"  
      placeholder='Enter Warenty ' fullWidth required 
      onChange={e=>yearchange(e.target.value)} 
      value={year}
  />

      <div className="col-lg-12">
                    <div className="form-check">
                     <input checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                  <label  className="form-check-label">Is Active</label>
                                  
            </div>
         </div>
                       
               <div className="col-lg-12">
                              <div className="form-group">
                                 <button className="btn btn-success" type="submit">Save</button>
                                 <Link to="/product/display" className="btn btn-danger">Back</Link>
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

export default Edit