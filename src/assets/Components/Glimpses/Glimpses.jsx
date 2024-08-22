import React from 'react'
import './Glimpses.css'
import poster from "../nposter.png"
const Glimpses = () => {
    return (
        <div class="album">
            <div class="gallery">
                <img src={poster} alt="" />
                <img src={poster} alt="" />
                <img src={poster} alt="" />
                <img src={poster} alt="" />
                
            </div>
            <div class="gallery">
                <img src={poster} alt="" />
                <img src={poster} alt="" />
                <img src={poster} alt="" />
                <img src={poster} alt="" />
              
            </div>
            <button class="btn dark-btn">See more here &nbsp;<i class="fa-solid fa-arrow-right"></i> </button>
        </div>
    )
}

export default Glimpses
