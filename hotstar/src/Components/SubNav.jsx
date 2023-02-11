import { useNavigate } from "react-router-dom";
import "../CSS/subscribe.css";

function SubNav() {
    let navigate = useNavigate()
    return (
        <div className="Navigation-bar"  >
            <div>
                <img className="hotstar_logo"
                    src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
                    alt="hotstar-logo" 
                    onClick={() => navigate('/')}
                    />
</div>
<div>
                <select name="language" id="lang">
                    <option value="ENGLISH">ENGLISH</option>
                    <option value="HINDI">हिंदी</option>
                </select>
                <button className="loginbutton">Log In</button>
</div>
            </div>
    )
}
export default SubNav;