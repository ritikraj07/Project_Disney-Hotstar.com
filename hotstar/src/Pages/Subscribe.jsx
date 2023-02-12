import "../CSS/subscribe.css";
import Footer from "../Components/footer";
import { useState } from "react";
import { Link } from "react-router-dom";



const Subscribe = () => {
    const [plan1, setPlan1] = useState(true);
    const [plan2, setPlan2] = useState(false);
    const [plan3, setPlan3] = useState(false);
    // const [plan1, setPlan1] = useState({false});
    // const [plan2, setPlan2] = useState(false);
    // const [plan3, setPlan3] = useState(false);
   const tdStyle={
    backgroundColor:"rgb(30,42,72)",

   }
   const Nstyle ={
    backgroundColor:"transparent",
   }
    
    function planA() {
        setPlan1(true)
        setPlan2(false)
        setPlan3(false)
       

        console.log(plan1, plan2, plan3)
    return (<span>&#10003;</span>)
    }
    function planB() {
        setPlan1(false)
        setPlan2(true)
        setPlan3(false)
        console.log(plan1, plan2, plan3)
    }
    function planC() {
        setPlan1(false)
        setPlan2(false)
        setPlan3(true)
        console.log(plan1, plan2, plan3)
    }



    function goToPayment(){
        
    }


    return (
        <div style={{
            backgroundImage: "linear-gradient(rgb(12,17,27), rgb(19,19,25))",


        }}>
            {/* <div className="Navigation-bar"  >

                <img className="hotstar_logo"
                    src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
                    alt="hotstar-logo" />

                <select name="language" id="lang">
                    <option value="ENGLISH">ENGLISH</option>
                    <option value="HINDI">हिंदी</option>
                </select>
                <button className="loginbutton">Log In</button>

            </div> */}

            <h2 className="heading">Subscribe to watch all content on Disney+ Hotstar </h2>
            <div className="sub_div">
                <table style={{ width: "100%", }}>
                    <tbody>
                        <tr height="30px">
                            <th style={{ width: "70%", textAlign: "center" }} ></th>
                            <th  style={plan1 ? { color: "#fcde7b",backgroundColor:"rgb(30,42,72)" } : { color: "white", }}>Super</th>
                            <th style={plan2 || plan3 ? { color: "#fcde7b",backgroundColor:"rgb(30,42,72)"} : { color: "white", }}>Premium</th>
                        </tr>
                        <tr height="30px">
                            <td>All content <h6>Movies, live sports, TV, Specials</h6></td>
                            <td align="center" style={ plan1 ? tdStyle:Nstyle}><img src="https://secure-media.hotstar.com/static/subscription/paywall_service/comparator/tick/smp/web-1x.png" alt="tick" /></td>
                            <td align="center" style={ plan2||plan3 ? tdStyle:Nstyle}><img src="https://secure-media.hotstar.com/static/subscription/paywall_service/comparator/tick/smp/web-1x.png" alt="tick" /></td>
                        </tr>

                        <tr height="30px">
                            <td>Watch on TV or Laptop</td>
                            <td align="center" style={ plan1 ? tdStyle:Nstyle}><img src="https://secure-media.hotstar.com/static/subscription/paywall_service/comparator/tick/smp/web-1x.png" alt="tick" /></td>
                            <td align="center" style={ plan2||plan3 ? tdStyle:Nstyle}><img src="https://secure-media.hotstar.com/static/subscription/paywall_service/comparator/tick/smp/web-1x.png" alt="tick" /></td>
                        </tr>
                        <tr height="30px">
                            <td>Ads free movies and shows (except sports)</td>
                            <td align="center" style={ plan1 ? tdStyle:Nstyle}><img src="https://secure-media.hotstar.com/static/subscription/paywall_service/comparator/cross/smp/web-1x.png" alt="cross" /></td>
                            <td align="center" style={ plan2||plan3 ? tdStyle:Nstyle}><img src="https://secure-media.hotstar.com/static/subscription/paywall_service/comparator/tick/smp/web-1x.png" alt="tick" /></td>
                        </tr>
                        <tr height="30px">
                            <td>Number of devices that can be logged in</td>
                            <td align="center" style={ plan1 ? tdStyle:Nstyle}>2</td>
                            <td align="center" style={ plan2||plan3 ? tdStyle:Nstyle}>4</td>
                        </tr>
                        <tr height="30px">
                            <td>Max video quality</td>
                            <td align="center" style={ plan1 ? tdStyle:Nstyle}>Full HD (1080p)</td>
                            <td align="center" style={ plan2||plan3 ? tdStyle:Nstyle}>4K (2160p)</td>
                        </tr>


                        <tr height="30px">
                            <td>Max audio quality</td>
                            <td align="center" style={ plan1 ? tdStyle:Nstyle}>Dolby 5.1</td>
                            <td align="center" style={ plan2||plan3 ? tdStyle:Nstyle}>Dolby 5.1</td>
                        </tr>
                    </tbody>

                </table>
                <div className="planbutton">
                    <button onClick={()=>planA()}
                    style={plan1 ?{ backgroundColor: "rgb(23,67,115)", border:"1px solid rgb(31,128,224)",  } : {backgroundColor: "transparent", border:"1px solid #334366" }}
                    >     
                        <span class="material-symbols-outlined" style={plan1 ? {display:"block",}:{display:"none"}}>done</span>
                        <h3 style={plan1 ? { color: "#fcde7b",} : { color: "white", }}>Super</h3>
                        <h2>₹899/Year</h2>
                    </button>
                    <button onClick={()=>planB()}
                    style={plan2 ?{ backgroundColor: "rgb(23,67,115)",border:"1px solid rgb(31,128,224)" } : {backgroundColor: "transparent",border:"1px solid #334366"  }}
                    >
                        <span class="material-symbols-outlined" style={plan2 ? {display:"block",}:{display:"none"}}>done</span>
                        <h3 style={plan2 ? { color: "#fcde7b", } : { color: "white", }}>Premium</h3>
                        <h2>₹1499/Year</h2>
                    </button>
                    <button onClick={()=>planC()} 
                    style={plan3 ?{ backgroundColor: "rgb(23,67,115)",border:"1px solid rgb(31,128,224)" } : {backgroundColor: "transparent",border:"1px solid #334366"  }}
                    >
                        <span class="material-symbols-outlined" style={plan3 ? {display:"block",}:{display:"none"}}>done</span>
                        <h3 style={plan3 ?{ color: "#fcde7b",} : { color: "white", }}>Premium</h3>
                        <h2>₹299/Month</h2>
                    </button>
                </div>
                <Link to='/payment'>
                <button  className="continue-button"  onClick={goToPayment}><h3>CONTINUE WITH SUPER</h3></button>
                </Link>
            </div>

            <div className="sub_footer">
                <Footer />
            </div>
        </div>


    )
}

export default Subscribe;