import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/confirmation.css"



function Confirmation() {
    //const [code, setCode] = useState("");
    const [status, setStatus] = useState(false);
    const [inotp, setInotp] = useState("")
    var navigate = useNavigate();
    let Rcode = Math.floor(Math.random() * 90000) + 10000;

    useEffect(()=>{
        setTimeout(() => {
            window.alert(`your one time passwword is :  ${Rcode}`)
        }, 1000);
    },[])
        
    
    const handleChange = (event) => {
        setInotp(event.target.value)
    }
    function validate() {
        
        setInterval(() => {
            navigate('/');
        }, 3000);
        setStatus(true);
        // if (inotp === Rcode) {
        //     setStatus(true);
        // }
    }





    return (
        <div className="con" align="center">
            <input
                className="Oinput"
                type="text"
                id="otp"

                onChange={handleChange}
                maxLength={5}
                style={status ? { display: "none" } : { display: "block" }}
            />
            <button style={status ? { display: "none" } : { display: "block" }} className="validate"  onClick={validate}>VALIDATE</button>

            <div style={status ? { display: "block" } : { display: "none" }}>
            <iframe
                          src="https://giphy.com/embed/YlSR3n9yZrxfgVzagm"
                          width="50%"
                          height="50%"
                          align="center"
                        //   style={{ position: "absolute" }}
                          frameBorder="0"
                          className="giphy-embed"
                          allowFullScreen
                        ></iframe>
            </div>
        </div>
        



    )

}

export default Confirmation;