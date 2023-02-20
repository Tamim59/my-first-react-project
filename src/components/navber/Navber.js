import React from 'react'
import "./navber.css"

const Navber = () => {
  return (
    <nav>
    <div className="container">
       <div className="box">
           <div className="logo">
             <img src="./image/logo.png" alt="Logo"/>
           </div>
           <div className="navitem">
             <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>FAQ</li>
                <li>Blog</li>
             </ul>
             <a href="#">Contact us</a>
           </div>
       </div>
      
    </div>
    
 </nav>
)
}

export default Navber