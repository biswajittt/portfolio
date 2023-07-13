import React from 'react'
import './project.css'
import ProjectContainer from '../../containers/projectContainer/ProjectContainer'

import LearnerbyImg from '../../assets/projectImages/learnerby.png'
import ForumImg from '../../assets/projectImages/forum.png'
import ChatGpt from '../../assets/projectImages/ChatGpt.png'


export default function Project() {
    return (
        <div className='bd_project section__padding' id='projects'>
            <div className="bd_project-container">

                <div className="bd_project-container_first-project">
                    <div className="bd_project-container-title">
                        Latest Projects
                    </div>
                    <ProjectContainer
                        title='ChatGpt UI' subTitle='An UI for ChatGpt'
                        image={ChatGpt} link='https://github.com/biswajittt/chatgpt' bgColor='#aaaaaa' />
                </div>

                <div className="bd_project-container_second-project">
                    <ProjectContainer
                        title='Learnerby' subTitle='Learnerby is wplatform where students can find mentors'
                        image={LearnerbyImg} link='https://github.com/biswajittt/learnerby' bgColor='#4158D0' />
                </div>

                <div className="bd_project-container_third-project">
                    <ProjectContainer title='Forum' subTitle='Forum is a question and answer website for programmers'
                        image={ForumImg} link='https://github.com/biswajittt/forum' bgColor='#a942a0' />
                </div>

            </div>
        </div>
    )
}
