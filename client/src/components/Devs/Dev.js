import React from 'react'
import DevCard from './DevCard'
import Video from '../../videos/Video.mp4'

function Dev() {
    return (
        <div className="container">
        <video id="home-video" autoPlay loop muted src={Video} type='video/mp4'>
        </video>
        <div>
         <p className="meet">Meet The Development Team</p>
        </div>
        <div className= 'dev-container'>
            <DevCard name="Webster Bian" about="I'm a full-time software engineering student at Flatiron school who enjoys trying new foods and travelling. Looking forward to starting my career in tech!" image="./images/webster.png" linkedIn='https://www.linkedin.com/in/webster-bian-274b88226/' github='https://github.com/WBian618'/>
            <DevCard name="Kelsey Doyle" about="Full-time software engineer at Flatiron School. In her free time you can find her projecting at the climbing gym or catching up on software engineering labs." image="./images/kelsey.png" linkedIn='https://www.linkedin.com/in/kelsey-doyle-4a542776/' github='https://github.com/kdoyle390'/>
            <DevCard name="Niraj Patel" about="I’m a full-time Software Engineering student at Flatiron. My hobbies include playing basketball, playing video games and learning new programming frameworks." image='./images/niraj.png' linkedIn='https://www.linkedin.com/in/niraj-p-a5a063156/' github='https://github.com/niraj23'/>
        </div>
        {/* </div> */}
        </div>

    )
}

export default Dev
