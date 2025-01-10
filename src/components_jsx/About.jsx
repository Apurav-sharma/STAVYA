import React from 'react'
import deepjyoti01 from '../images/deepjyoti01.png'
import deepjyoti02 from '../images/deepjyoti02.png'
import eyes from '../images/eyes.png'
import chakra04 from '../images/chakra04.png'
import stavyalogo from '../images/stavyalogo.png'
import '../components_css/About.css'

//motion
import { motion } from 'framer-motion'
//variants
import { fadIn } from './variants'

export default function About() {
    return (

        <div className="about-main-div">
            {/* <div class="text-container">
                <div>Radhe Radhe</div>
                <div>Shantnu Shantnu</div>
                <div>Dev Dev</div>
                <div>Dharm Dharm</div>
                <div>Dinesh Dinesh</div>
            </div> */}
            {/* <div className="about-img-div"></div> */}


            <motion.div
                variants={fadIn("up", 0.2)}
                initial='hideen'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}

                className="about-para">
                <h3 className='about'>ABOUT</h3>
                <hr className='about-line' />
                <img className='dp-01' src={deepjyoti01} />

                <img className='img-eyes' src={eyes} />
                <div className="para-01">
                    Stavya is the annual cultural festival of Indian Institute of Information Technology Vadodara-ICD
                    Stavya serves as a platform for students to show their talents in performing arts and aesthetic
                    arts, where students can collaborate and team up with other students to bring out the best in
                    them.
                </div>
                <div className="para-02">
                    The Annual Cultural Festival of IIIT Vadodara-ICD gets its name from the Esperanto word "Stavya",
                    meaning "Creativity". Since its inception in 2022 as an intra-institute fest in 2022, it has
                    consistently been a huge platform for individuals to showcase their talents. A spectacular
                    extravaganza, Stavya is home to expression through art, music, drama, dance and culture
                </div>
                <div className="para-03">
                    Join us to celebrate creativity, join us, to celebrate Stavya !!
                </div>
            </motion.div>
            <div className="chakra-div">
                <h4 className='ch-h4-01'><span className='span-01'>60k+</span>wroth prize to win</h4>
                <h4 className='ch-h4-02'><span className='span-02'>12+</span>events to participate</h4>
                <h4 className='ch-h4-03'><span className='span-03'>7D+</span>long fest to participate</h4>
                <img className='ch-04-01' src={chakra04} />
                <img className='ch-04-02' src={chakra04} />
                <img className='ch-04-03' src={chakra04} />
                <img className='dp-02' src={deepjyoti02} />
                <hr className='dp-line' />
                <img className='stv-logo' src={stavyalogo} />
            </div>
        </div>

    )
}
