import React from 'react'
import './About.css'
import Aboutimg from '../about.png'
const About = () => {
    return (
        <div class="about">
            <div class="about-left">
                <img src={Aboutimg} alt="" class="about-img" />
                <img src="/assets/play-icon-DiRyRcRm.png" alt="" class="play-icon" />
            </div>
            <div class="about-right">
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <br/>
                <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p><p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p><p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
            </div>
        </div>
    )
}

export default About
