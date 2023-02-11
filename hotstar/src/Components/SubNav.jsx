import "../CSS/subscribe.css";
function SubNav(){
    return (
        <div className="Navigation-bar"  >

                <img className="hotstar_logo"
                    src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
                    alt="hotstar-logo" />

                <select name="language" id="lang">
                    <option value="ENGLISH">ENGLISH</option>
                    <option value="HINDI">हिंदी</option>
                </select>
                <button className="loginbutton">Log In</button>

            </div>
    )
}
export default SubNav;