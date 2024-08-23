import React from 'react';
import upcomingbanner from '../hackto.jpg';
const Upcoming = () => {
    return (
        <div className="about events">
            <div className="about-left">
                <img src={upcomingbanner} alt="" className="about-img" />
            </div>
            <div className="about-right">
                <h2>HactoberFest Hackathon Series</h2>
                <p>Ignite your <b> Hacktoberfest </b> with our first <i>Hackathon Series</i> !</p>
                <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#212ea0" d="M302.8 312C334.9 271.9 408 174.6 408 120C408 53.7 354.3 0 288 0S168 53.7 168 120c0 54.6 73.1 151.9 105.2 192c7.7 9.6 22 9.6 29.6 0zM416 503l144.9-58c9.1-3.6 15.1-12.5 15.1-22.3L576 152c0-17-17.1-28.6-32.9-22.3l-116 46.4c-.5 1.2-1 2.5-1.5 3.7c-2.9 6.8-6.1 13.7-9.6 20.6L416 503zM15.1 187.3C6 191 0 199.8 0 209.6L0 480.4c0 17 17.1 28.6 32.9 22.3L160 451.8l0-251.4c-3.5-6.9-6.7-13.8-9.6-20.6c-5.6-13.2-10.4-27.4-12.8-41.5l-122.6 49zM384 255c-20.5 31.3-42.3 59.6-56.2 77c-20.5 25.6-59.1 25.6-79.6 0c-13.9-17.4-35.7-45.7-56.2-77l0 194.4 192 54.9L384 255z" /></svg>
                    &nbsp; American Corner, Bhairahawa | &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#212ea0" d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z" /></svg>&nbsp; October 1-31 | &nbsp;
                    <br/><br/><button className='btn'>Register Now!</button>
                </p>
            </div>
        </div>
    )
}

export default Upcoming
