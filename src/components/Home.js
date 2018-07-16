import React, { Component } from 'react' ;
import Store from './Store' ;

class Home extends Component{
    render(){

        return(
            <div>
                <section class="slider-area">
                    <div id="home-one-crousel" class="carousel slide">
                        <div class="carousel-inner" role="listbox">
                            <div class="item active">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12 col-xs-12">
                                            <div class="slider-content text-left">
                                                <h2 class="first-animation">Adam Patrik</h2>
                                                <h3 class="second-animation">Let's Get To<br />Work in 2016</h3>
                                                <a  class="bordered-button fourth-animation">Let's Go<i class="fa fa-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="slider-overlay"></div>
                            </div>
                            <div class="item">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12 col-xs-12">
                                            <div class="slider-content text-left">
                                                <h2 class="first-animation">Adam Patrik</h2>
                                                <h3 class="second-animation">Let's Get To<br />Work in 2016</h3>
                                                <a class="bordered-button fourth-animation">Let's Go <i class="fa fa-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="slider-overlay"></div>
                            </div>
                            
                            <div class="item">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12 col-xs-12">
                                            <div class="slider-content text-left">
                                                <h2 class="first-animation">Adam Patrik</h2>
                                                <h3 class="second-animation">Let's Get To<br />Work in 2016</h3>
                                                <a class="bordered-button fourth-animation">Let's Go<i class="fa fa-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="slider-overlay"></div>
                            </div>
                        </div>

                        <a class="left carousel-control" href="#home-one-crousel" role="button" data-slide="prev">
                            <i class="fa fa-angle-left"></i>
                        </a>

                        <a class="right carousel-control" href="#home-one-crousel" role="button" data-slide="next">
                            <i class="fa fa-angle-right"></i>
                        </a>

                    </div>
                </section>
                <section class="donate-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-xs-12 text-center">
                                <div class="donate-content">
                                    <h2 class="section-title">
                                        Donate <span>Today!</span>
                                    </h2>
                                    <p class="section-subtitle">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                        ut <br />labore et dolore magna aliqua.
                                    </p>
                                    <div class="donate-buttons">
                                        <span>$25</span>
                                        <span>$50</span>
                                        <span class="active">$100</span>
                                        <span>$500</span>
                                        <span>More</span>
                                        <a class="filled-button">donate now</a>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="latest-news">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-xs-12 text-center">
                                <h2 class="section-title">Latest <span>News</span></h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-xs-12 col-sm-6">
                                <div class="news-wrap">
                                    <div class="news-img">
                                        <div class="news-date">
                                            <p>19 Feb 2016</p>
                                        </div>
                                        <img src="images/home1/news1.jpg" alt="" />
                                    </div>
                                    <h3><a>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt 
                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6 col-xs-12 col-sm-6">
                                <div class="thumbnail-news">
                                    <div class="news-img pull-left">
                                        <div class="news-date">
                                            <p>17 Feb 2016</p>
                                        </div>
                                        <img src="images/home1/news2.jpg" alt="" />
                                    </div>
                                    <div class="small-news pull-left">
                                        <h4><a >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="thumbnail-news">
                                    <div class="news-img pull-left">
                                        <div class="news-date">
                                            <p>16 Feb 2016</p>
                                        </div>
                                        <img src="images/home1/news3.jpg" alt="" />
                                    </div>
                                    <div class="small-news pull-left">
                                        <h4><a >Ullamco laboris nisi ut aliquip ex ea commodo consequat.</a></h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="thumbnail-news">
                                    <div class="news-img pull-left">
                                        <div class="news-date">
                                            <p>16 Feb 2016</p>
                                        </div>
                                        <img src="images/home1/news4.jpg" alt="" />
                                    </div>
                                    <div class="small-news pull-left">
                                        <h4><a >Laboris nisi ut aliquip ex ea commodo consequat.</a></h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="thumbnail-news">
                                    <div class="news-img pull-left">
                                        <div class="news-date">
                                            <p>14 Feb 2016</p>
                                        </div>
                                        <img src="images/home1/news5.jpg" alt="" />
                                    </div>
                                    <div class="small-news pull-left">
                                        <h4><a >Eiusmod tempor incididunt ut labore et dolore magna aliqua.</a></h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="mission-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-xs-12 no-padding-right">
                                <div class="mission-content">
                                    <h4>Mission & Vision</h4>
                                    <h2 class="section-title">Changes <span>We Need</span></h2>
                                    <p>“Organizing for Action: We’re the people who don’t just support progressive change—we’re fighting for it.”</p>
                                    <div class="singnature">
                                        <a >Adam Patrik Bio <i class="fa fa-long-arrow-right"></i></a>
                                        <img src="images/home1/singnature.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="change-person">
                        <img src="images/home1/changePerson.png" alt="" />
                    </div>
                </section>

                <Store />

                <section class="champaign-area">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6 no-padding col-xs-12 col-sm-6">
                                <div class="video-container">
                                    <a href="https://www.youtube.com/watch?v=4JrEPVE-G0k" id="videoPlay"><i class="fa fa-youtube-play"></i></a>
                                </div>
                            </div>
                            <div class="col-md-6 no-padding col-xs-12 col-sm-6">
                                <div class="counter-area">
                                    <h4>UPCOMING CAMPAIGN</h4>
                                    <h2 class="section-title">Make <span>Difference</span></h2>
                                    <p class="section-subtitle">Herbert Hoover  Conference House <br />San Diego, CA</p>
                                    <div id="clock"></div>
                                    <a class="filled-button">View Campaign</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="volunteer-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-xs-12 text-center">
                                <div class="volunteer-content">
                                    <div class="volunteer-icon">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <div class="clearfix"></div>
                                    </div>
                                    <h2 class="section-title"><span>Become a Volunteer!</span></h2>
                                    <p class="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut <br />labore et dolore magna aliqua.</p>
                                    <a class="filled-button" >Sign up to Volunteer</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="tweet-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-xs-12 text-center">
                                <div class="tweet-content">
                                    <i class="fa fa-twitter"></i>
                                    <p>Check out 'Politist - Personal Political Template' on #EnvatoMarket by <br />@themeum #themeforest <a >http://t.co/xGQF0aEz8F</a></p>
                                    <span>9min ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="subscribe-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-xs-12 text-center">
                                <div class="subscribe-content">
                                    <h3>Newsletters</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br />labore et dolore magna aliqua.</p>
                                </div>
                                <form action="#" method="post" class="subscribe-form" id="subscribe-form">
                                    <input type="email" name="email" placeholder="Enter your email id" />
                                    <button type="submit">Subscribe Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home ; 
        
        
        