import React from 'react';
import classes from './Header.module.css'
import { Link,  animateScroll as scroll } from "react-scroll";

const Header=()=> {
  return (
    <div className={classes.bg}> 
        <ul >
            <li> <Link to="speakers" smooth={true}> SPEAKERS</Link></li>
            <li> <Link to='schedule' smooth={true}> AGENDA </Link></li>
            <li> <Link to='auditorium' smooth={true}> AUDITORIUM </Link> </li>
        </ul>
    </div>
  );
}

export default Header;
