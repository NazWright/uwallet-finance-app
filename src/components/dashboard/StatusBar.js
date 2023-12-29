import React from "react";

export default function StatusBar() {
  return (
    <>
      <div className="status-bar-5">
        <img
          className="cellular-connection-4"
          alt="Cellular connection"
          src="/img/cellular-connection-10.png"
        />
        <img className="wifi-5" alt="Wifi" src="/img/wifi-10.png" />
        <div className="time-5">9:30</div>
        <div className="battary-5">
          <img className="cap-5" alt="Cap" src="/img/cap-10.png" />
          <div className="overlap-group-9">
            <div className="rectangle-26" />
          </div>
        </div>
      </div>
    </>
  );
}
