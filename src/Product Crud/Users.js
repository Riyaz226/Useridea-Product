import {useEffect,useState} from "react";
import {Link,useNavigate} from 'react-router-dom'
import './Style.css'

import{ TextField,Typography,Checkbox,Card, CardContent,Grid,Button} from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Users = ()=>{
const [userdata, setData] = useState([]);
const navigate=useNavigate();

const identify= () => {
    if (window.confirm("You want To Product Page?")) {
      alert( "You! Go");
      navigate('/products/');
       } else {
      alert("You Not Go?");
    }
  }

const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:4000/users/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }


     fetch("http://localhost:4000/users")
       .then((response) => response.json())
       .then((json) => {
         console.log(json);
         setData(json);
       });
  
 return(
  <>
 <div class="third"> 
 <Card style={{ maxWidth: 1200, padding: "20px 5px", margin: "0 auto" }}
       borderRadious={5}
       boxShadow={"5px 5px 10px #ccc"}
           sx={{
             ":hover":{
              boxShadow:'10px 10px 20px #ccc',
           },
         }}
     >
         <div className="card">
            <div className="card-title">
               <h2 style={{"textAlign":"center"}}><u>Users List:</u></h2>
               </div>
              <div className="card-body">
                <div className="dtnbtn">
                    <Link to="/Sign/" className="btn btn-success">Add New(+)</Link>
                </div>
                <div className="dtnbtn" style={{"float":"right"}}>
                    <Link to="" className="btn btn-success">Back(-)</Link>
                </div>
                <table className="table table-bordered">
                <thead className="bg-dark text-white">

<tr>
    <td>ID</td>
    <td>Name</td>
    <td>Email</td>
    <td>Gender</td>
    <td>Password</td>
    <td>Date&&Time</td>
    <td>Action</td>
</tr>
                </thead>
                <tbody>
                    {  
                       userdata &&
                        userdata.map(item=>(
                            <tr key={item.id}>
              <td style={{"color":"blue"}}>{item.id}</td>
              <td  style={{"color":"blue"}}>{item.firstname} {item.lastname}</td>
              <td  style={{"color":"blue"}}>{item.email}</td>
              <td style={{"color":"blue"}} >{item.gender}</td>
              <td  style={{"color":"blue"}}>{item.password}</td>
              <td  style={{"color":"blue"}}>{item.time}</td>
              <td>
                  <a  onClick={()=>{Removefunction(item.id)}} className="btn btn-danger">Remove</a>
                  
                                                            </td>                              
                            </tr>
                        ))
                    }
                </tbody>
                </table>
            </div>
        </div>
   <div class="last2" style={{"float":"right","margin-top":"35px"}}>
 <div class="icon2 eyes">   
    <div class="tooltip2">Identify</div>
  <p onClick={()=>identify()}><VisibilityOffIcon/></p> 
 </div> 
 </div>
     
  </Card>
  </div>
  </>
 )
}
export default Users;