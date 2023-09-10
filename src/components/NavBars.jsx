
// import { Link } from "react-router-dom";
import  styles from '../Navbar.module.css';
import { useState } from 'react'
// import logo from '../img/logo_1.png'
  
const NavBar = () => {
  return (
    
    // <nav className="Nav">
    // <a href="/">Home</a>
    // <a href="/services">Services</a>
    // <a href="/gallery">Portfolio</a>
    // <Link to="/about">About</Link>
    // <a href="/booking">Let's Talk</a>
    // </nav>
    <NavBars/>
  );
};

function NavBars() {

  // adding the states 
  const [isActive, setIsActive] = useState(false);


  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };



  return (
    <div className="AppPage">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>

          {/* logo */}
           <a href='#home' className={`${styles.logo}`}>Sandy's Moments</a> 
          {/* <img src={logo} className={`${styles.logo}`} alt=""/>  */}

          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>    
              <a href='/' className={`${styles.navLink}`}>Home</a>
              <a href='/services' className={`${styles.navLink}`}>Services</a>
              <a href='/gallery' className={`${styles.navLink}`}>Portfolio</a>
              <a href='/about' className={`${styles.navLink}`}>About</a>
              <a href='/booking' className={`${styles.navLink}`}>Let's Talk</a>
          </ul>


          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

  
export default NavBar;