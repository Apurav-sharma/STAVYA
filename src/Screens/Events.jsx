import React from 'react';
import '../components_css/Event.css'
import Eventscard from '../components_jsx/Eventscard';
// import '../components_css/Event.css'
import deepjyoti02 from '../images/deepjyoti02.png'
import chakra05 from '../images/chakra05.png'
import chakra08 from '../images/chakra08.png'
import chakra09 from '../images/chakra09.png'
import design from '../images/design.png'
import stvyalogo from '../images/stavyalogo.png'
import profile from '../images/profile.jpg'

export default function Events() {
  return (
    <>
      <div className="E-image-div">
        <img className='E-deep' src={deepjyoti02} />
        <img className='E-stavya' src={stvyalogo} />
        <hr className='E-line' />
        <img className='E-chakra08' src={chakra08} />
        <img className='E-chakra09' src={chakra09} />
        <img className='E-design' src={design} />
      </div>
      <div className="E-member-page">
        <div className="E-logo-container">
          <div className="circle"></div>
          <h3 className="E-main-text">EVENTS</h3>
          <p className="E-sub-text">cultural committee</p>
          <div className="circle"></div>
        </div>
      </div>
      <div className="wrapper">
        <Eventscard
          eventname={'Nrityakala'}
          eventdescription={' Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum qui asperiores quas a dolores labore nesciunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum qui asperiores quas a dolores labore'}
          backgroundImage={profile}
        />
        <Eventscard
          eventname={'Nrityakala'}
          eventdescription={' Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum qui asperiores quas a dolores labore nesciunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum qui asperiores quas a dolwores labore'}
          backgroundImage={profile}
        />
        <Eventscard
          eventname={'Nrityakala'}
          eventdescription={' Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum qui asperiores quas a dolores labore nesciunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum qui asperiores quas a dolores labore'}
          backgroundImage={profile}
        />
        <Eventscard
          eventname={'Nrityakala'}
          eventdescription={' Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum qui asperiores quas a dolores labore nesciunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum qui asperiores quas a dolores labore'}
          backgroundImage={profile}
        />
      </div>
    </>

  );
}
