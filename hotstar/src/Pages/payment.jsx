import React from 'react';
import { useState } from "react";
import '../CSS/payment.css'


function Payment() {
    // const selectedPlan = props.location.state.plan.plan;
    // const pay = props.location.state.plan.payment;
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [mode, setMode] = useState("")
    const payD = JSON.parse(localStorage.getItem('plan'));

    console.log(payD)

    const handleSubmit = event => {
        event.preventDefault();
    }



    return (
        <div>
            {/* 
            <h2 style={{ color: "wheat" }}>{payD.payment}</h2> */}
            <div className='nav'>
                <img className='paylogo' src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="pay_hotstart_logo" />
            </div>

            <h1 className='planname' >{payD.plan}</h1>

            <p className='pDetail' style={payD.id === "1" ? { display: "block" } : { display: "none" }}>You're paying ₹899 for this transaction.
                Get access to all content - Live Sports, Movies, TV. Watch on any 2 devices at FHD (1080p) resolution.</p>
            <p className='pDetail' style={payD.id === "2" ? { display: "block" } : { display: "none" }}>You're paying ₹1499 for this transaction.
                Get access to all content - Live Sports, Movies, TV. Watch on any 4 devices at upto 4K (2160p) resolution</p>

            <div className='PButton'>
                <button onClick={() => setMode("debit")}>Debit Card</button>
                <button onClick={() => setMode("credit")}>Credit Card</button>
                <button onClick={() => setMode("upi")}>UPI</button>

            </div>




            <form onSubmit={handleSubmit} className="form" style={{ width: "70%", border: "2px solid red" }}>
                <div>
                    <label className="card_number">Card Number:</label>
                    <input
                        type="text"
                        id="card-number"


                        onChange={e => setCardNumber(e.target.value)}
                    />
                </div>
                <div>
                    <label className="expiration_date">Expiration Date:</label>
                    <input
                        type="date"

                        value={expirationDate}
                        onChange={e => setExpirationDate(e.target.value)}
                    />
                </div>
                <div>
                    <label className="cvv">CVV:</label>
                    <input
                        type="number"

                        value={cvv}
                        onChange={e => setCvv(e.target.value)}
                    />
                </div>
                <button type="submit">Submit Payment</button>
            </form>
        </div>
    );
}

export default Payment;