import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import deepjyoti02 from '../images/deepjyoti02.png'
import chakra05 from '../images/chakra05.png'
import chakra08 from '../images/chakra08.png'
import chakra09 from '../images/chakra09.png'
import design from '../images/design.png'
import stvyalogo from '../images/stavyalogo.png'
import profile from '../images/profile.jpg'
import Membercard from '../components_jsx/Membercard'
import '../components_css/Member.css'
import { style } from 'framer-motion/client';

export default function Members() {
  return (
    <>
      <div className="M-image-div">
        <img className='M-deep' src={deepjyoti02} />
        <img className='M-stavya' src={stvyalogo} />
        <hr className='M-line' />
        <img className='M-chakra08' src={chakra08} />
        <img className='M-chakra09' src={chakra09} />
        <img className='M-design' src={design} />
      </div>

      <div className="M-member-page">
        <div className="M-logo-container">
          <h3 className="M-main-text">MEMBERS</h3>
          <p className="M-sub-text">Cultural Committee</p>
        </div>
      </div>

      <div className="member-data">
        <Membercard
          image={profile}
          positionName={'Position Name'}
          memberName={'Member Name'}
          batch={'Batch: 0000'}
          memberDescription={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum qui asperiores quas a dolores labore nesciunt'}
          contact={'+91 0000000000'} socialMedia={[
            <a href='#'><InstagramIcon style={{ fontSize: '20' }} /></a>,
            <a href='#'><LinkedInIcon style={{ fontSize: '20' }} /></a>,

          ]} />

        <Membercard
          image={profile}
          positionName={'Position Name'}
          memberName={'Member Name'}
          batch={'Batch: 0000'}
          memberDescription={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum qui asperiores quas a dolores labore nesciunt'}
          contact={'+91 0000000000'} socialMedia={[
            <a href='#'><InstagramIcon style={{ fontSize: '20' }} /></a>,
            <a href='#'><LinkedInIcon style={{ fontSize: '20' }} /></a>,

          ]} />
        <Membercard
          image={profile}
          positionName={'Position Name'}
          memberName={'Member Name'}
          batch={'Batch: 0000'}
          memberDescription={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum qui asperiores quas a dolores labore nesciunt'}
          contact={'+91 0000000000'} socialMedia={[
            <a href='#'><InstagramIcon style={{ fontSize: '20' }} /></a>,
            <a href='#'><LinkedInIcon style={{ fontSize: '20' }} /></a>,

          ]} />

        <Membercard
          image={profile}
          positionName={'Position Name'}
          memberName={'Member Name'}
          batch={'Batch: 0000'}
          memberDescription={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum qui asperiores quas a dolores labore nesciunt'}
          contact={'+91 0000000000'} socialMedia={[
            <a href='#'><InstagramIcon style={{ fontSize: '20' }} /></a>,
            <a href='#'><LinkedInIcon style={{ fontSize: '20' }} /></a>,

          ]} />
        <Membercard
          image={profile}
          positionName={'Position Name'}
          memberName={'Member Name'}
          batch={'Batch: 0000'}
          memberDescription={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum qui asperiores quas a dolores labore nesciunt'}
          contact={'+91 0000000000'} socialMedia={[
            <a href='#'><InstagramIcon style={{ fontSize: '20' }} /></a>,
            <a href='#'><LinkedInIcon style={{ fontSize: '20' }} /></a>,

          ]} />

        <Membercard
          image={profile}
          positionName={'Position Name'}
          memberName={'Member Name'}
          batch={'Batch: 0000'}
          memberDescription={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum qui asperiores quas a dolores labore nesciunt'}
          contact={'+91 0000000000'} socialMedia={[
            <a href='#'><InstagramIcon style={{ fontSize: '20' }} /></a>,
            <a href='#'><LinkedInIcon style={{ fontSize: '20' }} /></a>,

          ]} />
      </div>
    </>
  )
}
