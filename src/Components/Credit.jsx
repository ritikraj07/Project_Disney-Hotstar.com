import React from 'react';
import { useState } from "react";
import '../CSS/credit.css'
import { Link, useNavigate } from 'react-router-dom';


function Credit() {
    
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [mode, setMode] = useState("")
    const payD = JSON.parse(localStorage.getItem('plan'));

    console.log(payD)
  var navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        // window.alert("otp is sent to your registered number  *******159")
        navigate('/confirm');
        //  setInterval(() => {
            
        //  }, 1000);
    }



    return (<div>
        <form onSubmit={handleSubmit} className="form" style={{ width: "40%",  }}>
           
                
                <input
                    type="text"
                    id="card-name"
                    placeholder='Card Holder Name'


                    onChange={e => setCardNumber(e.target.value)}
                />
                <input
                    type="number"
                    id="card-number"
                    placeholder='Card Number'


                    onChange={e => setCardNumber(e.target.value)}
                />

            
                
                <input
                    type="text"
                     placeholder='MM/YY'
                    value={expirationDate}
                    onChange={e => setExpirationDate(e.target.value)}
                />
           
                
                <input
                    type="number"
                        placeholder='cvv'
                    value={cvv}
                    onChange={e => setCvv(e.target.value)}
                />
           {/* <Link to='/confirm'> */}
            <button type="submit"  className='MEMBERSHIP'  >START MEMBERSHIP</button>
            {/* </Link> */}
        </form>
    </div>)
}
export default Credit;