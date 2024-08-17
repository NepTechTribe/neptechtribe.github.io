import React from 'react'
import './Programs.css'
import pr1 from '../pr-1.png'
import icon1 from '../icon1.png'
const Programs = () => {
    return (
        <div className="programs">
            <div className="program">
                <img src={pr1} alt="" />
                <div className="caption">
                    <img src={icon1} alt="" />
                        <img src="" alt=""></img>
                        <p>Post Graduation</p>

                </div>
            </div>
            <div className="program">
                <img src={pr1} alt="" />
                <div className="caption">
                    <img src={icon1} alt="" />
                        <img src="" alt=""></img>
                        <p>Post Graduation</p>
                    
                </div>
            </div>
            <div className="program">
                <img src={pr1} alt="" />
                <div className="caption">
                    <img src={icon1} alt="" />
                    
                        <p>Post Graduation</p>
                    
                </div>
            </div>
            </div>
            )
}

            export default Programs
