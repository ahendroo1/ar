import React, { Component } from 'react' ;


class Header extends Component {

    render(){
        
        return(
            <div>

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
                            <li><a href="biography.html">Biography</a></li>
                            <li class="menu-has-children">
                                <a href="news.html">News</a>
                                <ul>
                                    <li><a href="newsDetails.html">News Details</a></li>
                                </ul>
                            </li>
                            <li><a href="event.html">Event</a></li>
                        </ul>
                        <div class="pull-left logo-area">
                            <a ><img src="http://androrohmana.com/countdown/images/logo-TA-3.png" alt="Logo" /></a>
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
            </div>
        )

    }
}

export default Header ;