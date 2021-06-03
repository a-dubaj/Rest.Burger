import React from 'react'
import aboutimage from '../images/about.png'

function About(){
    return(
        <div id='about'>
            <div className='about-text'>
                <h1>UPCOMING EVENTS</h1>
                <p>Our goal is simple – use fresh ingredients to make the best burger at a fair price.
                Our newest motto is also simple – it’s time to share Schoop’s.</p>
                <button>Read More</button>
            </div>
            <div className='about-image'>
                <img src={aboutimage} alt=''/>
            </div>
        </div>
    )
}

export default About