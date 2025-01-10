import React from 'react';
import Clubscard from '../components_jsx/Clubscard';
import stvyalogo from '../images/stavyalogo.png';
import '../components_css/Club.css';

import deepjyoti02 from '../images/deepjyoti02.png'
import chakra05 from '../images/chakra05.png'
import chakra08 from '../images/chakra08.png'
import chakra09 from '../images/chakra09.png'
import design from '../images/design.png'
import profile from '../images/profile.jpg'

export default function Clubs() {
  return (
    <>
      <div className="C-club-page">
        <div className="C-logo-container">
          <h3 className="C-main-text">CLUBS</h3>
          <p className="C-sub-text">Cultural Committee</p>
        </div>
      </div>

      <div className="C-image-div">
        <img className='C-deep' src={deepjyoti02} />
        <img className='C-stavya' src={stvyalogo} />
        <hr className='C-line' />
        <img className='C-chakra08' src={chakra08} />
        <img className='C-chakra09' src={chakra09} />
        <img className='C-design' src={design} />
      </div>

      <div className="container">
        <Clubscard
          image={stvyalogo}
          clubname="Photography club"
          clubdescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum qui asperiores quas a dolores labore nesciunt porro alias sit dolor, consectetur magni nisi quae."
        />
        <Clubscard
          image={stvyalogo}
          clubname="Photography club"
          clubdescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum qui asperiores quas a dolores labore nesciunt porro alias sit dolor, consectetur magni nisi quae."
        />
        <Clubscard
          image={stvyalogo}
          clubname="Photography club"
          clubdescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum qui asperiores quas a dolores labore nesciunt porro alias sit dolor, consectetur magni nisi quae."
        />
        <Clubscard
          image={stvyalogo}
          clubname="Photography club"
          clubdescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum qui asperiores quas a dolores labore nesciunt porro alias sit dolor, consectetur magni nisi quae."
        />
        <Clubscard
          image={stvyalogo}
          clubname="Photography club"
          clubdescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum qui asperiores quas a dolores labore nesciunt porro alias sit dolor, consectetur magni nisi quae."
        />
        <Clubscard
          image={stvyalogo}
          clubname="Photography club"
          clubdescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum qui asperiores quas a dolores labore nesciunt porro alias sit dolor, consectetur magni nisi quae."
        />
      </div>
    </>
  );
}