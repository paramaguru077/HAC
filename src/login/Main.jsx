import React from 'react'

import Header from './Header'
import Home from './Home'
import {Route,Routes} from "react-router-dom"
import Login from './Login'
import './Home.css'



const Main = () => {
  return (
       <>
       <Routes>
        <Route  path='/loginpage' element={<Login/>}/>
       </Routes>
        
         <Header />
         <Home/>
       </>
      
       
      
   
  )
}

export default Main
