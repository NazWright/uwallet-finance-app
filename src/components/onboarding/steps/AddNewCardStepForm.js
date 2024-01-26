import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function AddNewCardStepForm({ handleCompletedStep }) {
  const [last4ofCardNumber, setLast4ofCardNumber] = useState("****");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function submitNewCardInformation(event) {
    console.log("yo");
    // store info in redux on every change
    handleCompletedStep();
  }

  function onInputChange(event) {
    // call redux to set the card information
  }

  return (
    <>
      <form onSubmit={handleSubmit(submitNewCardInformation)}>
        {/* card number field */}
        <input
          className="element-wrapper"
          name="cardNumber"
          type="number"
          max={16}
          min={16}
        />
        {/* Card number field */}
        <div className="text-wrapper-20">Card Number</div>

        <div className="group-13">
          <input className="overlap-9" name="exp" />
          <input
            className="overlap-10"
            name="cvv"
            type="number"
            max={3}
            min={3}
          />
          <div className="text-wrapper-23">CVV</div>
          <div className="text-wrapper-24">EXP</div>
        </div>
        <div className="overlap-11">
          <div className="group-14">
            <input className="rectangle-8" name="nameOnCard" />
            <div className="text-wrapper-24">Name on Card </div>
          </div>
        </div>

        <button className="group-15 onboarding" type="submit">
          <div className="text-wrapper-26">Continue</div>
        </button>
      </form>
    </>
  );
}
