import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import stvyalogo from '../images/stavyalogo.png'
import chakra07 from '../images/chakra07.png'
import chakra09 from '../images/chakra09.png'
import deepjyoti02 from '../images/deepjyoti02.png'
import '../components_css/Contact.css'


export default function Contact() {
    return (
        <>
            <div className="contact-main">
                <div className="cont-img-div">
                    <img className='chakra09' src={chakra09} alt="loading" />
                    <img className='chakra07' src={chakra07} alt="loading" />
                    <img className='stvya-logo' src={stvyalogo} alt="loading" />
                    <h3 className='cont-stv'>STAVYA</h3>
                    <img className='stvya-logo-02' src={stvyalogo} alt="loading" />
                    <hr className='cont-stv-line' />
                    <img className='deep-02' src={deepjyoti02} alt="loading" />
                </div>
                <div className="contact-details">
                    <h2>Indian Institute of Information Technology Vadodara - International Campus Diu</h2>
                    <div className="anchor-cont">

                        <div>
                            <h6>Links</h6>
                            <hr className='link-line' />
                        </div>
                        <div className='anchor'>
                            <a href="#">Discord</a>
                            <a href="#">Instagram</a>
                            <a href="#">LinkedIn</a>
                            <a href="#">Institute Site</a>
                        </div>


                        <div>
                            <h6>Contacts</h6>
                            <hr className='link-line' />
                        </div>
                        <div className='anchor'>
                            <h4 className='emailicon'> <EmailIcon style={{ width: '40px', marginBottom: "-8px" }} /> cultural@diu.iiitvadodara.ac.in</h4>
                            <h4 PhoneIcon className='phoneicon'><PhoneIcon style={{ width: '40px', marginBottom: "-8px" }} /> +91 0000000000 . +91 0000000000</h4>
                            <h4 LocationOnIcon className='loctionicon'><LocationOnIcon style={{ width: '40px', marginBottom: "-8px" }} /> IIITV-ICD Eduaction Hub, New Kevdi ,Diu (U.T) 362520</h4>
                        </div>

                    </div>
                    <div className="copyright">
                        <h4 >@copyright-2025 Cultural and Literature Committee IIITV-ICD</h4>
                        <hr className='copyright-line' />
                        <h4>Designed and Developed by Kamal Meena (Radhe)</h4>
                    </div>

                </div>

            </div>
        </>
    )
}
