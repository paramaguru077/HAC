import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="main">
      <div className="card">
      <h1>Welcome to Doctor's Portal</h1>
       <h2>Efficiently Manage Patient Details</h2>
      <p>
          "Wherever the art of Medicine is loved, there is also a love of Humanity." 
      </p>
    <button><Link to = '/loginpage' className='button'>get Start</Link></button>
      </div>


    

     
    </div>
  )
}

export default Home
