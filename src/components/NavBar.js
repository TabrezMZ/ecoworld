import { useState } from 'react';
import {Link} from 'react-router-dom'

export const NavBar = () => {
    const [navActive, setNavActive] = useState(false)



  return (
    <header className="header">
      <Link data-aos="zoom-in-left" data-aos-delay="150" to="/" className="logo">
        <i className="fas fa-user"></i> ECOWORLD
      </Link>

      <nav className={`navbar ${navActive && 'active'}`}>
        <Link data-aos="zoom-in-left" data-aos-delay="300" to='/'>
          home
        </Link>
        <Link data-aos="zoom-in-left" data-aos-delay="450" to='/tech'>
          Tech
        </Link>
        <Link data-aos="zoom-in-left" data-aos-delay="600" to='/work'>
          WorkSpace
        </Link>
        <Link data-aos="zoom-in-left" data-aos-delay="750" to='/connectivity'>
        connectivity
        </Link>
        <Link data-aos="zoom-in-left" data-aos-delay="900" to='/testimonial' >
        testimonial
        </Link>
        <Link data-aos="zoom-in-left" data-aos-delay="1050" to='/spaces' >
          space
        </Link>
      </nav>

      <div className="icons">
        <div onClick={()=>  setNavActive(!navActive)}
          
          className={`fas ${navActive ? 'fa-times' : 'fa-bars'}`}
          id="menu"
        ></div>
      </div>
    </header>
  );
};
