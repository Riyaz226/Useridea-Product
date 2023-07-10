import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

import LockOpenIcon from '@mui/icons-material/Lock';
import LogoutIcon from '@mui/icons-material/Logout';

function product() {
  return (
    <>
  <div className='pro'> 
    <h1>

    <Link to="/product/Type/" className="btn btn-success" >Product's Create(<LockOpenIcon/>)</Link>
</h1>
<h1>
<Link to="/Sign/" className="btn btn-success" >Log Out(<LogoutIcon />)</Link>
</h1>
</div> 
    </>
  )
}

export default product