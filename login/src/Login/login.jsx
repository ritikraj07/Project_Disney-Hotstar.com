import "./Navbar.css"
import { Link, useParams } from "react-router-dom";
import "./test.css";
import Test from "./test";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function Login() {
  const [ auth, setAuth] = useState(localStorage.getItem('user')? true : false)
  const{category} = useParams()
  const [buttonPopup, setButtonPopup] = useState(false);
  const [otpPopup, setOtpPopup] = useState(false);
  const navigate = useNavigate()
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.target.value === "1234") {
        setOtpPopup(false);
        //navigate("/");
      }
      else alert("enter valid")
    }
  }
  
  const logOutUser = ()=>{
    localStorage.removeItem('user')
    setAuth(false)
    //navigate('/')
  }
  const handleLogin = async (googleData)=>{
    // const res2 = await axios.post('http://localhost:7000/google/login',{
    const res2 = await axios.post('https://hotstar-v.herokuapp.com/google/login',{
      token : googleData.tokenId
    })
    localStorage.setItem('user', JSON.stringify(res2.data))
    setAuth(true)
    setButtonPopup(false)
    navigate('/profile')
  }
  const handleFailure = (err)=>{
    // console.log({ failure : err})
    alert(`Login failed`)
  }


  return (
    <>
      <div className="nav">
        <div className="nav-right">
          
          { auth ? <div className="dropdown">
            <div className="link" to="/sports">PROFILE</div>
            <ul>
              <li><Link to="/watchlist">WatchList</Link></li>
              <li><Link to="/profile">My Account</Link></li>
              <li onClick={logOutUser}>Log Out</li>
            </ul>
          </div> : <div onClick={() => setButtonPopup(true)}>LOGIN</div>}
          
        </div>
      </div>
      <div>
      <Test trigger={buttonPopup} setTrigger={setButtonPopup}>
        <p style={{
          fontSize: "18px",
          wordSpacing: "1.4px"
        }} className="text">Login to continue</p>
        <br></br>
        
        <p style={{
          marginLeft: "45%"
        }}>or</p>
        <br></br>
        <div className="input-div">
          <p>+91|</p><input type="text" className="input" placeholder="Enter your mobile number" required />
          <button onClick={() => {
            setOtpPopup(true);
            setButtonPopup(false)
          }} className="otp-btn">send</button>
        </div>
      </Test>
      <Test otpTrigger={otpPopup} setOtpTrigger={setOtpPopup} setTrigger={setButtonPopup}>
        <p className="text">Enter the OTP</p>
        <input type="text" className="otp-inp" placeholder="Enter OTP" onKeyDown={handleKeyDown} />
      </Test>
      </div> 
      
    </>
  );
}

export default Login;