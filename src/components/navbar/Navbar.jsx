import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import Logo from '../../assets/icons/logo.png'

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='bd_navbar'>
            <div className='bd_navbar-links'>
                <div className='bd_navbar-links_logo'>
                    <img src={Logo} alt="" />
                </div>
                <div className='bd_navbar-links_container'>
                    <p><a href='#home'>Home</a></p>
                    <p><a href='#education'>Education</a></p>
                    <p><a href='#skills'>Skills</a></p>
                    <p><a href='#projects'>Projects</a></p>
                </div>
            </div>
            <div className='bd_navbar-contact'>
                <a href='https://www.linkedin.com/in/biswajitt' target="_blank">
                    <button type='button'>Contact</button>
                </a>

            </div>
            <div className='bd_navbar-menu'>
                {
                    (toggleMenu) ?
                        <RiCloseLine color="rgb(0 0 0)" size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color="rgb(0 0 0)" size={27} onClick={() => setToggleMenu(true)} />
                }
                {
                    toggleMenu && (
                        <div className='bd_navbar-menu_container'>
                            <div className="bd_navbar-menu_container-links">
                                <p><a href='#home'>Home</a></p>
                                <p><a href='#education'>Education</a></p>
                                <p><a href='#skills'>Skills</a></p>
                                <p><a href='#projects'>Projects</a></p>
                            </div>
                            <div className='bd_navbar-menu_container-links-contact'>
                                <a href='https://www.linkedin.com/in/biswajitt' target="_blank">
                                    <button type='button'>Contact</button>
                                </a>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
