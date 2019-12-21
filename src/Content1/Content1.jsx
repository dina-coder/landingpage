import React from 'react';
import classes from './Content1.module.css'
import { Link,  animateScroll as scroll } from "react-scroll";

const Content1=()=> {
  return (
    <div className={classes.Content}>
        <div className={classes.bag}> 
            <div>THE CONFERENCE</div>
            <div className={classes.description}>MILANO • MON 30 APRIL 2014 • SALA PASTORE</div>
            <div className={classes.line}> </div>
            <div className={classes.AdditionInformation}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed <br />
            ullamitso venenatis sapien a scelerisque. </div>
            <Link to='auditorium' smooth={true} className={classes.button1}>REGISTER NOW</Link>
        </div>
    </div>
  );
}

export default Content1;
