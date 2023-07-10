//import logo from './logo.svg';
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
/**Example Crud **/
// import PCreate from './Crud Application/PCreate';
// import PDetail from './Crud Application/PDetail';
// import PEdit from './Crud Application/PEdit'

/*Example Product Crud */
import Fronend from './Product Crud/Fronend'
import Sign from './Product Crud/Sign';
import Product from './Product Crud/product'
import Users from './Product Crud/Users'
import Type from './Product Crud/Root Page/Type'
import Arrived from './Product Crud/Root Page/Arrived'
import PDetail from './Product Crud/Root Page/Detail';
import PEdit from './Product Crud/Root Page/Edit'


 function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  {/* <Route path='/' element={<Home/>}/>
  <Route path='/employee/Create' element={<PCreate/>}/>
  <Route path='/employee/detail/:empid' element={<PDetail/>}/>
  <Route path='/employee/edit/:empid' element={<PEdit/>}/> */}
   
   <Route path='/' element={<Fronend/>}/>  
     <Route path='/Sign/' element={<Sign/>}/> 
   <Route path='/create/users/' element={<Users/>}/>   
  <Route path='/products/' element={<Product/>}/>   
  <Route path='/product/Type/' element={<Type/>}/>  
  <Route path='/product/display' element={<Arrived/>}/>  
 <Route path='/product/detail/:proid' element={<PDetail/>}/>
  <Route path='/product/edit/:proid' element={<PEdit/>}/> 
 
</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
