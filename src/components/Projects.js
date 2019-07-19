import React, { Component } from 'react'
import projects from './projectsData'


export default class Projects extends Component {
    constructor(props){
        super(props)
        this.state = {
            projects,
            trigger: true,
            contentStyle : {
                display: "none"
            }
        }
    }

    handleClick = event => {
        console.log(this.state.trigger)
        this.setState(prevState => {
            this.state.trigger = !this.state.trigger
            console.log(this.state.trigger)
        })
        if (this.state.trigger === true) {
            this.setState( 
                this.state.contentStyle = {display: "block"}
            )
        } else {
            this.setState(
                this.state.contentStyle = {display: "none"}
            )
        }
    }


    render() {
        // const projects = this.state.projects
        // const projectView = projects.map(
        //     project => {
        //         var key = project.id
        //         var name = project.name
        //         var description = project.description
        //         var github = project.github
        //         var website = project.website
        //         var thumbnnail = project.thumbnail
        //         var deployed = project.deployed
        //         }
        //     )
        //     console.log(projectView.key, projectView.name, projectView.description, projectView.github, projectView.website, projectView.thumbnail, projectView.deployed)
        return (
            <div>
                <button className = "project-wrapper" onClick = {this.handleClick}>
                    <div className = "thumbnail">
                        <img src= "https://cdn.pixabay.com/photo/2017/08/20/14/37/eat-2661935_960_720.jpg" class= "thumbnail-image" alt = "project-screenshot" />
                    </div>
                    <div className="text-wrapper">
                        <div className = "project-title">
                            <p>JavaScript Calculator</p>
                        </div>
                        <div className= "arrow-anim"></div>
                        <div className = "tags">
                            <span>Javascript</span>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>React</span>
                        </div>
                    </div>
                </button>
                <div className="project-content" style = {this.state.contentStyle}>
                    {/* <p> { projectView.description } </p> */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ratione, nemo sunt doloribus possimus doloremque non ex, tempora saepe dolorem ipsa, ad quo atque beatae. Iure, ab! Obcaecati, dicta eum?</p>
                    <div className="link-project" style={linkProjectStyle}>
                        <div className="link" style = {linkStyle}>
                            <a href="https://github.com/emmanuelmacharia" target="_blank" rel="noopener noreferrer">view source code</a>  
                        </div>
                        <div className = "link" style = {linkStyle}>
                            <a href="https://github.com/emmanuelmacharia" target="_blank" rel="noopener noreferrer">view live website</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

var linkStyle = {
    margin: "0.5px solid #ED0982",
    backgroundColor: "none",
    color: "#ED0982",
    textDecoration: "none"
}

var linkProjectStyle = {
    display: "inline-block",
    justifyContent: "space-around"
}