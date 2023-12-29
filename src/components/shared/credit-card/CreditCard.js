import React from "react";

export default function CreditCard({
  index,
  cardNumber,
  cardHolderName,
  validThru,
}) {
  return (
    <>
      <div className={`card-${index}`}>
        <div className="overlap-25">
          <div className="group-40">
            <div className="group-41">
              <div className="waves-3" />
            </div>
          </div>
          <div className="visa-pay-logo-3">
            <div className="overlap-group-8">
              <img className="shape-6" alt="Shape" src="/img/shape-40.png" />
              <img className="shape-11" alt="Shape" src="/img/shape-41.png" />
              <img className="shape-8" alt="Shape" src="/img/shape-42.png" />
            </div>
            <div className="overlap-26">
              <img className="shape-12" alt="Shape" src="/img/shape-43.png" />
              <img className="shape-13" alt="Shape" src="/img/shape-44.png" />
            </div>
          </div>
          <div className="text-wrapper-46">CARD HOLDER</div>
          <div className="stephen-austin-4">{cardHolderName}</div>
          <div className="text-wrapper-47">VALID THRU</div>
          <div className="element-19">{validThru}</div>
          <div className="div-5">
            <img className="path-29" alt="Path" src="/img/path-128.png" />
            <img className="path-30" alt="Path" src="/img/path-128.png" />
            <img className="path-31" alt="Path" src="/img/path-128.png" />
            <img className="path-32" alt="Path" src="/img/path-128.png" />
            <img className="path-33" alt="Path" src="/img/path-128.png" />
            <img className="path-34" alt="Path" src="/img/path-128.png" />
            <img className="path-35" alt="Path" src="/img/path-128.png" />
            <img className="path-36" alt="Path" src="/img/path-128.png" />
            <img className="path-37" alt="Path" src="/img/path-128.png" />
            <img className="path-38" alt="Path" src="/img/path-128.png" />
            <img className="path-39" alt="Path" src="/img/path-128.png" />
            <img className="path-40" alt="Path" src="/img/path-128.png" />
            <div className="text-wrapper-48">{cardNumber}</div>
          </div>
        </div>
      </div>
    </>
  );
}
