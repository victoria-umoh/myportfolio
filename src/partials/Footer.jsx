import React, {Component} from "react";

class Footer extends Component {

    constructor() {
        super();
        this.state = {
          currentYear: new Date().getFullYear()
        };
    }
    render(){
        return (
            <div>
                <footer class="footer_area">
                    <div class="container">
                        <div class="row footer_bottom justify-content-center">
                            <h5 class="col-lg-8 col-sm-12 footer-text">
                                <strong>Copyright &copy; {this.state.currentYear} | All rights reserved</strong>
                                {/* <script>document.write(new Date().getFullYear());</script>
                                <script>document.querySelector('.footer-text').innerHTML += new Date().getFullYear();</script> */}
                                
                            </h5>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer