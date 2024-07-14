import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './login/Main'
import { BrowserRouter } from 'react-router-dom'
import './login/Home.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Main/>
    </BrowserRouter>
    

  </React.StrictMode>
)
