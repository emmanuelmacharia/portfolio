import React from 'react'

export default function About() {
    return (
        <div className="fullscreen">
            <section className="personal-statement">
                <h3>Personal statement</h3>
                <p>
                    A creative, passionate, versatile and self- motivated graduate from Maseno University with good interpersonal and communication skills. 
                    He is methodical, analytical and proactive; skills he has learned and used while working with the County Government of Nairobi as an Industrial attaché. 
                    He is a full-stack developer, proficient in python and Javascript, capable of working with both object-oriented and functional programming. He has a good understanding of test-driven development, documentation and database querying and management. 
                    He possesses strong technical experience of approximately 2 years in working at Geecko Group Holdings where he worked with the development team on front-end design, error handling, search engine optimization, feature creation, IT support and app development oversight. 
                    Having also been through the Andela Bootcamp, he has experience working with JavaScript, Html, CSS and libraries such as Bootstrap, jQuery and SCSS, Node, React and Redux. 
                    He also has experience working with back- end technologies in python, creating restful APIs in frameworks such as flask and Django.
                    He thrives best in a dynamic, interactive and challenging environment where he would optimally utilize his talents and skills. 
                    Looking to work in a creative environment where he would continuously learn and develop his skills in various capacities within an organization.
                </p>
            </section>
            <hr />
            <article className ="about">
                <aside className="technical-skills">
                    <h2>Technical skills</h2>
                    <h3>Languages,Frameworks & Libraries</h3>
                    <ul>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>Django</li>
                        <li>Flask</li>
                        <li>React and Redux</li>
                        <li>JQuery</li>
                        <li>Bootstrap</li>
                        <li>SASS/SCSS</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>SQL</li>
                    </ul>
                    <h3>Databases</h3>
                    <ul>
                        <li>Postgresql</li>
                        <li>MySql</li>
                        <li>MsSql</li>
                        <li>Redis</li>
                        <li>MongoDB</li>
                    </ul>
                    <h3>Development Skills</h3>
                    <ul>
                        <li>Full-Stack development</li>
                        <li>MERN stack development</li>
                        <li>Test Driven Development</li>
                        <li>Object Oriented Programming</li>
                        <li>Functional Programming</li>
                        <li>API (REST)</li>
                        <li>Webpack</li>
                        <li>Search Engine Optimization</li>
                        <li>Data Structures</li>
                        <li>Algorithms</li>
                        <li>Continuous Integration</li>
                        <li>Git and Version Control</li>
                        <li>Documentation</li>
                        <li>Web UI design</li>
                        <li>User Experience (UX) design</li>
                    </ul>
                </aside>
                <section className="experience">
                    <h2>Experience</h2>
                    <h3>Geecko group | Digital Marketing Specialist, sales and customer service</h3>
                    <ul>
                        <li>Together with the development team, implemented features that improved the overall experience of the applications.</li>
                        <li>Increased performance of the website by over 40% through measures such as better caching policies, serving static files, lazy loading and minifying scripts among others.</li>
                        <li>Optimized the site for better search results where the site obtained some of the top search results.</li>
                        <li>Together with the development team, designed and oversaw development of the mobile apps for Android and IOS.</li>
                        <li>Designed the blog page and curated its content for the syfe car-hire service.</li>
                        <li>Created a CRM and a sales tracker to keep track of the sales the company made. Increased the AD reach both on Facebook and Google.</li>
                        <li>Designed documents and business plans that played a big role in getting prospective investors to consider the company</li>
                        <li>Lead the training of clients on use of the company’s software products such as syfe and syve. This enabled easier integration into the service and that the client could fully benefit from the services offered.</li>
                        <li>Also provided technical support to clients on software and hardware errors; worked on testing, debugging, troubleshooting and diagnostics of errors in the products. </li>
                    </ul>
                    <h3>
                        Real Plan consultants | Field Researcher
                    </h3>
                    <ul>
                        <li>Compiled and analyzed the data collected. This enabled the development of a master-plan for an urban renewal scheme for the Eastlands area, Nairobi.</li>
                        <li>Conducted interviews on the public to gain insight into the history, the trends and the challenges the respondents faced in order to incorporate those insights into the long term master-plan.</li>
                        <li>Recorded five forms of road transportation and housing data in the entire Eastlands region of Nairobi</li>
                    </ul>
                    <h3>
                        Nairobi county government | Industrial Attache
                    </h3>
                    <ul>
                        <li>Together with the supervisors, spearheaded a training conference for sub-county officials on proper enforcement and pricing of advertisement developments for Nairobi County. This delegated revenue collection across the county to the sub-county level which in turn increased the efficiency of service delivery from the county government.</li>
                        <li>Together with the supervisors, responded to 2 emergencies where buildings had collapsed to make preliminary assessments of the damage and write detailed reports on them. </li>
                        <li>Conducted detailed analysis of the housing records in the county, and digitized these records. This enabled for easier retrieval of records and better forecasting of the housing trends within the city.</li>
                        <li>Monitored developments around Nairobi city and enforced regulations on the non-compliant</li>
                    </ul>
                </section>
                <section className="education">
                    <h2>Education</h2>
                    <h3>Maseno University</h3>
                    <ul><li>Bachelor of Arts, Urban and Regional planning with IT </li></ul>
                    <h3>Institute of Human Resource Management</h3>
                    <ul><li>International Computers' Driver's License </li></ul>

                    <h2>Certifications</h2>

                    <h3>Andela Learning Community; Google Certification</h3>
                    <ul><li>Mobile web specialist</li></ul>

                    <h3>FreeCodeCamp.org</h3>
                    <ul>
                        <li>Responsive Web Design</li>
                        <li>Javascript, Algorithms and Data Structures</li>
                        <li>Front-end Libraries</li>
                        <li>Data Visualization</li>
                        <li>APIs and Microservices</li>
                        <li>Information Security and Quality Assurance</li>
                    </ul>

                    <h3>Google Skills for Africa</h3>
                    <ul><li>Fundamentals of Digital Marketing</li></ul>
                </section>
            </article>
            <section className = "link-buttons">
                <div>
                <a href = "/contact">Get in touch</a>
                </div>
            </section>
        </div>
    )
}
