import React from 'react';
import HumburgerMenu from '../../Assets/SVG/HumburgerMenu';
import ShoppingCart from '../../Assets/SVG/ShoppingCart';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
      <input type="checkbox" name="" id="check" />
      <label for='check' className='checkbtn'>
        <HumburgerMenu/>
      </label>
        <label className='logo'> Taste now</label>
        <ul>
          <li><a href="#"> Home</a></li>
          <li><a href="#"> About us</a></li>
          <li><a href="#"> Blog</a></li>
          <li><a href="#"> Contact us</a></li>
        
        <div className='nav-end'>
          <ShoppingCart/>
          <button>Sign up</button>
        </div>
        </ul>
      </nav>
    </>
  )
}

export default Navbar