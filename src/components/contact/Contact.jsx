import React from 'react'
import './contact.css'

import EmailLogo from '../../assets/icons/email.svg'
import LinkedinLogo from '../../assets/icons/linkedin.svg'
import Hire from '../../assets/images/hireImg.png'
import ArrowUp from '../../assets/icons/arrow-up.svg'


export default function Contact() {
    return (
        <div className='bd_contact section__padding'>
            <p className="bd_contact_title">Hire Me</p>
            <div className="bd_contact-header">
                {/* left container */}
                <div className="bd_contact-header_contact-details">
                    {/* email container */}
                    <div className="bd_contact-header_contact-details_email-container">

                        <div className="bd_contact-header_contact-details_line"></div>

                        <div className="bd_contact-header_contact-details_email-data">
                            <img src={EmailLogo} alt={EmailLogo} />
                            <div className="bd_contact-header_contact-details_email">
                                <p>Email</p>
                                <h2>biswajitdeb324@gmail.com</h2>
                            </div>
                        </div>
                    </div>
                    {/* linkedin container */}
                    <div className="bd_contact-header_contact-details_linkedin-container">
                        <div className="bd_contact-header_contact-details_line"></div>

                        <div className="bd_contact-header_contact-details_linkedin-data">
                            <img src={LinkedinLogo} alt={LinkedinLogo} />
                            <div className="bd_contact-header_contact-details_linkedin">
                                <p>LinkedIn</p>
                                <h2>@biswajittt</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right container */}
                <div className="bd_contact-header_image">
                    <img src={Hire} alt="" />
                </div>

            </div>

            {/* footer section */}
            <div className="bd_contact-footer">
                <div className="bd_contact-footer_line"></div>
                <div className="bd_contact-footer_content">
                    Made by 😎<strong>Biswajit Debnath</strong>
                </div>

            </div>
        </div>
    )
}
