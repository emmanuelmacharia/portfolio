import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMobile, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faFacebookF, faMicrosoft, faGoogle, faSkype, faGithub, faTwitter, faQuora} from '@fortawesome/free-brands-svg-icons';
export default function Contact() {
    return (
        <div className="fullscreen">
            <section className= "location-info">
                <section className= "personal-statement">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quasi natus dolores, molestiae ex quam velit modi assumenda voluptatum voluptatibus praesentium saepe, 
                        eum voluptates, nemo optio omnis? Quasi repellendus expedita alias.
                        Here's how to get in touch with me....
                    </p>
                </section>
                <div className = "contact-div">
                    find me here: <div><a href="https://www.google.com/maps/place/Nairobi/@-1.303209,36.8473969,10z/data=!3m1!4b1!4m5!3m4!1s0x182f1172d84d49a7:0xf7cf0254b297924c!8m2!3d-1.2921573!4d36.822052"><FontAwesomeIcon icon={ faMapMarkerAlt } /> &nbsp; Nairobi, Kenya</a></div>
                    <div className="myform">
                        <div><a href="mailto:samuelmarsha@outlook.com"><FontAwesomeIcon icon= { faMicrosoft } /> &nbsp; Outlook</a></div>
                        <div><a href="mailto:samuelmarsha@outlook.com"><FontAwesomeIcon icon={ faGoogle } /> &nbsp; Gmail</a></div>
                        <div><a href="tel:+254707143761"><FontAwesomeIcon icon={faPhone} /> &nbsp; work</a></div>
                        <div><a href="tel:+254707143761"><FontAwesomeIcon icon={ faMobile } /> &nbsp; cell</a></div>
                        <div><a href="https://linkedin.com/in/emmanuel-macharia"><FontAwesomeIcon icon={faLinkedinIn} /> &nbsp; linkedIn</a></div>
                        <div><a href="tel:+254707143761"><FontAwesomeIcon icon={ faSkype } /> &nbsp; skype</a></div>
                        <div><a href="https://www.facebook.com/samuel.marsha.14"><FontAwesomeIcon icon={ faFacebookF } /> &nbsp; facebook</a></div>
                        <div><a href="https://twitter.com/Samwelehrmarsha"><FontAwesomeIcon icon={ faTwitter } /> &nbsp; twitter</a></div>
                        <div><a href="https://github.com/emmanuelmacharia"><FontAwesomeIcon icon={ faGithub } /> &nbsp; github</a></div>
                        <div><a href="https://github.com/emmanuelmacharia"><FontAwesomeIcon icon={faQuora} /> &nbsp; Quora</a></div>
                    </div>
                </div>
            </section>
        </div>
    )
}
