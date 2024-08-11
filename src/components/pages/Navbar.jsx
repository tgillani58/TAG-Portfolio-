import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
<nav class="navbar navbar-expand-lg bg-secondary ">
  <div class="container-fluid ">
    <Link style={{fontSize:'25px', fontWeight:'bold', paddingLeft:'10px'}} class="navbar-brand" to="/">TAG Portfolio</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" className='nav'>
      <ul style={{fontSize:'16px', fontWeight:'bold',}} class="navbar-nav me-auto mb-2 mb-lg-0 px-5">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/experiance">Experiance</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/contact">Contact</Link>
        </li>

      
      </ul>
     
    </div>
  </div>
</nav>
  );
}

export default Navbar;
