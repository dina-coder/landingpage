import React from 'react';
import s from './Event.module.css'
const Event = (props) => {
    return (
        <div className={s.Event}>
        <div className={s.Main}>
            <div className={s.Time}>
                {props.time}
                </div>
            <div className={s.Plan}>
                {props.name}
                </div>
                <div className={s.line}>
                    </div>
                </div>
                <div className={s.point}>
                    </div>
        </div>
        
    );
}
export default Event;