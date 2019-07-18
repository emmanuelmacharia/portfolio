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
                <p>This is my very own portfolio... here is where my projects reside; sorry, im thinking of something brilliant to say here</p>
            </section>
            {/* <section className = "featured-section"></section> */}
            <section className= "Projects">
                {projectComponent}
            </section>
            <section className = "link-buttons">
                <div>
                    <a href = "https://github.com/emmanuelmacharia" target = "_blank" rel = "noopener noreferrer">Click here, To see more projects</a>
                </div>
                <div>
                    <a href= "/about">Know a little more about me</a>
                </div>
            </section>
        </div>
    )
}
