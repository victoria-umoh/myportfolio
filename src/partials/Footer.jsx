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
                <footer>
                    <div class="container">
                        <div class="row justify-content-center mt-0">
                            <h5 class="text-center">
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