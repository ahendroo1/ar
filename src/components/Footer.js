import React, { Component } from 'react' ;

class Footer extends Component{
    render(){

        return(
            <div>
                <footer class="footer-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-2 col-md-offset-1 col-xs-12 text-center">
                                <p class="copy-right">&copy; 2016 politist </p>
                            </div>
                            <div class="col-md-9 col-xs-12 text-left">
                                <ul class="footer-menu">
                                    <li class="wow fadeInLeft"><a >Terms of Service</a></li>
                                    <li class="wow fadeInLeft"><a >Privacy Policy</a></li>
                                    <li class="wow fadeInLeft"><a >Contact</a></li>
                                    <li class="wow fadeInLeft"><a >Speeches</a></li>
                                    <li class="wow fadeInLeft"><a >Biography</a></li>
                                    <li class="wow fadeInLeft"><a >Donation</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer ; 