import React from 'react';
import classes from './Footer.module.css';
import twitter from '../img/twitter.png';
import facebook from '../img/facebook.png';
import email from '../img/Vector Smart Object.png';


const Footer = () => {
    return (
        <div className={classes.Bg}>
            <div className={classes.Title}>THE CONFERENCE</div>
            <div className={classes.Description}>become a part of the best event in this world</div>
            <a href='#'><img src={twitter}/></a>
            <a href='#'><img src={facebook} /></a>
            <a href='#'><img src={email}/></a>
        </div>
    )
}

export default Footer;