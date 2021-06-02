import React from 'react'
import aboutimage from '../images/about.png'

function About(){
    return(
        <div id='about'>
            <div className='about-text'>
                <h1>UPCOMING EVENTS</h1>
                <p>Lorem impsum dolor amet Lorem impsum dolor ametLorem impsum dolor ametLorem impsum dolor ametLorem
                Lorem impsum dolor ametLorem impsum dolor ametLorem impsum dolor ametLorem impsum dolor amet</p>
                <button>Read More</button>
            </div>
            <div className='about-image'>
                <img src={aboutimage} alt=''/>
            </div>
        </div>
    )
}

export default About