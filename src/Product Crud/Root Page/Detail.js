import { useEffect, useState } from "react";
import {Link, useParams } from "react-router-dom";
import {
Box} from "@mui/material";

import FilterAltOffIcon from '@mui/icons-material/FilterAlt';

const Detail =()=>{
  const {proid}=useParams();

  const [prodata,prodatachange]=useState({})
  useEffect(() => {
      fetch("http://localhost:3000/products/" + proid).then((res) => {
          return res.json();
      }).then((resp) => {
          prodatachange(resp);
      }).catch((err) => {
          console.log(err.message);
      })
  }, []); 
  return (
    <Box 
display="flex"
flexDirection={"column"}
maxWidth={1200}
alignItems="center"
justifyCenter={"center"}
margin="auto"
marginTop={5}
backgroundColor={"lightgreen"}
borderRadious={25}
  boxShadow={"5px 5px 10px #ccc"}
    sx={{
      ":hover":{
       boxShadow:'10px 10px 20px #ccc',
    },
    }}
>
    <div>
        <div className="card-title">
            <h2 style={{"text-align":"center","fontFamily":"italic"}}><u>Product's Data</u></h2>
        </div>
        <div className="card-body"></div>

        {prodata &&
            <div>
                <h2>The Product name is : <b style={{"color":"blue","fontFamily":"italic"}}>{prodata.title}</b> ({prodata.price})&euro;</h2>
                <h3 style={{"fontFamily":"italic"}}>Contact Feacture:</h3>
                <h5>Feacture Is :<b style={{"color":"blue","fontFamily":"italic"}}> {prodata.feacture}</b></h5>
                <h5>Feacture 2 Is :<b style={{"color":"blue","fontFamily":"italic"}}> {prodata.feacture2}</b></h5>
                <h5>Feacture 3 Is :<b style={{"color":"blue","fontFamily":"italic"}}> {prodata.feacture3}</b></h5>
               <hr/>
               <h5>Warenty Year Is :<b style={{"color":"blue","fontFamily":"italic"}}> {prodata.year}</b></h5>
               
                <Link className="btn btn-danger" to="/product/display">Back to Listing</Link>
                {/* <Link to="/product/display" className="btn btn-success" id="add">Add New(+)</Link> */}

            </div>
            
        }
        
    </div>
 
    </Box>
    )
}
export default Detail
