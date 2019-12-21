import React from 'react';
import classes from './Auditorium.module.css';
import icon from '../img/auditorium.png'

const Auditorium = () => {
    return (
        <div className={classes.Bg}>
            <div className={classes.Contacts}>
                <img src={icon} />
                <div className={classes.Title}>
                    AUDITORIUM
                </div>
                <div className={classes.Location}>
                    The Location
                </div>
                <div className={classes.Address}>
                    Corso Magenta, 52 <br />
                    20123 Milano
                </div>

                <div className={classes.Phone}>
                    Tel.    +39 02 92881877   <br />
                    Mob.  +39 373 8126235
                </div>
                <div className={classes.Email}>
                    E-Mail : <br />
                    info@salapastore.it
                </div>

            </div>

        </div>
    )
}

export default Auditorium;