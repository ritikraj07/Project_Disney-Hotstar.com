import React from 'react';
import styles from '../CSS/footer.module.css'
function Footer(props) {
    return (
        <div className={styles.Footer}>
            {/* for left part */}
            <div>
                {/* <ul>
                    <li><a href="/in/about-us" target="_blank" rel="noopener noreferrer" class="">About Disney+ Hotstar</a></li>
                    <li><a href="/in/terms-of-use" target="_blank" rel="noopener noreferrer" class="">Terms of Use</a></li>
                    <li><a href="/in/privacy-policy" target="_blank" rel="noopener noreferrer" class="">Privacy Policy</a></li>
                    <li><a href="https://help.hotstar.com/in/en/support/home" target="_blank" rel="noopener noreferrer" class="">FAQ</a></li>
                    <li><a href="https://help.hotstar.com/in/en/support/tickets/new" target="_blank" rel="noopener noreferrer" class="">Feedback</a></li>
                    <li><a href="https://careers.hotstar.com" target="_blank" rel="noopener noreferrer" class="">Careers</a></li>
                </ul> */}
                <p>In case of any query, email us at <a href="https://www.hotstar.com/in/subscribe/get-started" target="_blank" rel="noopener noreferrer" >subscribe@hotstar.com</a></p>
                <div className={styles.footer_links}>
                    <a href="/in/about-us" target="_blank" rel="noopener noreferrer" >About Disney+ Hotstar</a>
                    <a href="/in/terms-of-use" target="_blank" rel="noopener noreferrer" >Terms of Use</a>
                    <a href="/in/privacy-policy" target="_blank" rel="noopener noreferrer" >Privacy Policy</a>
                    <a href="https://help.hotstar.com/in/en/support/home" target="_blank" rel="noopener noreferrer" >FAQ</a>
                    <a href="https://help.hotstar.com/in/en/support/tickets/new" target="_blank" rel="noopener noreferrer" >Feedback</a>
                    <a href="https://careers.hotstar.com" target="_blank" rel="noopener noreferrer" >Careers</a>
                </div>


                <p className={styles.copyright}>© 2023 STAR. All Rights Reserved. HBO,
                    Home Box Office and all related channel and programming
                    logos are service marks of, and all related programming
                    visuals and elements are the property of, Home Box Office,
                    Inc. All rights reserved.
                </p>
            </div>

            {/* for right part */}
            <div className={styles.connect}>
                <div className="social-unit col-xs-4">
                    <div>
                        <p>Connect with us</p>
                        <a   className={styles.fb} href="https://www.facebook.com/DisneyPlusHotstar" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook-f"></i></a>
                        <a  className={styles.twitter} href="https://twitter.com/DisneyPlusHS" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-twitter"></i></a>
                    </div>
                </div>
                <div className="app-unit col-xs-8">
                    <div className="store-wrapper">
                        <p>Disney+ Hotstar App</p>
                        <a className={styles.playstore} href="https://play.google.com/store/apps/details?id=in.startv.hotstar" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-google-play"></i></a>
                        <a className={styles.appstore} href="https://itunes.apple.com/in/app/hotstar/id934459219?mt=8" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-app-store"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;