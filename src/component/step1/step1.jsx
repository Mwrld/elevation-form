import React, { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import "./step1.css";
import PassSvg from "../../assets/svgs/password-lock-svgrepo-com.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";

const Step1 = () => {
  const navigate = useNavigate();
  const {btcAmount, setBtcAmount} = useContext(ShopContext)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    navigate('./Step2', {replace: true})
  };

  const checkAnonym = useRef(null);
  const [isAnonymos, setIsAnonymus] = useState(false);

  const handleAnonym = () => {
    if (isAnonymos === false) {
      checkAnonym.current.checked = true;
      setIsAnonymus(true);
    }
    if (isAnonymos === true) {
      checkAnonym.current.checked = false;
      setIsAnonymus(false);
    }
  };
  return (
    <>
      <div className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="secured">
          <img src={PassSvg} alt="" />
          <p>Secured and encrypted</p>
        </div>

        <div
          className={
            errors.fullname ||
            errors.phoneNumber ||
            errors.email ||
            errors.USD ||
            errors.BTC ||
            errors.terms
              ? "errorBox active"
              : "errorBox"
          }
        >
          {isAnonymos === false ? (
            <>
              {errors.fullname && (
                <div className="error">{errors.fullname.message}</div>
              )}
              {errors.email && (
                <div className="error">{errors.email.message}</div>
              )}
              {errors.phoneNumber && (
                <div className="error">{errors.phoneNumber.message}</div>
              )}
            {errors.USD && <div className="error">{errors.USD.message}</div>}
            {errors.BTC && <div className="error">{errors.BTC.message}</div>}
            {errors.terms && <div className="error">{errors.terms.message}</div>}
            </>
          ) : (
            <>
            {errors.USD && <div className="error">{errors.USD.message}</div>}
            {errors.BTC && <div className="error">{errors.BTC.message}</div>}
            {errors.terms && <div className="error">{errors.terms.message}</div>}
            </>
          )}
        </div>

        {/* <div className="error">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
          beatae eius ut magni? Placeat, velit!
        </div> */}

        <p className="title">Select Your Crypto Gift</p>
        <span>Step 1 of 2</span>

        <form action="">
          <section>
            <p>Give to:</p>{" "}
            <select name="" id="">
              <option value="Tithes & Offering">Tithes & Offering</option>
            </select>
          </section>

          <section>
            <input
              defaultValue=""
              {...register("BTC", {
                required: "Enter a valid BTC amount",
              })}
              type="number"
              onChange={(e) => setBtcAmount(e.target.value)}
            />
            <select name="" id="shortSelect">
              <option value="BTC">BTC</option>
            </select>
          </section>

          <p className="equal">=</p>

          <section>
            <input
              defaultValue=""
              {...register("USD", {
                required: "Enter a valid USD amount",
                validate: (value) => {
                  if (value < 1) {
                    return "Please gift at least $5";
                  }
                },
              })}
              type="number"
            />
            <select name="" id="shortSelect">
              <option value="USD">USD</option>
            </select>
          </section>

          <div className="leftAlign">
            <input
              type="radio"
              name=""
              id=""
              ref={checkAnonym}
              onClick={handleAnonym}
            />{" "}
            <h4>Anonymous?</h4>
          </div>
          {isAnonymos === false ? (
            <>
              <div className="formDetails">
                <input
                  defaultValue=""
                  {...register("fullname", {
                    required: "Please enter your full name",
                    validate: (value) => {
                      if (value.length < 3) {
                        return "Full name must be at least 3 characters";
                      }
                    },
                  })}
                  type="text"
                  placeholder="Full Name*"
                />

                <input
                  defaultValue=""
                  {...register("email", {
                    required: "Please enter your email",
                  })}
                  type="email"
                  placeholder="Email*"
                />

                <input
                  defaultValue=""
                  {...register("phoneNumber", {
                    required: "Please enter your phone number",
                  })}
                  type="tel"
                  placeholder="Phone Number"
                />
              </div>
            </>
          ) : (
            <>
              <div className="formDetails hide"></div>
            </>
          )}

          <p className="info">
            This information is only used to provide the nonprofit with your
            giving data and to provide a valid tax receipt for this dift. No
            information will be ahared publicly
          </p>

          <div className="terms">
            <input
              {...register("terms", {
                required: "Please read and check terms of service.",
              })}
              type="radio"
            />{" "}
            I understand and accept Engiven's
            <a href="https://engiven.com/terms-of-service/"><span className="blue">Terms of Services</span></a>*
          </div>
          <a href="https://engiven.com/privacy-policy/" className="blue text">
            Engiven Privacy Policy
          </a>

          <button type="submit" className="submit">Next</button>

          <div className="bottom">
            <p>
              Powered by <a href="https://engiven.com/"><span className="blue">Engiven</span></a>
            </p>
            <br />
            <p>
              Price Quotes by <a href="https://www.gemini.com/"><span className="blue">Gemini</span></a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Step1;
