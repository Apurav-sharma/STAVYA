import React from 'react';
import "../components_res/events.css";

export default function Eventscard({ eventname, eventdescription, backgroundImage }) {
    return (
        <div className="card">
            <div
                className="front"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.8,
                }}
            >
                <span className='event_name'>{eventname}</span>
                <hr />
            </div>
            <div className="back">
                <p>{eventdescription}</p>
                <div className="card-button-div">
                    <button className="rules-button">Rules</button>
                    <button className="register-button">Register</button>
                </div>
            </div>
        </div>
    );
}
