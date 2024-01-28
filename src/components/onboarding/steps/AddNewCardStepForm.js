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

  function submitNewCardInformation(data) {
    console.log(data);
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
        <div className="element-wrapper">
          <input
            name="cardNumber"
            type="number"
            className="uwallet-input h-100 w-100"
            maxLength={16}
            minLength={16}
            {...register("cardNumber", { required: true })}
          />
          {errors["cardNumber"] && <span className="error-icon">x</span>}
        </div>
        {/* Card number field */}
        <div className="text-wrapper-20">Card Number</div>

        <div className="group-13">
          <div className="overlap-9 d-flex overflow-hidden">
            <input
              className="uwallet-input overflow-hidden"
              name="exp"
              {...register("exp", { required: true })}
            />
            {errors["exp"] && <span className="error-icon">x</span>}
          </div>

          <div className="overlap-10 d-flex">
            <input
              name="cvv"
              className="uwallet-input h-100 overflow-hidden d-flex align-items-center"
              type="number"
              maxLength={3}
              minLength={3}
              {...register("cvv", { required: true })}
            />
            {errors["cvv"] && <span className="error-icon">x</span>}
          </div>
          <div className="text-wrapper-23">CVV</div>
          <div className="text-wrapper-24">EXP</div>
        </div>
        <div className="overlap-11">
          <div className="group-14">
            <div className="rectangle-8 d-flex">
              <input
                className="uwallet-input h-100"
                name="cardHolderName"
                {...register("cardHolderName", { required: true })}
              />
              {errors["cardHolderName"] && (
                <span className="error-icon">x</span>
              )}
            </div>
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
