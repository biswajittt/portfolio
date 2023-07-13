import React from 'react'
import './header.css'
import github from '../../assets/images/github.png'
import gmail from '../../assets/images/gmail.png'
import linkedin from '../../assets/images/linkedin.png'

import myImg from '../../assets/images/myImg1.png';

import js from '../../assets/images/js.gif';
import html from '../../assets/images/html.gif';
import setting from '../../assets/images/setting.gif';

import Design from '../design/Design';

import Resume from '../../assets/resume/CV_Biswajit_Debnath.pdf'

export default function Header() {
    return (
        <>

            <div className='bd_header section__padding' id='home'>
                {/* <div className='bd_header_particles'>
                    <Design />
                </div> */}
                {/* <img className='bd_header-bg_svg' src={HeaderBg}></img> */}
                <div className='bd_header-left-content'>

                    {/* Name */}
                    <div className='bd_header-my-name-container'>
                        <p className='bd_header-greet'>
                            Hi I'm
                        </p>
                        <h1 className='bd_header-myName'>
                            Biswajit Debnath
                        </h1>
                        <div className='bd_header-circle'></div>
                    </div>


                    {/* Buttons */}
                    <div className='bd_header-left-content-button'>
                        <a href="mailto:biswajitdeb324@gmail.com">
                            <button className='bd_header-left-content-hire-button' type='button'>
                                Hire Me
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
                                    <g class="send">
                                        <path stroke="#265BFF" stroke-linecap="round" stroke-width="1.5" d="M9.407 14.593l3.058-3.058" />
                                        <path stroke="#ffffff" stroke-width="1.5" d="M15.564 7.908a.432.432 0 01.528.528l-2.677 10.175a.432.432 0 01-.724.195L5.194 11.31a.432.432 0 01.195-.724l10.175-2.677z" />
                                    </g>
                                </svg>
                            </button>
                        </a>
                        <a href={Resume} target='_blank'>
                            <button className='bd_header-left-content-resume-button' type='button' download>
                                Download CV
                            </button>
                        </a>
                    </div>

                    {/* Social media icons */}
                    <div className='bd_header-left_social-media-button'>
                        <a href='https://www.linkedin.com/in/biswajitt' target='_blank'>
                            <img src={linkedin} alt="" />
                        </a>
                        <a href="mailto:biswajitdeb324@gmail.com">
                            <img src={gmail} alt="email" />
                        </a>
                        <a href="https://github.com/biswajittt" target='_blank'>
                            <img src={github} alt="github" />
                        </a>
                    </div>

                </div>



                <div className='bd_header-right-content'>
                    {/* My image */}
                    {/* <img className='bd_header-right-content_gradient_inside-img' src={bg} alt="" /> */}

                    {/* <div className='bd_header-right-content_gradient-border'>
                        <img className='bd_header-right-content_heroImg' src={myImg} alt="" />
                    </div> */}

                    <div class="myImg-bg">
                        {/* <div className='gif1'>
                            <img src={setting} alt="" />
                        </div>
                        <div className='gif2'>
                            <img src={js} alt="" />
                        </div>
                        <div className='gif3'>
                            <img src={html} alt="" />
                        </div> */}
                        <img class="myImg" src={myImg} />
                    </div>

                </div>


            </div >


        </>

    )
}
