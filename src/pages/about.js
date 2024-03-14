import Navbar from "../components/navbar";
import React from "react";
import './../modules/about.modules.css';

const AboutPage = () => {
    return(
        <div className='page'>
            <Navbar />
            <div className='about-header'>
                <div className='about-image'></div>
                <div>
                    <h2>Robert Gouveia</h2>
                    <h3>Full Stack Engineer</h3>
                    <br/>
                    <p>Languages</p>
                    <ul>
                        <li><p>Javascript</p></li>
                        <li><p>HTML / CSS</p></li>
                        <li><p>React</p></li>
                        <li><p>Express</p></li>
                        <li><p>PostGreSQL</p></li>
                    </ul>
                </div>
            </div>

            <div className='about-content'>
                <h3>About Me</h3>
                <p>I am a proficient full-stack software engineer specializing in web applications, currently based in
                    the UK at the age of 21. Possessing a robust educational background in computer science, I
                    demonstrate a meticulous attention to optimization. My professional experience spans across games
                    development and mobile application development.</p>
                <h3>Goals</h3>
                <p>My overarching objective is to craft intuitive and highly user-friendly web applications tailored to
                    client needs. I aspire to introduce Software as a Service (SAAS) Applications particularly suited
                    for industries such as hospitality, emphasizing simplicity and ease of use. Furthermore, I aim to
                    elevate the technical standards of web applications by extending their reach beyond the browser into
                    platforms like kiosks and electronic point-of-sale systems.</p>
                <h3>Progression</h3>
                <p>I am committed to a perpetual journey of enhancing my technical proficiencies. Continuously pursuing
                    courses and educational avenues, I strive to adopt the most effective and prevalent practices, not
                    only benefitting my own development but also enhancing collaborative efforts within my team.
                    Additionally, I am dedicated to broadening my expertise from JavaScript to TypeScript, attracted by
                    its advanced capabilities and increased technical sophistication.</p>
            </div>
        </div>
    )
}

export default AboutPage;