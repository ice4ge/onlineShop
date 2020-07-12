import React from 'react';

export const MainFooterField = () => {
    return (
        <div>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="single_footer_area">
                        <div class="footer-logo">
                            <img src="img/core-img/logo.PNG" alt="" />
                        </div>
                        <div class="copywrite_text d-flex align-items-center">
                            <p>
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Made with <i class="fa fa-heart-o" aria-hidden="true"></i> by FlyShop</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-3 col-lg-2">
                    <div class="single_footer_area">
                        <ul class="footer_widget_menu">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Faq</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-3 col-lg-2">
                    <div class="single_footer_area">
                        <ul class="footer_widget_menu">
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Our Policies</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 col-lg-5">
                    <div class="single_footer_area">
                        <div class="footer_heading mb-30">
                            <h6>Subscribe to our newsletter</h6>
                        </div>
                        <div class="subscribtion_form">
                            <form action="#" method="post">
                                <input type="email" name="mail" class="mail" placeholder="Your email here" />
                                <button type="submit" class="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="line"></div>
        </div>
    )
}
