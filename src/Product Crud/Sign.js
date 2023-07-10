import React, { useState } from 'react'
import{ TextField,Typography,Checkbox,Card, CardContent,Grid,Button} from '@mui/material';
import {Link,useNavigate} from 'react-router-dom'
import {Spin} from 'antd'
import './Style.css'

import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Sign =() => {
const[loading,setLoading]=useState(false);
const[id,idchange]=useState("");
    const[firstname,firstnameChange]=useState("");
    const[lastname,lastnameChange]=useState("");  
    const[email,emailChange]=useState("");
    const[password,passwordChange]=useState("");
    const[date,dateChange]=useState("");
    const[male,maleChange]=useState("");
    const[female,femaleChange]=useState("");
    const[others,othersChange]=useState("");
     const[active,activeChange]=useState(true);
      const[validation,valChange]=useState(false);
      
  const navigate=useNavigate();
  
      const handlesubmit=(e)=>{
        e.preventDefault();
        const userdata={id,firstname,lastname,email,password,date,active};
         
        fetch("http://localhost:4000/users",{
          method:'POST',
          headers:{"content-type":"application/json"},
          body:JSON.stringify(userdata)
        }).then((res)=>{
          alert('Saved successfully.')
          navigate('/create/users/');
        }).catch((err)=>{
          console.log(err.message)
        })
    }

    const finish=()=>{
setLoading(true);
setTimeout(()=>{
  setLoading(false);
},500)
    }
   const Back=()=>{
    navigate('/')
   }  

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
     const [isSignup,setisSignup]=useState(false)
     console.log(isSignup);


return (
 <>
<div class="second">
<Spin spinning={loading}>
<form onSubmit={handlesubmit}>
<Card style={{ maxWidth: 400, padding: "20px 5px", margin: "0 auto" }}
       borderRadious={5}
       boxShadow={"5px 5px 10px #ccc"}
           sx={{
             ":hover":{
              boxShadow:'10px 10px 20px #ccc',
           },
         }}
     >

          <CardContent>
       
            <div class="d-flex flex-row bd-highlight  mb-3">
        <Button  onClick={()=>Back()}
          variant='contained' 
    sx={{marginRight:16,marginTop:3,borderRadius:3,":hover":{
            boxShadow:"10px 10px 20px #blue",
           },
          }}
        >
       Back
       </Button>
       
       <Button onClick={()=>setisSignup(!isSignup)}
         variant='contained' 
    sx={{marginLeft:8,marginTop:3,borderRadius:3,":hover":{
            boxShadow:"10px 10px 20px #blue",
           },
 }}
        >
        {isSignup? "Login":"Register"}
  </Button>
       
  </div>

           <Typography
       marginTop={1}
       display="flex"
       justifyContent="center"
       alignItems="center"
     >Sign In With:
      </Typography>
      
      <Typography
      marginTop={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
      >
        <h4>
          <FacebookIcon/>
          <GoogleIcon/>
          <TwitterIcon/>
          <GitHubIcon/>
        </h4>
      </Typography>

      <Typography
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop={1}
      >
        Or:
      </Typography>

  {isSignup &&  <TextField 
type={'text'}
variant='outlined'
fullWidth required
value={id} disabled="disabled"
/> }
    
  <Grid container spacing={1} marginTop={1}>
   <Grid xs={12} sm={6} item>
   {isSignup && <TextField  label="First Name"   
      onMouseDown={e=>valChange(true)}  value={firstname}
      onChange={e=>firstnameChange(e.target.value)}     variant="outlined" 
      fullWidth required />
    }     {firstname.length==0 && validation && <span className="text-danger"></span>}</Grid>
      <Grid xs={12} sm={6} item>
      {isSignup &&  <TextField  label="Last Name" variant="outlined" fullWidth required 
     value={lastname}    onMouseDown={e=>valChange(true)}
     onChange={e=>lastnameChange(e.target.value)}  />
}    {lastname.length==0 && validation && <span className="text-danger"></span>}</Grid>  
  

<Grid item xs={12}> <TextField 
      type={'email'} 
      variant='outlined' 
   label="Email"  
   fullWidth required 
   value={email}    onMouseDown={e=>valChange(true)}
   onChange={e=>emailChange(e.target.value)} />
    </Grid>
   
   {isSignup &&<div class="d-flex flex-row bd-highlight  mb-3">
Gender:<Checkbox {...label} defaultChecked size="small"/>
<Typography marginTop={1}  checked={male} onChange={e=>maleChange(e.target.validation)}>Male</Typography>  

<Checkbox {...label}  size="small"/>
<Typography marginTop={1}  checked={female} onChange={e=>femaleChange(e.target.value)}>FeMale</Typography>  


<Checkbox {...label}  size="small"/>
<Typography marginTop={1}  checked={others} onChange={e=>othersChange(e.target.value)}>Other</Typography>  

</div>}

<Grid item xs={12}><TextField
       type={'password'} 
       variant='outlined'
       label="Password"  
       fullWidth required
      value={password} onChange={(e)=> passwordChange(e.target.value)}/></Grid>


<Grid item xs={12}>{isSignup &&<TextField
      type={'password'} 
       variant='outlined'
       label="Repeat Password"  
     fullWidth required 
      value={password} onChange={(e)=> passwordChange(e.target.value)}/>}</Grid>

     <Grid item xs={12}>
    {isSignup && <TextField variant="outlined" type={"datetime-local"}  
    checked={date} onChange={e=>dateChange(e.target.value)}/>}
  
     </Grid>
  </Grid>  
 
  <div class="d-flex flex-row bd-highlight  mb-3">

<Checkbox {...label} defaultChecked size="small"
   />
     <Typography
     marginTop={1}
     marginRight={4}
     checked={active} onChange={e=>activeChange(e.target.checked)}
      >
             {isSignup?"Remember Me":"I have read And agree to the terms "}
   </Typography>
     

{isSignup &&<Button 
      sx={{borderRadius:3,color:"blue"}}
      color="warning"
      >
  Forget Password ?
  </Button>
}
     </div> 

     <Button 
      sx={{marginLeft:17,borderRadius:3,  display:"flex",justifyContent:"center",alignItems:"center"
    }}>
<div className="col-lg-12">
    <div className="form-group">
       <button className="btn btn-success" type="submit"  onClick={finish}>{isSignup?"Submit":"Login"}</button>
    </div>
</div>
</Button>


 <Button sx={{marginLeft:10,marginTop:2}}
 onClick={()=>setisSignup(!isSignup)}>Not a member?{isSignup?"":"Register"}</Button>

             </CardContent>

        </Card>
</form>
</Spin>
</div>
</>
  )

}

export default Sign


