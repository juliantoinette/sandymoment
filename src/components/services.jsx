
import React from "react";
import NavBar from "./NavBars";
import "../App.css";
import un from '../img/shoot_un.jpg'
import deux from '../img/shoot_deux.jpg'
import trois from '../img/shoot_trois.jpg'
import quatre from '../img/shoot_quatre.jpg'
import cinq from '../img/event_cinq.jpg'
import six from '../img/event_six.jpg'
import sept from '../img/event_sept.jpg'
import huit from '../img/event_huit.jpg'
import neut from '../img/event_nuet.jpg'
import dix from '../img/event_dix.jpg'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
  
const Services = () => {
  return (
    <>
    <NavBar/>
    
    <div className="Services">
    &nbsp;&nbsp;&nbsp;
    &nbsp;
    <h2><span>PHOTOSHOOT PACKAGES</span></h2>
      <img src={un} className="servicesImage_1" alt=""/>  
      <img src={deux} className="servicesImage_1" alt=""/> 
      <img src={trois} className="servicesImage_1" alt=""/>  
      <img src={quatre} className="servicesImage_1" alt=""/>  
    </div>

    <div className="Services_1">
    &nbsp;&nbsp;&nbsp;
    &nbsp;
    <h1><span>EVENT PACKAGES</span></h1>
      <img src={cinq} className="servicesImage_2" alt=""/>  
      <img src={six} className="servicesImage_2" alt=""/> 
      <img src={sept} className="servicesImage_2" alt=""/>  
      <img src={huit} className="servicesImage_2" alt=""/>
      <img src={neut} className="servicesImage_2" alt=""/>
      <img src={dix} className="servicesImage_2" alt=""/>  
    </div>
    <div className="Services_2">
    <h1><span>ADD ONS</span></h1>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 6,
          width: 270,
          height: 130,
          borderRadius:10,
          justifyTracks:'center',
          fontSize: '40px',
          marginLeft: '3%',
          textAlign: 'center',
          paddingTop: '2.2%',
          fontFamily:'Trebuchet MS',
          backgroundColor: 'cadetblue',
          color: 'white'
        },
      }}
    >
      <Paper elevation={1}>Mini Album</Paper>
      <Paper elevation={7}>Budget Album</Paper>
      <Paper elevation={7} > Elite  Album</Paper>
      <Paper elevation={7} >Pack of Gifts</Paper>
      <Paper elevation={7} >Pack of Gifts Elite</Paper>
      <Paper elevation={7} >Basic Video Montage</Paper>
      <Paper elevation={7} >Elite Video Montage</Paper>
      <Paper elevation={7} >Family Potraits</Paper>
      <Paper elevation={7} >Concept Shoots</Paper>
      <Paper elevation={7} >Magazine</Paper>
    </Box>
    </div>
   
    </>
  );
};

// const products = [
//   {name: 'Mini Album', price: 7500 },
//   {name: 'Budget Album', price: 10000},
//   {name: 'Elite Album', price: 20000},
//   {name: 'Pack of Gifts', price: 5000},
//   {name: 'Pack of Gifts.(Elite)', price: 10000 },
//   {name: 'Basic Video Montage (Song)', price: 10000},
//   {name: 'Elite Video Montage (Song - Cinematic) ', price: 20000},
//   {name: 'Family Potraits', price: 2500 },
//   {name: 'Concept Shoots with Makeover', price: 15000},
// ];
export default Services;