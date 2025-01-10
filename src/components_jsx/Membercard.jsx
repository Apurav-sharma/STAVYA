import React from 'react';
import '../components_css/Member.css'

export default function Membercard({
  image,
  positionName,
  memberName,
  batch,
  memberDescription,
  contact,
  socialMedia
}) {
  return (
    <div className="membercard-container">
      <div className="membercard-image">
        <img className="member-image" src={image} />
      </div>
      <div className="membercard-details">
        <h2 className="membercard-position">{positionName}</h2>
        <h3 className="membercard-name">{memberName}</h3>
        <h4 className="membercard-batch">{batch}</h4>
        <p className="membercard-description">{memberDescription}</p>
        <h4 className="membercard-contact">Contact: {contact}</h4>
        <div className="membercard-social">{socialMedia}</div>
      </div>
    </div>
  );
}
