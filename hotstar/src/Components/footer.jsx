import React from 'react';
import styles from '../CSS/footer.module.css'
function Footer() {
    return (
        <div className={styles.Footer}>
            {/* for left part */}
            <div>
                <ul className={styles.link}>
                    <li><a href="/in/about-us" target="_blank" rel="noopener noreferrer" class="">About Disney+ Hotstar</a></li>
                    <li><a href="/in/terms-of-use" target="_blank" rel="noopener noreferrer" class="">Terms of Use</a></li>
                    <li><a href="/in/privacy-policy" target="_blank" rel="noopener noreferrer" class="">Privacy Policy</a></li>
                    <li><a href="https://help.hotstar.com/in/en/support/home" target="_blank" rel="noopener noreferrer" class="">FAQ</a></li>
                    <li><a href="https://help.hotstar.com/in/en/support/tickets/new" target="_blank" rel="noopener noreferrer" class="">Feedback</a></li>
                    <li><a href="https://careers.hotstar.com" target="_blank" rel="noopener noreferrer" class="">Careers</a></li>
                </ul>
                <p>© 2023 STAR. All Rights Reserved. HBO,
                    Home Box Office and all related channel and programming
                    logos are service marks of, and all related programming
                    visuals and elements are the property of, Home Box Office,
                    Inc. All rights reserved.
                </p>
            </div>


            {/* for right part */}
            <div>
                <div >
                    <div>
                        <p>Connect with us</p>
                        <a  href="https://www.facebook.com/DisneyPlusHotstar" target="_blank" rel="noopener noreferrer">&nbsp;</a>
                        <a href="https://twitter.com/DisneyPlusHS" target="_blank" rel="noopener noreferrer">&nbsp;</a>
                    </div>
                </div>
                <div >
                    <div >
                        <p>Disney+ Hotstar App</p>
                        <a  href="https://play.google.com/store/apps/details?id=in.startv.hotstar" target="_blank" rel="noopener noreferrer">&nbsp;</a>
                        <a  href="https://itunes.apple.com/in/app/hotstar/id934459219?mt=8" target="_blank" rel="noopener noreferrer">&nbsp;</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;