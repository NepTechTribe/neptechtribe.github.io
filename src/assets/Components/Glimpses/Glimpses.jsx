import React from 'react'
import './Glimpses.css'
import poster from "../nposter.png"
import amc from '../amc.jpg'
const Glimpses = () => {
    return (
        <div className="album" id='album'>
            <div className="gallery" id='gallery'>
                <img src={poster} alt="" />
                <img src={poster} alt="" />
                <img src={poster} alt="" />
                <img src={poster} alt="" />
                
            </div>
            <div className="gallery">
                <img src={poster} alt="" />
                <img src={poster} alt="" />
                <img src={poster} alt="" />
                <img src={poster} alt="" />
              
            </div>
            <button className="btn dark-btn">See more here &nbsp;<i className="fa-solid fa-arrow-right"></i> </button>
        </div>
    )
}

export default Glimpses
