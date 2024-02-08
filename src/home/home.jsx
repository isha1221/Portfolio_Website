import React from 'react';
import './home.css'; // Assuming you name the CSS file as Aura.css
import Grid from '@mui/material/Grid';
import RotatingPenguin from '../penguin/penguin';
import Navbar from '../navBar/navBar';
import CosineWave from '../cosWave/Cosine';
const HomePage = () => {
  return (

    <Grid>
      {/* <Grid><Navbar></Navbar></Grid> */}
    <Grid className="aura wrapper" height="100vh" xs={12} container>
        <Grid className="custom-shape" xs={5} >


      <h1 className="aura">Hey! I'm Isha Pathak</h1>
      <p className="aura">Web Developer</p>
      </Grid>
      <Grid xs={2} ><CosineWave></CosineWave>
      
      </Grid>
      <Grid xs={5} >
        <RotatingPenguin></RotatingPenguin>
        {/* <Navbar></Navbar> */}
      </Grid>
    </Grid>
    </Grid>
  );
};

export default HomePage;
