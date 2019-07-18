import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';


export default class Projects extends Component {
    constructor(props){
        super(props)
        this.state = {
            trigger: true,
            contentStyle : {
                display: "none",
            }
        }
    }

    handleClick = event => {
        var arrow = document.getElementsByClassName("arrow-head");
        var arrowArray = Array.from(arrow)
        this.setState(prevState => {
            this.state.trigger = !this.state.trigger
        })
        if (this.state.trigger === true) {
            this.setState( 
                this.state.contentStyle = {
                    display: "block", 
                    color: "white", 
                    fontSize: "inherit",
                    transition: "all 300ms ease 0s"
                } 
            );
            this.styleChildren();
            arrowArray.map(arr => {
                arr.style.transform = "rotate(270deg)";
                arr.style.color = "#5AA2FF";
                arr.focus();
            })
        } else {
            this.setState(
                this.state.contentStyle = {display: "none"}
            )
            arrowArray.map(arr => {
                arr.style.transform = "rotate(90deg)";
                arr.style.color = "#white";
                arr.blur();
            })
        }
    }

    styleChildren = () => {
        var wrapper = document.getElementsByClassName("all")
        var description = document.getElementsByClassName("description")
        var linkDiv  = document.getElementsByClassName("link-project")
        var links = document.getElementsByClassName("link")
        var imageDiv = document.getElementsByClassName("img")
        var image = document.getElementsByClassName("p-image")

        Array.from(wrapper).map(wrapper => {
            wrapper.setAttribute("class", "project-content-wrapper")
        })
        Array.from(linkDiv).map(singleDiv => {
            singleDiv.setAttribute("class", "link-container")
        })
        Array.from(links).map(link => {
            link.setAttribute("class", "project-link")
        })

        Array.from(description).map(p => {
            p.setAttribute("class", "paragraph")
        })

        Array.from(imageDiv).map(img => {
            img.setAttribute("class", "content-image")
        })

        Array.from(image).map(img => {
            img.setAttribute("class", "project-image")
        })

    }

    animateArrow =  () => {
        var arrow = document.getElementsByClassName("arrow-head");
        Array.from(arrow).map(arr => {

            arr.style.transform = "rotate(270deg)";
            arr.style.color = "#5AA2FF";
            arr.focus();
        })
        
    }

    render() {
        const relevantTags = this.props.tags.map(tag => <span>{tag}</span>)
        const links = this.props.deployed ? <div className="link-project"><div className="link"><a href={this.props.github} target="_blank" rel="noopener noreferrer">view source code</a></div><div className="link"><a href={this.props.website} target="_blank" rel="noopener noreferrer">view live site</a></div></div> : <div className="link"><a href= {this.props.github} target="_blank" rel="noopener noreferrer">view source code</a></div>
        return (
            <div>
                <button className = "project-wrapper" onClick = {this.handleClick}>
                    <div className = "thumbnail">
                        <img src= "https://cdn.pixabay.com/photo/2017/08/20/14/37/eat-2661935_960_720.jpg" className= "thumbnail-image" alt = "project-screenshot" />
                    </div>
                    <div className="text-wrapper">
                        <div className = "project-title">
                            <p>{this.props.name}</p>
                        </div>
                        <div className = "tags">
                            {relevantTags}
                        </div>
                    </div>
                    <div className="arrow-head">
                        <i className="chevron-down"><FontAwesomeIcon icon={faChevronRight} /></i>
                    </div>
                </button>
                <div className="project-content" style = {this.state.contentStyle}>
                    <div className = "all">
                        <div className = "description">
                            <p>{this.props.description}</p>
                        </div>
                        <div className = "img">
                            <img src="https://cdn.pixabay.com/photo/2017/08/20/14/37/eat-2661935_960_720.jpg" className="thumbnail-image p-image" alt="project-screenshot" />
                        </div>
                        {links}
                    </div>
                </div>
            </div>
        )
    }
}