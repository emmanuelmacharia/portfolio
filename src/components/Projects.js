import React, { Component } from 'react'
import projects from './projectsData'


export default class Projects extends Component {
    constructor(props){
        super(props)
        this.state = {
            projects,
            trigger: true,
            contentStyle : {
                display: "none",
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
                this.state.contentStyle = {
                    display: "block", 
                    color: "white", 
                    fontSize: "inherit",
                    marginTop: "-1rem"
                }
            );
            this.styleChildren();
        } else {
            this.setState(
                this.state.contentStyle = {display: "none"}
            )
        }
    }

    styleChildren = () => {
        var description = document.getElementsByClassName("description")[0];
        var linkdiv = document.getElementsByClassName("link-project")[0]
        var links = document.getElementsByClassName("link")
        description.body.style = {
            padding: "1rem",
            textAlign: 'justify',
            margin: "0 0 0 0.5rem",
            width: "80%",
            lineHeight: 1.15
        }
        linkdiv.body.style = {
            display: "flex",
            justifyContent: "space-around"
        }

        links.body.style = {
            border: "0.5px solid #ED0982",
            borderRadius: "1rem",
            margin: "0.3rem"
        }
    }

    render() {
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
                    <div className = "description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ratione, nemo sunt doloribus possimus doloremque non ex, tempora saepe dolorem ipsa, ad quo atque beatae. Iure, ab! Obcaecati, dicta eum?</p>
                    </div>
                    <div className="link-project">
                        <div className="link">
                            <a href="https://github.com/emmanuelmacharia" target="_blank" rel="noopener noreferrer">view source code</a>  
                        </div>
                        <div className = "link">
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