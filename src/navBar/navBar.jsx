

import React from 'react';
import "./navBar.css";
import { Grid } from '@mui/material';
import PenguinImage from '../image/penguin.png';
import Wood from '../image/wooden_log.png'; // Import your logo image

const Navbar = () => {
  return (
    <Grid className="navbar" style={{backgroundImage:`url(${Wood})`}} padding={'20px'}>
      <Grid xs={12} className="navbar-container" container direction={'row'} padding={2}>
        <Grid item xs={3} sm={3} className="navbar-logo" bgcolor={'blue'}>
          <img src={PenguinImage} alt="Logo" className='image_peng'/> 
          
        </Grid>
        <Grid display={{ xs: 'none', sm: 'flex' }} item sm={9} justifyContent={'flex-end'} className="navbar-links">
          <a href="#home">Home</a>
          <a href="#products-services">Products & Services</a>
          <a href="#contact-us">Contact Us</a>
          <a href="#about">About</a>
          {/* <button className="signin-button">Sign In</button> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;


