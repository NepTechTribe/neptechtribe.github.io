import React from 'react'
import "../Glimpses/Glimpses.css"
const Collabs = () => {
  return (
    <div className="album">
            <div className="gallery">
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

export default Collabs
