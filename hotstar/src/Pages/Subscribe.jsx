import "../CSS/subscribe.css";
// import Footer from "../Components/footer";

const Subscribe = () => {

    return (
        <div style={{
            backgroundImage: "linear-gradient(rgb(12,17,27), rgb(19,19,25))",
           

        }}>
            <div className="Navigation-bar" >
                
                    <img className="hotstar_logo"
                        src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
                        alt="hotstar-logo" />
               
                    <select name="language" id="lang">
                        <option value="ENGLISH">ENGLISH</option>
                        <option value="HINDI">हिंदी</option>
                    </select>
                    <button  className="loginbutton">Log In</button>
                
            </div>

            <h2 className="heading">Subscribe to watch all content on Disney+ Hotstar </h2>
            <div className="sub_div">
                <table style={{width:"100%",}}>
                    <tr height ="30px">
                        <th style={{width:"70%", textAlign:"center"}} ></th>
                        <th>Super</th>
                        <th>Premium</th>
                    </tr>
                    <tr height ="30px">
                        <td>All content <h6>Movies, live sports, TV, Specials</h6></td>
                        <td align="center"><img src="https://secure-media.hotstar.com/static/subscription/paywall_service/comparator/tick/smp/web-1x.png" alt="tick" /></td>
                        <td align="center"><img src="https://secure-media.hotstar.com/static/subscription/paywall_service/comparator/tick/smp/web-1x.png" alt="tick" /></td>
                    </tr>

                    <tr height ="30px">
                        <td>Watch on TV or Laptop</td>
                        <td align="center"><img src="https://secure-media.hotstar.com/static/subscription/paywall_service/comparator/tick/smp/web-1x.png" alt="tick" /></td>
                        <td align="center"><img src="https://secure-media.hotstar.com/static/subscription/paywall_service/comparator/tick/smp/web-1x.png" alt="tick" /></td>
                    </tr>
                    <tr height ="30px">
                        <td>Ads free movies and shows (except sports)</td>
                        <td align="center"><img src="https://secure-media.hotstar.com/static/subscription/paywall_service/comparator/cross/smp/web-1x.png" alt="cross" /></td>
                        <td align="center"><img src="https://secure-media.hotstar.com/static/subscription/paywall_service/comparator/tick/smp/web-1x.png" alt="tick" /></td>
                    </tr>
                    <tr height ="30px">
                        <td>Number of devices that can be logged in</td>
                        <td align="center">2</td>
                        <td align="center">4</td>
                    </tr>
                    <tr height ="30px">
                        <td>Max video quality</td>
                        <td>Full HD (1080p)</td>
                        <td>4K (2160p)</td>
                    </tr>


                    <tr height ="30px">
                        <td>Max audio quality</td>
                        <td>Dolby 5.1</td>
                        <td>Dolby 5.1</td>
                    </tr>

                </table>
                <div className="planbutton">
                    <button >
                        <h3>Super</h3>
                        <h2>₹899/Year</h2>
                    </button>
                    <button>
                        <h3>Premium</h3>
                        <h2>₹1499/Year</h2>
                    </button>
                    <button>
                        <h3>Premium</h3>
                        <h2>₹299/Month</h2>
                    </button>
                </div>
                <button className="continue-button" ><h3>CONTINUE WITH SUPER</h3></button>
            </div>

            <div className="sub_footer">
                {/* <Footer/> */}
            </div>
        </div>
        

    )
}

export default Subscribe;