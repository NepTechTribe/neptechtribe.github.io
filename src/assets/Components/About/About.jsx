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
                <p>NepTech Tribe is a forward-thinking, non-profit organization founded by a group of passionate and visionary young professionals with a strong commitment to digital education and empowerment. Our primary mission is to deliver comprehensive digital literacy and technology programs to diverse organizations, equipping participants with the essential skills needed to thrive in the digital era.

At NepTech Tribe, we believe that knowledge, innovation, and collaboration are the cornerstones of success. We foster a vibrant community where members freely engage in thought-provoking activities, contribute to collective development, and are empowered to drive meaningful change both within and beyond our community. Through workshops, traditional training sessions, and skill development initiatives, we offer hands-on practical training that cultivates critical thinking and prepares individuals to become active contributors to the digital economy.

With a focus on making technology accessible and affordable, NepTech Tribe is shaping the future by empowering the next generation of digital leaders. Our inclusive and supportive environment encourages creativity and innovation, ensuring that our members are well-equipped to succeed in an ever-evolving digital landscape.</p>
            </div>
        </div>
    )
}

export default About
