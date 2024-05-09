import React, { useContext } from "react";
import PassSvg from "../../assets/svgs/password-lock-svgrepo-com.svg";
import qrcode from "../../assets/images/qrcode.png";
import "./step2.css";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import { useEffect } from "react";

const Step2 = () => {
  const navigate = useNavigate();

  const {btcAmount, setBtcAmount} = useContext(ShopContext)

  useEffect(() => {
    if (btcAmount === null) {
      navigate("../", { replace: true });
    }
  }, []);

  const copy = () => {
    navigator.clipboard.writeText("1K2Ybu2C23HfdpoNDxRB8BwVpkesVp6jAF")
    .then(() => alert("Copied to clipboard"))
    .catch(err => 
      console.error('Could not copy to clipboard:', err));
      alert("Could not copy to clipboard")
  }

  return (
    <div className="form">
      <div className="secured">
        <img src={PassSvg} alt="" />
        <p>Secured and encrypted</p>
      </div>

      <button
        className="back"
        onClick={() => {
          navigate("../", { replace: true });
        }}
      >
        Back
      </button>

      <p className="title">Select Your Crypto Gift</p>
      <span>Step 1 of 2</span>

      <div className="notice">
        Please use your wallet to send to this address.
      </div>

      <img src={qrcode} alt="" className="qr" />
      <span id="text">Public Address:</span>
      <div className="notice text">
      1K2Ybu2C23HfdpoNDxRB8BwVpkesVp6jAF
      </div>
      
      <span id="text">Amount:</span>
      <span id="amount">{btcAmount}</span>
      <button className="copy" onClick={()=> copy()}>Copy Account</button>
      <p className="inform">Once your gift is processed we will send a receipt to your email (if it was provided). You may close this window once you have completed the transaction in your crypto wallet.</p>
      <div className="bottom">
            <p>
              Powered by <a href="https://engiven.com/"><span className="blue">Engiven</span></a>
            </p>
            <br />
            <p>
              Price Quotes by <a href="https://www.gemini.com/"><span className="blue">Gemini</span></a>
            </p>
          </div>
    </div>

  );
};

export default Step2;
