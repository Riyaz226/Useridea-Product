import React,{useEffect,useState} from "react";
import {Link,useNavigate} from 'react-router-dom'
import {
Box
} from "@mui/material";

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import '../Style.css';

function Home2() {
/* Data Display One*/
  const [data, setData2] = useState([]);
  fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((json) => {
      setData2(json);
    });

/* Display More Data And Filter*/    
 
const [userData,setUserData]=useState([]);
      const [filterData,setfilterData]=useState([]);
       const[query,setQuery]=useState('');
      useEffect(() => {
      const getUserdata=async()=>{
        const reqData=await fetch('https://api.escuelajs.co/api/v1/products');
        const resData=await reqData.json();
       //console.log(resData);
       setUserData(resData);
       setfilterData(resData);
      }
      getUserdata();
      },[]);
    
      const handlesearch=(event)=>{
        const getSearch=event.target.value;
        setQuery(getSearch);
        //console.log(getSearch);
    
        if(getSearch.length>0){
             const searchdata=userData.filter((item)=>item.title.toLowerCase()?.includes(getSearch.toLowerCase()));
           
         setUserData(searchdata)
        }else{
          setUserData(filterData)
        }
      }
    
 /* Pagination Api*/
 const navigate=useNavigate();


 const LoadDetail=(id)=>{
navigate('/product/detail/'+id);
alert("Success Full Detail Page Arrive")
}

const Delivery=()=>{
  if (window.confirm('Do you want to Delivery?')) {
    alert("Your Order Confirm!");
  }
  }

const identify= () => {
    navigate('/products/');
}

const Removefunction = (id) => {
  if (window.confirm('Do you want to remove?')) {
      fetch("http://localhost:3000/products/" + id, {
          method: "DELETE"
      }).then((res) => {
          alert('Removed successfully.')
          window.location.reload();
      }).catch((err) => {
         console.log(err.message)
      })
  }
}

const Sucess= (data) => {
  if (window.confirm('you want to Delivery?')) {
      fetch("https://api.escuelajs.co/api/v1/products" + data, {
          method: "POST"
      }).then((res) => {
          alert('You Order Confirmed.')
          window.location.reload();
      }).catch((err) => {
          console.log(err.message)
      })
  }
}

return (
<>

<div class="first">
<Box 
display="flex"
flexDirection={"column"}
maxWidth={1200}
alignItems="center"
justifyCenter={"center"}
margin="auto"
marginTop={1}
backgroundColor={"lightblue"}
borderRadious={5}
  boxShadow={"5px 5px 10px #ccc"}
    sx={{
      ":hover":{
       boxShadow:'10px 10px 20px #ccc',
    },
    }}
>  
  <Link to="/product/Type/" className="btn btn-success" id="add">Add New(+)</Link>
 {data.map((prodata) => (
 <div class="container">

    <div class="img">
    <img src={prodata.images} alt="{item.images}" />
   </div>
   <div class="content">

     <div class="heading">
      <div class="no">{prodata.id}</div>
       <div class="text">
         <h3>Our Top Pick</h3>
         <h1>{prodata.title}</h1>
         <h4 style={{color:"black"}}>Price:<b style={{"color":"blue","fontFamily":"italic"}}>{prodata.price}&euro;</b></h4>
       </div>
     </div>
     <div class="features">
       <h3>Features:</h3>
       <ul>
        <h5><li style={{"color":"blue","fontFamily":"italic"}} >{prodata.feacture}</li></h5>
        <h5><li style={{"color":"blue","fontFamily":"italic"}}>{prodata.feacture2}</li></h5>

       </ul>
       <ul>
        <h5><li style={{"color":"blue","fontFamily":"italic"}}>{prodata.feacture3}</li></h5>
       </ul>
     
     <h4 style={{"margin-left":"13px","margin-top":"7px"}}> Warenty Year:<b style={{"color":"blue","fontFamily":"italic"}}>{prodata.year}</b></h4>
     <h4 style={{"margin-left":"13px","margin-top":"7px"}}> Delivery Date:<b style={{"color":"blue","fontFamily":"italic"}}>{prodata.date}</b></h4>
     
     </div>


    <div class="button-container">
 
  <div class="last2" style={{"float":"left","margin-right":"35px"}}>
 <div class="icon2 eyes">   
    <div class="tooltip2">Identify</div>
  <p onClick={()=>identify()}><VisibilityOffIcon/></p> 
 </div> 
 </div>
     
<div class="button">
       <a onClick={()=>{Delivery()}}  className="btn btn-success">Delivery</a>
    <p><FacebookIcon/></p>
    </div>
    <div class="button" id="yu">
       <a onClick={()=>{LoadDetail(prodata.id)}} className="btn btn-success" id="bu">Details</a>
       <p><TwitterIcon/></p>
      </div>
     </div>
  </div>

  <div class="last">
 <div class="icon uninstall">   
<div class="tooltip">Uninstall</div>
 <p onClick={()=>{Removefunction(prodata.id)}} ><DeleteForeverIcon/></p> 
 </div> 
 </div>
 </div>
 ))}
</Box> 

<Box 
display="flex"
flexDirection={"column"}
maxWidth={1200}
alignItems="center"
justifyCenter={"center"}
margin="auto"
marginTop={15}
padding={3}
borderRadious={5}
  boxShadow={"5px 5px 10px #ccc"}
      sx={{
        ":hover":{
         boxShadow:'10px 10px 20px #ccc',
      },
    }}
> 
<button id="button">S/M</button>
<input type="text" value={query} onChange={(e)=>handlesearch(e)}  id="input"/>

    <div class="container2">
 <div class="products">
{
userData.map((item) => (
    <div class="product">
      
        <div class="image">
            <img src={item.images} alt="{item.images}"/>
          </div>
        <div class="namePrice">
            <h3>{item.title}</h3>
            <span>{item.price}&euro;</span>
        </div>
        <p>{item.updatedAt}</p>
        <div class="bay">
            <button onClick={()=>{Sucess(userData.data)}}> bay now </button>
        </div>

    </div> 
))}
    </div>   
 </div>
</Box>
</div>
</>
);
}

export default  Home2
