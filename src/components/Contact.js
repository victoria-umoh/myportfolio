import React, {Component} from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";



class Contact extends Component{

    render(){
        return(
            <div>
                {/* <!--================Contact Area =================--> */}
                <section class="contact_area section_gap">
                    <div class="container">
                    <footer class="footer_area">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="main_title text-center">
                                    <h2>Contact Me </h2>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-lg-12">
                                <div class="footer_top flex-column">
                                    <div class="footer_logo">
                                    </div>
                                    <div class="footer_social socialIcons">
                                        <a href="mailto:victoriasuave07@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size="2xl" icon={faEnvelope} /></a>
                                        <a href="https://github.com/victoria-umoh" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size="2xl" icon={faGithub} /></a>
                                        <a href="https://facebook.com/vickygurero" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size="2xl" icon={faFacebook} /></a>
                                        <a href="https://x.com/vickee571" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size="2xl" icon={faTwitter} /></a>                                        <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
                                        <a href="https://instagram.com/st.victoria_" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size="2xl" icon={faInstagram} /></a>
                                        <a href="https://linkedin.com/in/victoria-umoh-1a78a3108" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size="2xl" icon={faLinkedin} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </footer>   
                    </div>
                </section>
                {/* <!--================Contact Area =================--> */}
            </div>
        )
    }
}

export default Contact