import React from 'react';

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
                <span>{eventname}</span>
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
