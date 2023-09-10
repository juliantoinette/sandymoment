
import React from "react";
import NavBar from "./NavBars";
import maternity from '../img/maternity_cover.jpg'
import kids from '../img/kids_cover.jpg'
import fashion from '../img/fashion_cover.jpg'
import "../App.css";
import { Link } from "react-router-dom";
  
const Gallery = () => {
  return (
    <>
    <NavBar/>
    <div >
    <div className="row">
    <div className="column" >
      <Link to="/kidgallery">
      <img src={kids} className="galleryCover" alt=""/> 
      </Link>
        <div className="overlay">
        <div className="text">KIDS</div>
        </div>
      </div>
      <div className="column " >
      <img src={maternity}  className="galleryCover"  alt=""/>  
        <div className="overlay">
        <div className="text">MATERNITY</div>
        </div>
      </div>
      <div className="column">
      <img src={fashion}  className="galleryCover" alt=""/>  
      <div className="overlay">
        <div className="text">FASHION</div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};
  
export default Gallery;