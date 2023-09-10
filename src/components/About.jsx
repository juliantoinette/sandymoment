
import React from "react";
import "../App.css";
import NavBar from "./NavBars";
import image1 from '../img/about_image.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import PinterestIcon from '@mui/icons-material/Pinterest';
  
const About = () => {
  return (
    <>
     <NavBar/>
    <div className="About">
     <div className="aboutLeft">
    <img src={image1} className="aboutimg1" alt=""/>  
     </div>
     <div className="aboutRight">
      <div className="innerRight">
        
        <i><h4 className="aboutName">My name is <strong>JEEVA SANTIAGO</strong></h4></i>
        <i><p className="aboutPassage">Being an engineer by profession and photographer by passion,
         My area of portfolio is based out of Kids, Wedding and Fashion</p></i>
         <i><p className="aboutPassage">I run a professional venture from Chennai having an experience of 8<sup>+</sup> years in the field of photography</p></i>
        <b className="aboutLocation"><i>CHENNAI | PONDICHERRY | BANGALORE | KARAIKUDI </i></b> 
        <hr/>
        <InstagramIcon/> &nbsp;&nbsp;&nbsp;
        <FacebookIcon/>&nbsp;&nbsp;&nbsp;
        <MailIcon/>&nbsp;&nbsp;&nbsp;
        <PinterestIcon/>&nbsp;&nbsp;&nbsp;
      </div>
     
     </div>  
    </div>
    </> 
  );
};
  
export default About;