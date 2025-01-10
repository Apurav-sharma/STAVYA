import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import chakra08 from '../images/chakra08.png'
import chakra02 from '../images/chakra02.png'
import chakra05 from '../images/design.png'
import deepjyoti02 from '../images/deepjyoti02.png'
import stavyalogo from '../images/stavyalogo.png'
import '../components_css/Homepage.css'
import '../components_res/Homepage.css'

export default function Homepage() {
    return (
        <>
            <div className="homepage-main">
                <div className="img-div">
                    <img className='ch-img-02' src={chakra02} />
                    <img className='ch-img-05' src={chakra05} />
                    <img className='ch-img-08' src={chakra08} />
                    <img className='stvya-logo' src={stavyalogo} />
                </div>
                <div className="home-text">
                    <h1 className='home-stvya'>STAVYA</h1>
                    <h3 className='home-culxlit'>culxlit</h3>
                    <h3 className='home-shlok'>काव्य शास्त्र विनोदेन, कालो गच्छति धीमताम्</h3>
                    <p className='home-para'>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though.</p>
                    {/* <button className='home-button'>More info</button> */}
                    {/* <div className="home-button-div">
                        <Link to="#">
                            <button className="M-button">
                                <span className="button-text">Welcome</span>
                                <div className="circle">
                                    <div className="icon arrow"></div>
                                </div>
                            </button>
                        </Link>
                    </div> */}
                </div>
            </div>
        </>
    )
}
