import React from 'react'
import NavBar from '../Home/NavBar'
import DevCard from './DevCard'
import Video from '../../videos/Video.mp4'

function Dev() {
    return (
        <>
        <div id="home-container">
        <video id="home-video" autoPlay loop muted src={Video} type='video/mp4'>
        </video>
    <div id='nav-container'>
        <NavBar/>
        </div>
        <div>
            <p className="meet">Meet The Development Team</p>
            <DevCard name="Webster Bian" about="I'm Webster's about me" image="./images/webster.png" linkedIn='https://www.linkedin.com/in/webster-bian-274b88226/' github='https://github.com/WBian618'/>
            <DevCard name="Kelsey Doyle" about="I'm Kelsey's about me" image="./images/kelsey.png" linkedIn='https://www.linkedin.com/in/kelsey-doyle-4a542776/' github='https://github.com/kdoyle390'/>
            <DevCard name="Niraj Patel" about="I'm Niraj's about me" image='./images/niraj.png' linkedIn='https://www.linkedin.com/in/niraj-p-a5a063156/' github='https://github.com/niraj23'/>
        </div>
        </div>
        </>

    )
}

export default Dev
