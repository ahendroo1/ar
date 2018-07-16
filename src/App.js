import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="color-switcher">
            <a class="toggle-switch" ><i class="fa fa-cog"></i></a>
            <div class="style-choose">
                <a  data-color="preset1"><img alt="Preset" src="images/colorpreset/preset1/preset1.png" /></a>
                <a  data-color="preset2"><img alt="Preset" src="images/colorpreset/preset2/preset2.png" /></a>
                <a  data-color="preset3"><img alt="Preset" src="images/colorpreset/preset3/preset3.png" /></a>
                <a  data-color="preset4"><img alt="Preset" src="images/colorpreset/preset4/preset4.png" /></a>
            </div>
        </div>

        <header class="header-area">
            <ul class="social-icon pull-left">
                <li><a ><i class="fa fa-facebook"></i></a></li>
                <li><a ><i class="fa fa-twitter"></i></a></li>
                <li><a ><i class="fa fa-google-plus"></i></a></li>
                <li><a ><i class="fa fa-instagram"></i></a></li>
            </ul>
            <nav class="main-menu hidden-xs hidden-sm">
                <ul class="menu-left pull-left">
                    <li class="menu-has-children">
                        <a >Home</a>
                        <ul>
                            <li><a >Home 1</a></li>
                            <li><a>Home 2</a></li>
                            <li><a >Home 3</a></li>
                            <li class="child-has-children">
                                <a >Home 4</a>
                                <ul>
                                    <li><a >Sample Home 1</a></li>
                                    <li><a >Sample Home 2</a></li>
                                    <li class="child-has-children">
                                        <a >Sample Home 3</a>
                                        <ul>
                                            <li><a >Extra Homepage 1</a></li>
                                            <li><a >Extra Homepage 2</a></li>
                                            <li><a >Extra Homepage 3</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    {/* <li><a href="biography.html">Biography</a></li>
                    <li class="menu-has-children">
                        <a href="news.html">News</a>
                        <ul>
                            <li><a href="newsDetails.html">News Details</a></li>
                        </ul>
                    </li>
                    <li><a href="event.html">Event</a></li> */}
                </ul>
                <div class="pull-left logo-area">
                    <a ><img src="images/home1/logo.png" alt="Logo" /></a>
                </div>
                <ul class="menu-right pull-left">
                    <li><a >Photos</a></li>
                    <li><a >Volunteer</a></li>
                    <li class="menu-has-children">
                        <a >Shop</a>
                        <ul>
                            <li><a >Shop Details</a></li>
                        </ul>
                    </li>
                    <li><a >Donate</a></li> 
                </ul>
            </nav>
            <ul class="pull-right search-cart">
                <li><a  id="search-toggle"><i class="fa fa-search"></i></a></li> 
                <li class="user-profile-menu">
                    <a ><i class="fa fa-user"></i></a>
                    <ul>
                        {/* <li><a href="#">My Campaign</a></li> */}
                    </ul>
                </li>
                <li><a ><i class="fa fa-shopping-basket"></i><span>(2)</span></a></li> 
                
            </ul>
            <div class="clearfix"></div>

            <section class="search-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-xs-12">
                            <form  method="post" class="search-form">
                                <input type="search" name="search" placeholder="Search..." />
                                <a  id="search-close"><i class="fa fa-times"></i></a>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </header>
        <div class="hidden-lg hidden-md" id="toggle-menu">
            <div class="pull-left logo-area">
                <a ><img src="images/home1/logo.png" alt="Logo" /></a>
            </div>
            <div class="mobile-menu-toggle pull-right">
                <a ><i class="fa fa-bars"></i></a>
            </div>
            <div class="clearfix"></div>
            <nav class="mobile-menu pull-left hidden-lg hidden-md">
                <ul>
                    <li class="mobile-menu-has-children">
                        <a href="index-2.html">Home</a>
                        <ul>
                            <li><a href="index-2.html">Home 1</a></li>
                            <li><a href="index2.html">Home 2</a></li>
                            <li><a href="index3.html">Home 3</a></li>
                        </ul>
                    </li>
                    <li><a href="biography.html">Biography</a></li>
                    <li class="mobile-menu-has-children">
                        <a href="news.html">News</a>
                        <ul>
                            <li><a href="news.html">News</a></li>
                            <li><a href="newsDetails.html">News Details</a></li>
                        </ul>
                    </li>
                    <li><a href="event.html">Event</a></li>
                    <li><a href="photo.html">Photos</a></li>
                    <li><a href="volunteer.html">Volunteer</a></li>
                    <li class="mobile-menu-has-children">
                        <a href="shop.html">Shop</a>
                        <ul>
                            <li><a href="shop.html">Shop</a></li>
                            <li><a href="shopDetails.html">Shop Details</a></li>
                        </ul>
                    </li>
                    <li><a >Donate</a></li> 
                </ul>
            </nav>
        </div>
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
        <section class="shop-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-xs-12 text-center">
                        <h2 class="section-title">Shop for <span>Campaign</span></h2>
                        <p class="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br />labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div class="row">
                    <div id="product-crousel" class="owl-carousel owl-theme">
                        <div class="col-md-4 col-xs-12 text-center">
                            <div class="product-details">
                                <div class="product-img">
                                    <img src="images/home1/tshirt1.png" alt="" />
                                    <a class="filled-button">Add to Cart</a>
                                </div>
                                <h4><a >Politistst tshirt</a></h4>
                                <p>$15.00</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-xs-12 text-center">
                            <div class="product-details">
                                <div class="product-img">
                                    <img src="images/home1/tshirt2.png" alt="" />
                                    <a  class="filled-button">Add to Cart</a>
                                </div>
                                <h4><a >Politistst tshirt</a></h4>
                                <p>$15.00</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-xs-12 text-center">
                            <div class="product-details">
                                <div class="product-img">
                                    <img src="images/home1/tshirt3.png" alt="" />
                                    <a class="filled-button">Add to Cart</a>
                                </div>
                                <h4><a >Politistst tshirt</a></h4>
                                <p>$15.00</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-xs-12 text-center">
                            <div class="product-details">
                                <div class="product-img">
                                    <img src="images/home1/tshirt1.png" alt="" />
                                    <a  class="filled-button">Add to Cart</a>
                                </div>
                                <h4><a >Politistst tshirt</a></h4>
                                <p>$15.00</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-xs-12 text-center">
                            <div class="product-details">
                                <div class="product-img">
                                    <img src="images/home1/tshirt2.png" alt="" />
                                    <a  class="filled-button">Add to Cart</a>
                                </div>
                                <h4><a >Politistst tshirt</a></h4>
                                <p>$15.00</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-xs-12 text-center">
                            <div class="product-details">
                                <div class="product-img">
                                    <img src="images/home1/tshirt3.png" alt="" />
                                    <a class="filled-button">Add to Cart</a>
                                </div>
                                <h4><a >Politistst tshirt</a></h4>
                                <p>$15.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

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
    );
  }
}

export default App;