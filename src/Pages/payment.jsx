import React from "react";
import { useState } from "react";
import "../CSS/payment.css";
import Credit from "../Components/Credit";
import Footer from "../Components/footer";

function Payment() {
  // const selectedPlan = props.location.state.plan.plan;
  // const pay = props.location.state.plan.payment;
  const [render, setrender] = useState(false);
  const [mode, setMode] = useState("");
  const payD = JSON.parse(localStorage.getItem("plan"));

  console.log(payD);
  console.log(mode);

  // const handleSubmit = event => {
  //     event.preventDefault();
  // }

  return (
    <div>
      {/* 
            <h2 style={{ color: "wheat" }}>{payD.payment}</h2> */}
      <div className="nav">
        <img
          className="paylogo"
          src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
          alt="pay_hotstart_logo"
        />
      </div>

      <h1 className="planname">{payD.plan}</h1>

      <p
        className="pDetail"
        style={payD.id === "1" ? { display: "block" } : { display: "none" }}
      >
        You're paying ₹899 for this transaction. Get access to all content -
        Live Sports, Movies, TV. Watch on any 2 devices at FHD (1080p)
        resolution.
      </p>
      <p
        className="pDetail"
        style={payD.id === "2" ? { display: "block" } : { display: "none" }}
      >
        You're paying ₹1499 for this transaction. Get access to all content -
        Live Sports, Movies, TV. Watch on any 4 devices at upto 4K (2160p)
        resolution
      </p>

      <div
        className="PButton"
        style={render ? { display: "none" } : { display: "grid" }}
      >
        <button
          onClick={() => {
            setMode("debit");
            setrender(true);
          }}
        >
          Debit Card
        </button>
        <button
          onClick={() => {
            setMode("credit");
            setrender(true);
          }}
        >
          Credit Card
        </button>
        <button
          onClick={() => {
            setMode("upi");
            setrender(true);
          }}
        >
          UPI
        </button>
      </div>
      <div className="paymethod">
        {mode === "debit" || mode === "credit" ? <Credit /> : <> </>}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Payment;
