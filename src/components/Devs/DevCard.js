import React from 'react'
import "./DevCard.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


function DevCard({name, about, image, linkedIn, github}) {
    return (
        <>
        <header className="App-header">
        <div className="dev-card">
            <section className="image">
            <img src={image} alt="new"></img>
            </section>
            <section className="name">
            {name}
            </section>
            <p className='soft'>Software Engineer</p>
            <section className="about">
                <p>{about}</p>
            </section>
            <section className="contact">
                <FontAwesomeIcon icon={faLinkedin} /><a className='linkedIn' target='_blank' rel="noopener noreferrer" href={linkedIn}>LinkedIn</a> <br></br>
                <FontAwesomeIcon icon={faGithub} /><a className='github' target='_blank' rel="noopener noreferrer" href={github}>Github</a> <br></br>
            </section>
        </div>
        </header>
        </>
    )
}

export default DevCard
