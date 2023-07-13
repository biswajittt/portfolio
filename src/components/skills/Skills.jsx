import React from 'react'
import './skills.css'
import TechnologyContainer from '../../containers/technologyContainer/TechnologyContainer'

import C from '../../assets/icons/c++.png';
import Css from '../../assets/icons/css.png';
import Bootstrap from '../../assets/icons/bootstrap.png';
import GitHub from '../../assets/icons/github.png';
import JS from '../../assets/icons/js.png';
import Html from '../../assets/icons/html.png';
import MySql from '../../assets/icons/mysql.png';
import Php from '../../assets/icons/php.png';
import ReactIcon from '../../assets/icons/react.png';
import Sql from '../../assets/icons/sql.png';
import UI from '../../assets/icons/ui.png';
import MongoDB from '../../assets/icons/mongodb.png';
import NodeJs from '../../assets/icons/node.png';

import SkillsBg from '../../assets/images/skillsBg.svg'

export default function Skills() {
    return (
        <div className='bd_skills section__padding ' id='skills'>

            <div class="bd_skills_firstRow">

                <div className='bd_skills_firstRow-skills-Header'>
                    <p className='bd_skills_firstRow-skills-Header-title'>
                        <strong>Skills & Experience</strong>
                    </p>
                    <div className='bd_skills_firstRow-skills-Header-sub-title'>
                        <div className="line-on-skills"></div>
                        <p>
                            😎 Developer with a Passion for Creating Software.✨ A passion of mine developing and solving problems.
                        </p>
                    </div>
                </div>

                <div className='bd_skills_firstRow-experience'>
                    <p className='bd_skills_firstRow-experience_header-title'>
                        <strong>Internship</strong>
                    </p>
                    <div className="line"></div>

                    <div className="bd_skills_firstRow-experience_container">
                        <div className="time-duration">
                            17 Oct '22 – 17 Dec '22
                        </div>
                        <div className="bd_skills_firstRow-experience_container-data">
                            <div className="role">Web Developer</div>
                            <div className="company-name">Kutumb Aspiration</div>
                        </div>
                    </div>

                    <div className="bd_skills_firstRow-contribution_container">
                        <div className="bd_skills_firstRow-contribution_container-title">
                            Contributions
                        </div>
                        <div className="bd_skills_firstRow-contribution_container-data">
                            <ul>
                                <li>
                                    Worked on the design and development of a fully responsive website.
                                </li>
                                <li>
                                    Enhanced the code to improve the user experience and user interface.
                                </li>
                                <li>
                                    Developed upload opportunities, view & edit uploaded opportunities feature etc..
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div class="bd_skills_secondRow">

                <div className='bd_skills_secondRow-skills-container'>
                    <p className='bd_skills_secondRow-skills-container_header-title'>Skills</p>
                    <div className="bd_skills_secondRow-skills-container_technology-list_grid-container">
                        <div className="technology-list_grid-item">
                            <TechnologyContainer image={C} title='C/C++' />
                        </div>
                        <div className="technology-list_grid-item">
                            <TechnologyContainer image={Html} title='Html' />
                        </div>
                        <div className="technology-list_grid-item">
                            <TechnologyContainer image={Css} title='Css' />
                        </div>
                        <div className="technology-list_grid-item">
                            <TechnologyContainer image={Css} title='Css' />
                        </div>
                        <div className="technology-list_grid-item">
                            <TechnologyContainer image={JS} title='JavaScript' />
                        </div>
                        <div className="technology-list_grid-item">
                            <TechnologyContainer image={Sql} title='Sql' />
                        </div>
                        <div className="technology-list_grid-item">
                            <TechnologyContainer image={Php} title='Php' />
                        </div>
                        <div className="technology-list_grid-item">
                            <TechnologyContainer image={ReactIcon} title='ReactJs' />
                        </div>
                        <div className="technology-list_grid-item">
                            <TechnologyContainer image={NodeJs} title='NodeJs' />
                        </div>
                        <div className="technology-list_grid-item">
                            <TechnologyContainer image={MySql} title='MySql' />
                        </div>
                        <div className="technology-list_grid-item">
                            <TechnologyContainer image={MongoDB} title='MongoDB' />
                        </div>
                        <div className="technology-list_grid-item">
                            <TechnologyContainer image={Bootstrap} title='Bootstrap' />
                        </div>
                        <div className="technology-list_grid-item">
                            <TechnologyContainer image={UI} title='Material UI' />
                        </div>
                        <div className="technology-list_grid-item">
                            <TechnologyContainer image={GitHub} title='GitHub' />
                        </div>
                    </div>
                </div>

                <div className='bd_skills_secondRow-image'>
                    <img src={SkillsBg} alt="" />
                </div>

            </div>

        </div>
    )
}
