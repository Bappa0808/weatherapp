import React from 'react';
import '../containers/navbar.css';

function Navbar() {
  return (
    <div className='Nav__main'>
        <div className='Nav__logo'>
        <div>
        <span className="dot"></span>
        <span className="dot"></span>
        </div>
        <span className="dot"></span>
        <span className="dot"></span>
        </div>
        <div className='Nav__text'> anchors</div>
        <div className='beta'>beta</div>
        
    </div>
  );
}

export default Navbar;
