import React from 'react'

// COMPONENTS

import Projects from './Projects'

export default function Home() {
    
    return (
        <div className="fullscreen">
            <section className = "featured-section">
                <p>This is my very own portfolio... here is where my projects reside</p>
                <p>does this mean that if i add more and more content here, it will have more space? this is so annoying</p>
                <p>We should totally add a featured app below this line</p>
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
