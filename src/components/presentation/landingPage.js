import React from 'react';
import logo from "../../static/images/resume.png";
import { NavLink } from "react-router-dom";
const Lp = () => {

  const style ={
    color:"white"
  }
    return (    
    <>
        <div className="container  lp-page center">          
        <div className="section">
         <h1 style={style}>Create a resume that stands out</h1>
           <p style={style}>Create a Resume that perfectally describes your skils and match job profile.</p>
            <br></br>
           <div >
                <NavLink to="/getting-started"  className="btn hvr-float-shadow"><span>Get Started for Free</span>
                </NavLink>
                
                </div>
                <img src={logo}   className="lp-resume" alt="logo" />
         </div>

            
         </div>
         <div className="custom-shape-divider-bottom-1663740747">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
        </div>     
    </>
        );
}
 
export default Lp;