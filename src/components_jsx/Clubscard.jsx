import React from 'react';


export default function Clubscard({ image, clubname, clubdescription }) {
    return (
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src={image} alt="Club Logo" />
                    <h3>{clubname}</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>{clubdescription}</p>
                    <a href="#">Club Heads</a>
                </div>
            </div>
        </div>
    );
}