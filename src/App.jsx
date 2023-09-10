import React from 'react';
 import "./App.css";
// import NavBar from './components/NavBar';
// import Slider from './components/Slider';
// import Example from "./components/example";
// import  styles from './Navbar.module.css';
import { useState } from 'react'
import NavBar from './components/NavBars';
// import logo from './img/landing_page_BACKGROUND.jpg'
import landing_page_1 from './img/landing_page_1.jpg'
 import landing_page_2 from './img/landing_page_2.jpg'
 import landing_page_3 from './img/landing_page_3.jpg'
 import landing_page_4 from './img/landing_page_4.jpg'
 import landing_page_5 from './img/landing_page_5.jpg'
 import landing_page_6 from './img/landing_page_6.jpg'
 import landing_page_7 from './img/landing_page_7.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const imageData = [
  {
    url:landing_page_1
  },
  {
    url:landing_page_2
  },
  {
    url: landing_page_3
  },
  {
    url:landing_page_4
  },
  {
    url:landing_page_5
  },
  {
    url:landing_page_6
  },
  {
    url:landing_page_7
  }
];

const renderSlides = imageData.map((image) => (
  <div key={image.alt}>
    <img src={image.url} alt="" />
  </div>
));

function App() {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return (
    <>
    <NavBar/>
    <div className="App_L">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        selectedItem={imageData[currentIndex]}
        onChange={handleChange}
        className="carousel-container"
      >
        {renderSlides}
      </Carousel>
    </div>
    {/* <div className='backgroudImg'> 
    </div> */}

    </> 
  );
}



export default App;
