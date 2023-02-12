import React, { useState } from "react";



const PaymentOption = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="form" style={{width:"70%", border:"2px solid red"}}>
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
    )
}

export default PaymentOption;

