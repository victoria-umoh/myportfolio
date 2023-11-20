import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../components/Home';
import About from '../components/About';
//import "../../asset/css/style.css"; 
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isSticky: false, // Set the initial state
        };
      }
    
    //   Function to handle scroll and toggle the sticky class
      handleScroll = () => {
        const scrollY = window.scrollY;
    
        if (scrollY > 100) {
          this.setState({ isSticky: true });
        } else {
          this.setState({ isSticky: false });
        }
      };
    
    //   Attach the scroll event listener when the component mounts
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      // Remove the event listener when the component unmounts
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    render(){

        // Add the sticky-top class conditionally based on state
        const headerClass = this.state.isSticky ? "header_area sticky-top" : "header_area";

        return (
            <Router>
                <div className={headerClass}>
                    <header class="header_area">
                        <div class="main_menu">
                            <nav class="navbar navbar-expand-lg navbar-light">
                                <div class="container">
                                    
                                    <h1><a href="" class="text-decoration-none text-primary"><Link class="nav-link" to="/">VICTORIA</Link></a></h1>
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                    <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                                        <ul class="nav navbar-nav menu_nav justify-content-end">
                                            <li class="nav-item"><a href=""><Link class="nav-link text-decoration-none" to="/">Home</Link></a></li>
                                            <li class="nav-item"><a href="#"><Link class="nav-link" to="/about">About</Link></a></li>
                                            <li class="nav-item"><a href=""><Link class="nav-link" to="/portfolio">Portfolio</Link></a></li>
                                            <li class="nav-item"><a href=""><Link class="nav-link" to="/contact">Contact</Link></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </header>
                </div>

                <Routes>
                    <Route exact path="/" element={<Home />} /> 
                    <Route exact path="/about" element={<About />} /> 
                    <Route exact path="/portfolio" element={<Portfolio />} /> 
                    <Route exact path="/contact" element={<Contact />} /> 
                </Routes>
            </Router>
        )
    }
}

export default Header