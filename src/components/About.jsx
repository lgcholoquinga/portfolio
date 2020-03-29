import React from 'react';
import '../styles/About.css';
import { faGraduationCap,faGlobe,faBirthdayCake,faSchool } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const About = () => {
    return (
        <section className="container">
            <h2 className="about-title" id="about">About Me</h2>
            <div className="row about-row">
                <div className="col about-col">
                    <div className="about-graduation">
                        <span className="about-details-graduation">
                            <FontAwesomeIcon icon={faSchool} />
                        </span>
                        <h4>Armed Forces University ESPE</h4>
                    </div>
                    <div className="about-school">
                        <span className="about-details-school">
                            <FontAwesomeIcon icon={faGraduationCap} />
                        </span>
                        <h4>
                            Software Engineer
                        </h4>
                    </div>
                    <div className="about-language">
                        <span className="about-details-language">
                            <FontAwesomeIcon icon={faGlobe} />
                        </span>
                        <h4>
                            Language: Spanish and <strong className="strong-aboutme">English (Write y Speak: 60%)</strong>
                        </h4>
                    </div>
                    <div className="about-birdthday">
                        <span className="about-details-birdthday">
                            <FontAwesomeIcon icon={faBirthdayCake} />
                        </span>
                        <h4>
                            24 Years Old
                        </h4>
                    </div>
                    <br/>
                    <br/>
                </div>
            </div>
        </section>
    );
};

export default About;