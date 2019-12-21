import React from 'react';
import s from './Schedule.module.css';
import Event from './Event/Event';
import icon from '../img/icon agenda.png'
const Schedule = () => {
    let AllEvents = [
        { time: "8:00 AM", name: "Check In" },
        { time: "8:30 AM", name: "Breakfast" },
        { time: "9:00 AM-12:00 AM", name: "Pre-Conference Training" },
        { time: "12:30 PM - 1:30 PM", name: "Lunch" },
        { time: "1:30 PM - 5:00 PM", name: "Pre-Conference Training" },
        { time: "5:30 PM", name: "City tour&Activities" },
        { time: "6:00 PM-9:00PM", name: "Sponsor Reception" }
    ];
    let EllementOfSchedule = AllEvents.map(ellement => <Event time={ellement.time} name={ellement.name} />)
    return (
        <div>
            <div className={s.Main}>
                <img src={icon} />
                <br />
                AGENDA
                </div>
            <div className={s.Topic}>
                Conference Schedule
                </div>
        <div className={s.event}>
            {EllementOfSchedule}
        </div>
        </div>

    );
}
export default Schedule;
