import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import './navBar.css';

function NavBar() {
  return (
    <div className='navBox'>
        <ul className='navBar'>
            <li><Link to="/"><h1><i class="bi bi-house-heart"></i></h1></Link></li>
            <li><Link to="/about"><h2><i class="bi bi-file-person"></i></h2></Link></li>
            <li><Link to="/education"><h2><i class="bi bi-bank"></i></h2></Link></li>
            <li><Link to="/projects"><h1><i class="bi bi-laptop"></i></h1></Link></li>
            <li><Link to="/contact"><h1><i class="bi bi-envelope"></i></h1></Link></li>
            
        </ul>
        <div className='buttons'>
                <span className='buttonItem'><h1><i class="bi bi-caret-left"></i></h1></span>
                <span className='buttonItem'><h1><i class="bi bi-caret-right"></i></h1></span>
        </div>
    </div>
  )
}

export default NavBar