import React from 'react'
import './About.css'
import Aboutimg from '../about.jpg'
const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <img src={Aboutimg} alt="" className="about-img" />
                <img src="/assets/play-icon-DiRyRcRm.png" alt="" className="play-icon" />
            </div>
            <div className="about-right">
                <h2>Fostering Collaborative & Positive Environment</h2>
                <br/>
                <p>Neptech Tribe is a dynamic non-specialist organization established by a group of practical, knowledgeable and visionary young professionals with an interest in practice and education. The primary goal is to provide comprehensive digital electronics programs to organizations that include operators and equipment from a variety of backgrounds requiring irrigation equipment. Yaso gerer, neptech trib le neid seip bheka personalharolai drut rupa vikas va digital worlda garn r successful hun able banaunch.

Neptech Tribe's philosophy is to believe in the central focus of knowledge, good resources, strong support, innovation, collaboration and collaborative environment, and fast-forward. The organization is a community where members live and participate freely in thought-provoking activities and contribute to collective development. Through this positive and inclusive environment that encourages creativity and innovation, we empower our members to drive meaningful change within and outside the community.

Workshop, Traditional Training Sessions, March, Neptech Tribe Le Personalharoge Nayan Practical Training Sessions, Kritikta Soch Skill Development Group and Digital Economy Active Contributing Artist Bann Sikounch. With technology that is affordable and affordable, Neptech Tribal Digital is shaping the future by empowering digital leaders.</p>
            </div>
        </div>
    )
}

export default About
