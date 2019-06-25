import React from 'react'

// COMPONENTS

import Projects from './Projects'

export default function Home() {
    
    return (
        <div className="fullscreen">
            <section className = "featured-section">
                <p>This is my very own portfolio... here is where my projects reside</p>
            </section>
            {/* <section className = "featured-section"></section> */}
            <section className= "Projects">
                <Projects />
                <Projects />
                <Projects />
                <Projects />
                <Projects />
                <Projects />
            </section>
        </div>
    )
}
