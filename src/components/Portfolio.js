import React, {Component} from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class Portfolio extends Component{

    render(){
        return(
            <div>
                
                {/*================Start Portfolio Area =================*/}
                <section className="portfolio_area" id="portfolio">
                    <div className="container">
                    <div className="row">
                            <div className="col-lg-12">
                                <div className="main_title text-center">
                                <h2>My Projects </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="main_title text-center">
                                <h2>My Projects </h2>
                                </div>
                            </div>
                        </div>
                        <div className="filters portfolio-filter">
                            <ul>
                                <li className="active" data-filter="*">all</li>
                                <li data-filter=".popular">completed</li>
                                {/* <li data-filter=".latest"> latest</li>
                                <li data-filter=".following">following</li> */}
                                <li data-filter=".upcoming">upcoming</li>
                            </ul>
                        </div>
                        <div className="filters-content">
                            <div className="row portfolio-grid justify-content-center">
                                <div className="col-lg-4 col-md-6 all popular">
                                <div className="portfolio_box">
                                    <div className="single_portfolio">
                                    <img className="img-fluid w-100" src="asset/projects/earlycare.png" alt="" />
                                    <div className="overlay" />
                                    <a href="asset/projects/earlycare.png" className="img-gal">
                                        <div className="icon">
                                        <span className="lnr lnr-cross" />
                                        </div>
                                    </a>
                                    </div>
                                    <div className="short_info">
                                    <h4>Personal healthcare monitor app</h4><br></br>
                                    <p><b>Technologies Used: </b> 
                                        <span>HTML5, CSS3, Bootstrap, JavaScript, Ajax, mySQL, jquery, PHP</span>
                                    </p>
                                    <a href="https://early-care.netlify.app" target="_blank" rel="noopener noreferrer" class="btn btn-danger btn-lg">Visit Project</a>
                                    </div>
                                </div>
                                </div>

                                <div className="col-lg-4 col-md-6 all popular">
                                <div className="portfolio_box">
                                    <div className="single_portfolio">
                                    <img className="img-fluid w-100" src="asset/projects/chow.png" alt="" />
                                    <div className="overlay" />
                                    <a href="asset/projects/earlycare.png" className="img-gal">
                                        <div className="icon">
                                        <span className="lnr lnr-cross" />
                                        </div>
                                    </a>
                                    </div>
                                    <div className="short_info">
                                    <h4>Restaurant Management App</h4><br></br>
                                    <p><b>Technologies Used: </b> 
                                        <span>HTML5, CSS3, Bootstrap, JavaScript, mySQL, jquery, Laravel</span>
                                    </p>
                                    <a href="https://github.com/victoria-umoh/chow" target="_blank" rel="noopener noreferrer" class="btn btn-danger btn-lg">Visit Project</a>
                                    </div>
                                </div>
                                </div>

                                {/* <div className="col-lg-4 col-md-6 all upcoming">
                                <div className="portfolio_box">
                                    <div className="single_portfolio">
                                    <img className="img-fluid w-100" src="asset/img/portfolio/p5.jpg" alt="" />
                                    <div className="overlay" />
                                    <a href="asset/img/portfolio/p6.jpg" className="img-gal">
                                        <div className="icon">
                                        <span className="lnr lnr-cross" />
                                        </div>
                                    </a>
                                    </div>
                                    <div className="short_info">
                                    <h4>E-Commerce Site</h4><br></br>
                                    <p><b>Technologies Used: </b> 
                                        <span>HTML5, CSS3, Bootstrap, JavaScript, mySQL, Ajax, jquery, Laravel</span>
                                    </p>
                                    <a href="#" class="btn btn-danger btn-lg">Visit Project</a>
                                    </div>
                                </div>
                                </div> */}

                                {/* <div className="col-lg-4 col-md-6 all upcoming">
                                <div className="portfolio_box">
                                    <div className="single_portfolio">
                                    <img className="img-fluid w-100" src="asset/img/portfolio/p5.jpg" alt="" />
                                    <div className="overlay" />
                                    <a href="asset/img/portfolio/p6.jpg" className="img-gal">
                                        <div className="icon">
                                        <span className="lnr lnr-cross" />
                                        </div>
                                    </a>
                                    </div>
                                    <div className="short_info">
                                    <h4>E-Commerce Site</h4><br></br>
                                    <p><b>Technologies Used: </b> 
                                        <span>HTML5, CSS3, Bootstrap, JavaScript, mySQL, Ajax, jquery, Laravel</span>
                                    </p>
                                    <a href="#" class="btn btn-danger btn-lg">Visit Project</a>
                                    </div>
                                </div>
                                </div> */}

                                <div className="col-lg-4 col-md-6 all upcoming">
                                <div className="portfolio_box">
                                    <div className="single_portfolio">
                                    <img className="img-fluid w-100" src="asset/img/portfolio/p5.jpg" alt="" />
                                    <div className="overlay" />
                                    <a href="asset/img/portfolio/p6.jpg" className="img-gal">
                                        <div className="icon">
                                        <span className="lnr lnr-cross" />
                                        </div>
                                    </a>
                                    </div>
                                    <div className="short_info">
                                    <h4>Real Estate Site</h4><br></br>
                                    <p><b>Technologies Used: </b> 
                                        <span>HTML5, CSS3, Bootstrap, JavaScript, mySQL, Ajax, jquery, Laravel</span>
                                    </p>
                                    <button href="#" class="btn btn-danger btn-lg">Visit Project</button>
                                    </div>
                                </div>
                                </div>

                                <div className="col-lg-4 col-md-6 all upcoming">
                                <div className="portfolio_box">
                                <div className="single_portfolio">
                                <img className="img-fluid w-100" src="asset/img/portfolio/p5.jpg" alt="" />
                                <div className="overlay" />
                                <a href="asset/img/portfolio/p6.jpg" className="img-gal">
                                    <div className="icon">
                                    <span className="lnr lnr-cross" />
                                    </div>
                                </a>
                                </div>
                                <div className="short_info">
                                <h4>Real Estate Site</h4><br></br>
                                <p><b>Technologies Used: </b> 
                                    <span>HTML5, CSS3, Bootstrap, JavaScript, mySQL, Ajax, jquery, Laravel</span>
                                </p>
                                <button href="#" class="btn btn-danger btn-lg">Visit Project</button>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*================End Portfolio Area =================*/}

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
                                        <button>
                                            <img src="img/logo.png" alt="" />
                                        </button>
                                        {/* <h4>Follow Me</h4> */}
                                    </div>
                                    <div className="footer_social">
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

export default Portfolio