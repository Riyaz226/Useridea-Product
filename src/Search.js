import React,{useEffect,useState} from "react";
import './Style.css';
import Home2 from './Header'

function Search() {
  const [data, setData] = useState([]);
     fetch("https:/api.escuelajs.co/api/v1/products")
       .then((response) => response.json())
       .then((json) => {
         console.log(json);
         setData(json);
       });
       return (
        <>
 <Home2 data={data2}/>
     
 </> 
  );
  }
  
  export default Search;

