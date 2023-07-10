import React,{useEffect} from "react";
import {Link} from 'react-router-dom'

import './Style2.css'


function Fronend() {
  return (
    <>
     <div class="fronend">
<a href="#" className='first' id="a" >
<Link to="/Sign/">
      <span>Content</span>
       <div class="liquid"></div>
       </Link>   
  </a> 
    <div class="ocean">
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
</div>
    </div>
    </>
  )
}

export default Fronend

