import React from 'react'
import './Hero.css'
const Hero = () => {
    return (

        <div className="hero" id='hero'>
            <div className='container'>
            <div className="hero-text">
                <h1>Leaders are those who empower others.</h1>
                <p>A non-profit organization founded by group of tech-obsessed youngsters, concentrating on offering digital literacy programs and instructional tools to students.
                </p>
                <button className="btn">Explore more&nbsp;<i className="fa-solid fa-arrow-right"></i>
                 </button>
            </div></div>
        </div>
    )
}

export default Hero
