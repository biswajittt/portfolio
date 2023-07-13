import React from 'react';
import './projectContainer.css';
import ArrowUp from '../../assets/icons/arrow-up.svg';

export default function ProjectContainer({ title, subTitle, image, link, bgColor }) {
    return (
        <div className='bd_project-container_section'>
            <div className='bd_project-container_section_line'></div>

            <div className='bd_project-container_section_data'>
                {/* header- title and link */}
                <div className='bd_project-container_section_data-header'>
                    <p>{title}</p>
                    <a href={link}>
                        <img className="bd_project-container_section_data-header_link" src={ArrowUp} alt='' />
                    </a>
                </div>
                <div className='bd_project-container_section_data-subtitle'>
                    {subTitle}
                </div>
                <div className='bd_project-container_section_data-image'>
                    <img src={image} alt="" />
                </div>

            </div>

        </div>
    )
}
