import React from 'react';
import Footer from '../Footer';

function About() {
    return(
        <section id="about-section">
            <h1 id="about">About me:</h1>
            <div className="img-thumbnail" id="img-container">
                <img src="/img/prof-profile.png" alt="Professional" id="about-image"/>
            </div>
            <div id="about-description">
                <p>Sydney Porter is a Full Stack Web Developer graduating from Vanderbilt University Coding Bootcamp.
                    She is currently developing a strong foundation of knowledge in JavaScript, HTML5, and CSS. She is 
                    looking forward to entering the professional realm of web development.
                </p>
            </div>
            <Footer />
        </section>
    );

}


export default About;
