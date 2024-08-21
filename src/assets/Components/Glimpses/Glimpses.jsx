import React from 'react'
import './Glimpses.css'
import poster from "../nposter.png"
const Glimpses = () => {
    return (
        <div class="campus">
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
            <button class="btn dark-btn">See more here
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAeCAYAAABnuu2GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADPSURBVHgB7dnRDYJAEEXRpxVYAiXQgpVICVqB2IEdaAeUQAlrB9iBdjDOyPqhm2yCX7xhTzIJhITkBgJkAWZIRDY6vYw624cHGtLItzA1bo15+o2odTqwi7dikNQF7LzHVTrD0uKOYFfiWJU4VhpR6zyWFrez46u4cUb6GcOssbBBNyr48rSPYE9X6uMddtC5w5cTWGUeHnuwykS1YJV5QbdgVaJYlCgWmagrWMm4mOMyKriKMpKuBJsw5RwsK8E3nS3YxVuxi1eqlz9+SrwAYrdvIKJt0HIAAAAASUVORK5CYII=" alt="" />
            </button>
        </div>
    )
}

export default Glimpses
