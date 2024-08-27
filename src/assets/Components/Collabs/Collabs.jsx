import React from 'react'
import "../Glimpses/Glimpses.css"
import amc from '../amc.jpg'
import abs from '../abs.jpg'
import bmcit from '../bmcit.jpg'
import cfc from '../cfc.jpg'
import collab from '../collab.jpg'
import conb from '../conb.jpg'
import dgtl from '../dgtl.jpg'
import dr from '../dr.jpg'
import poster from "../nposter.png"
const Collabs = () => {
  return (
    <div className="album">
            <div className="gallery">
                <img src={amc} alt="" />
                <img src={dr} alt="" />
                <img src={conb} alt="" />
                <img src={collab} alt="" />
                
            </div>
            <div className="gallery">
                <img src={bmcit} alt="" />
                <img src={dgtl} alt="" />
                {/* <img src={poster} alt="" />
                <img src={poster} alt="" /> */}
              
            </div>
            <button className="btn dark-btn">See more here &nbsp;<i className="fa-solid fa-arrow-right"></i> </button>
        </div>
  )
}

export default Collabs
