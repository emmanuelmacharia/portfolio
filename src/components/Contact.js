import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMobile, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faFacebookF, faMicrosoft, faGoogle, faSlack, faSkype, faGithub, faTwitter, faQuora, faMediumM} from '@fortawesome/free-brands-svg-icons';
import { TimelineMax, Power2 } from "gsap/TweenMax";

export default class Contact extends React.Component {
    componentDidMount(){
        var timeline = new TimelineMax();
        timeline.staggerFrom('.personal-statement , .Address, .primary-email', 2, {
            opacity: 0,
            y: -60,
            ease: Power2.easeOut
        }, 0.2)
        timeline.staggerFrom('.secondary-email', 1, {
            opacity: 0,
            scale: 0.3,
            ease: Power2.easeOut
        }, 0.2, "-=1")
        timeline.staggerFrom('.phone', 0.5, {
            opacity: 0,
            scale: 0.5,
            ease: Power2.ease
        }, 0.2, "-=.8")
        timeline.staggerFrom('.linkedin, .github', 0.5, {
            opacity: 0,
            scale: 0.4,
            ease: Power2.ease
        }, 0.2, "-=.6")
        timeline.staggerFrom('.skype, .slack', 0.5, {
            opacity: 0,
            scale: 0.4,
            ease: Power2.ease
        }, 0.2, "-=.4")
        timeline.staggerFrom('.medium', 0.5, {
            opacity: 0,
            scale: 0.3,
            ease: Power2.ease
        }, 0.2, "-=.2")
        timeline.staggerFrom('.quora', 0.5, {
            opacity: 0,
            scale: 0.2,
            ease: Power2.ease
        }, 0.1, "-=.2")
        timeline.staggerFrom('.twitter', 0.5, {
            opacity: 0,
            scale: 0.3,
            ease: Power2.ease
        }, 0.2, "-=.2")
        timeline.staggerFrom('.facebook', 0.5, {
            opacity: 0,
            scale: 0.2,
            ease: Power2.ease
        }, 0.1, "-=.2")
    
    }
    render(){
         return(
        <div className = "fullscreen" >
                 <section className="location-info">
                     <section className="personal-statement">
                         <h4>It'd be great to hear from you</h4>
                         <p>
                            Whether you have questions about projects or are looking to hire me as a software developer for a project/contract. Or maybe you have suggestions on improvements to this site, or needed clarification on something; 
                            Do not hesitate to get in touch through any one of all these mediums. And if you'd like to know me even more, maybe consider connecting on linkedIn or following me on twitter or facebook; or reading my blogs on Medium.
                            Be sure to drop an email (through outlook preferrably) and I will get back to you as soon as I can...😎😉
                        </p>
                     </section>
                     <section className="contact-div">
                        <div className="Address">
                            find me here:
                             <p>Address: 28446 - 00200 <p>Queensway Road</p></p>
                             <a href="https://www.google.com/maps/place/Nairobi/@-1.303209,36.8473969,10z/data=!3m1!4b1!4m5!3m4!1s0x182f1172d84d49a7:0xf7cf0254b297924c!8m2!3d-1.2921573!4d36.822052"><FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp; Nairobi, Kenya</a>
                         </div>
                         <div className="myform">
                             <div className = "primary-email"><a href="mailto:samuelmarsha@outlook.com"><FontAwesomeIcon icon={faMicrosoft} />&nbsp;Outlook</a></div>
                             <div className = "secondary-email"><a href="mailto:samwelehrmarsha@gmail.com"><FontAwesomeIcon icon={faGoogle} />&nbsp;Gmail</a></div>
                             <div className = "phone"><a href="tel:+254707143761"><FontAwesomeIcon icon={faPhone} />&nbsp;work</a></div>
                             <div className = "phone"><a href="tel:+254786860761"><FontAwesomeIcon icon={faMobile} />&nbsp;cell</a></div>
                             <div className = "linkedin"><a href="https://linkedin.com/in/emmanuel-macharia" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} />&nbsp;linkedIn</a></div>
                             <div className = "github"><a href="https://github.com/emmanuelmacharia" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} />&nbsp;github</a></div>
                             <div className = "skype"><a href="skype:live:samuelmarsha?call"><FontAwesomeIcon icon={faSkype} />&nbsp;skype</a></div>
                             <div className = "slack"><a href = "https://slack.com"><FontAwesomeIcon icon ={faSlack} />&nbsp;slack</a></div>
                             <div className="medium"><a href="https://medium.com/@samwelehrmarsha" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMediumM} />&nbsp;Medium</a></div>
                             <div className="quora"><a href="https://www.quora.com/profile/Emmanuel-Macharia-2" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faQuora} />&nbsp;Quora</a></div>
                             <div className = "twitter"><a href="https://twitter.com/Samwelehrmarsha" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} />&nbsp;twitter</a></div>
                             <div className = "facebook"><a href="https://www.facebook.com/samuel.marsha.14" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} />&nbsp;facebook</a></div>
                         </div>
                     </section>
                 </section>
        </div>
        )
    }
   
}
