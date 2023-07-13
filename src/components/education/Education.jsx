import React from 'react'
import '../education/education.css'
import Reading from '../../assets/images/hero.png'
export default function Education() {
    return (
        <div className='bd_education section__padding' id='education'>

            <div className='bd_education_header'>
                <div className='bd_education_header-title'>
                    <div className="line-on-education "></div>
                    Education
                </div>
                <img className='bd_education_header-img' src={Reading} alt="" />
            </div>

            <div className='bd_education-containers'>
                <div className='bd_education-containers-college_details'>
                    <p className='number'>01</p>
                    <div className='instituteInfo'>
                        <p className='instituteName'>  ICFAI University Tripura</p>
                        <p className='course'>B.Tech in Computer Science & Technology</p>
                        <p className='marks'>
                            <strong>CGP: </strong>
                            8.6
                        </p>
                    </div>

                </div>

                <div className='bd_education-containers-school_details'>
                    <p className='number'>02</p>
                    <div className='instituteInfo'>
                        <p className='instituteName'>Dr. B.R. Ambedkar Vidya Bhaban</p>
                        <p className='course'>B.Tech in Computer Science & Technology</p>
                        <p className='marks'>
                            <strong>Marks: </strong>
                            72.2%
                        </p>
                    </div>
                </div>
            </div>


        </div>
    )
}
