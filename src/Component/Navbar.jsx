import React from 'react'
import Signip from './Signip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';



const Navbar = () => {
  const [display,newdisplay]=useState(false);

  const handleClick =()=>{
    newdisplay((prevDisplay) => !prevDisplay);

  }

  return (


    <>
    <header className='nav'>
    <div className="container d-flex justify-content-between mt-3">
      <nav className="navbar">
        <div className="container-fluid">
          <button onClick={handleClick}className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {display && <Signip />}

        </div>
      </nav>
      <h6 className="mt-3" style={{ fontWeight: 'bold',fontSize:'20px'}}>MIXTILES</h6>

      <FontAwesomeIcon icon={faMessage} className='mt-3' style={{fontSize:'20px'}}/>
    </div>
    </header>






    </>
  )
}

export default Navbar