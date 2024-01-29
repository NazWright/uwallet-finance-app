import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { API } from "aws-amplify";
import { constants } from "../../../constants/applicationConstants";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export default function AddNewCardStepForm({ handleCompletedStep }) {
  const [last4ofCardNumber, setLast4ofCardNumber] = useState("****");
  const currentUser = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(currentUser);

  async function submitNewCardInformation(data) {
    console.log(data);
    console.info("Making request to backend to store user card information");

    try {
      const request = {
        user_id: currentUser.username || "unauthenticated",
        user_cards_id: uuidv4(),
        cardholder_name: data.cardHolderName,
        card_number: data.cardNumber,
        exp: data.exp,
        cvv: data.cvv,
        channel_id: "manual",
      };
      console.info(request);
      await API.post(constants.FINANCEAPI, "/user-cards", {
        body: request,
      });
      // store card information in redux.
      console.info(
        "Successfull API call to /user-cards to store user information."
      );

      handleCompletedStep();
    } catch (error) {
      console.error(error);
    } // store info in redux on every change
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
            value={"4445939493949494"}
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
              value={"08/2024"}
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
              value={"546"}
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
                value={"Nazere Wright"}
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
