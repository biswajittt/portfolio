import React from 'react'
import './technologyContainer.css'
export default function TechnologyContainer({ image, title }) {
    return (
        <div className='bd_technology-container'>
            <img src={image} alt="" />
            <p>{title}</p>
        </div>
    )
}
