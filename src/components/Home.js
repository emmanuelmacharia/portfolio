import React from 'react'

// COMPONENTS

import Projects from './Projects'
import projects from './projectsData';

export default function Home() {
    
    const projectComponent = projects.map(
        project => 
        <Projects key = {project.id} name = {project.name} description = {project.description} thumbnail = {project.thumbnail} github = {project.github} deployed = {project.deployed} website = {project.website} tags = {project.tags}/>
        )

    return (

        <div className="fullscreen">
            <section className = "featured-section">
                <p>2 years of professional experience in software development | possesses excellent technical aptitude.</p>
                <p> Proficient in developing Responsive and Interactive websites | Skilful in HTML5, CSS3, SCSS, Javascript, jQuery and React </p>
                <p>Hands on experience working with python; both django and flask | Sound understanding of databases, API, SQL queries, JSON</p>
                <p>Capable of peformance and unit testing, optimiation, Documentation, Version Control and Deployment</p>

            </section>
            <section className= "Projects">
                {projectComponent}
            </section>
            <section className = "link-buttons">
                <div>
                    <a href = "https://github.com/emmanuelmacharia" target = "_blank" rel = "noopener noreferrer">Click here, To see more projects</a>
                </div>
                <div>
                    <a href = "/contact">Get in touch</a>
                </div>
            </section>
        </div>
    )
}
