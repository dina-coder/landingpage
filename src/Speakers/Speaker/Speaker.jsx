import React from 'react';
import classes from './Speaker.module.css';
import sp1 from '../../img/spk1.jpg';
import sp2 from '../../img/spk2.jpg';
import sp5 from '../../img/spk3.jpg';
import sp4 from '../../img/spk.jpg';
import sp3 from '../../img/spk5.jpg';
import icon from '../../img/twitter.png';
const Speaker = () => {
    return (
        <div className={classes.Speakers}>
            <span className={classes.Sp1}>
                <div className={classes.image}>
                <img src={sp1} />
                </div>
                <div className={classes.box}>
                    <div className={classes.Name}>
                         PETER LONGMAN
                    </div>
                    <div className={classes.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis consectetur nisi, ac placerat <br />
                        odio. Maecenas porta orci a lorem fermentum.
                    </div>
                    <div className={classes.line}> </div>
                    <br />
                    <a href='#'><img src={icon} /></a>
                </div>
            </span>
            <span className={classes.Sp2}>
            <div className={classes.image}>
                <img src={sp2} />
                </div>
                <div className={classes.boxx}>
                    <div className={classes.Name1}>
                    JOAN MARTINEZ
                    </div>
                    <div className={classes.description}>
                    Lorem ipsum dolor sit amet, consectetur ad-<br />
                    ipiscing elit. Quisque vitae metus ligula. Ut<br /> 
                    vitae vestibulum enim. 
                    </div>
                    <div className={classes.line1}> </div>
                    <br />
                    <a href='#'><img src={icon} /></a>
                </div>
            </span>
            <span className={classes.Sp3}>
            <div className={classes.image}>
                <img src={sp3} />
                </div>
                <div className={classes.boxx}>
                    <div className={classes.Name1}>
                    MICHAEL DOE
                    </div>
                    <div className={classes.description}>
                    Aenean pharetra adipiscing sem non or-<br />
                    nare. Duis at dui turpis. Quisque in ac-<br />
                    cumsan odio. 
                    </div>
                    <div className={classes.line1}> </div>
                    <br />
                    <a href='#'><img src={icon} /></a>
                </div>
            </span>
            <span className={classes.Sp4}>
            <div className={classes.image}>
                <img src={sp4} />
                </div>
                <div className={classes.boxx}>
                    <div className={classes.Name1}>
                    SAUL GOODMAN
                    </div>
                    <div className={classes.description}>
                    Phasellus rutrum est interdum tincidunt <br />
                     commodo. Donec vel dignissim orci. 
                    </div>
                    <div className={classes.line1}> </div>
                    <br />
                    <a href='#'><img src={icon} /></a>
                </div>
            </span>
            <span className={classes.Sp5}>
            <div className={classes.image}>
                <img src={sp5} />
                </div>
                <div className={classes.box}>
                    <div className={classes.Name1}>
                    HUGH LAURENCE
                    </div>
                    <div className={classes.description}>
                    Lorem ipsum dolor sit amet, consectetur<br />
                     adipiscing elit. Praesent ac magna mauris <br /> 
                     Interdum et malesuada fames ac ante.
                    </div>
                    <div className={classes.line1}> </div>
                    <br />
                    <a href='#'><img src={icon} /></a>
                </div>
            </span>
        </div>)
}
export default Speaker;
