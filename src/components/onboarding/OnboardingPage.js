import React, { useState } from "react";
import "./Onboarding.css";
import { Link } from "react-router-dom";
import uWalletMiniImage from "../../static/img/untitled-design-36-2.png";

export default function OnboardingPage({ pages }) {
  const [pageIndex, setPageIndex] = useState(0);

  const hasActiveEllipseClassName = (ellipseIndex) =>
    pageIndex >= ellipseIndex ? "ellipse-active" : "";

  function nextPage() {
    if (pageIndex > 2) return;
    setPageIndex(pageIndex + 1);
    // TODO: if we are at the last page, use navigate to go to new component.
  }

  return (
    <div className="screen-12">
      <div className="LOG-IN-9">
        {/* content start */}
        <div className="overlap-74">
          <p className="track-all-you">
            Track All You Accounts in One Place
            <br />
          </p>
          <p className="manage-your-spending">
            Manage your spending habits <br />
            and create healthier decisions{" "}
          </p>
        </div>
        {/* content end */}

        <img className="element-74" alt="Element" src="/img/3.png" />
        <img
          className="untitled-design-39"
          alt="Untitled design"
          src={uWalletMiniImage}
        />
        <div className="group-113">
          <div className="group-114">
            <div className={`ellipse-19 ${hasActiveEllipseClassName(0)}`} />
            <div className={`ellipse-11 ${hasActiveEllipseClassName(1)}`} />
            <div className={`ellipse-20 ${hasActiveEllipseClassName(2)}`} />
          </div>
        </div>
        <div className="overlap-group-33">
          <div onClick={() => nextPage()}>
            <Link className="rectangle-83" />
            <div className="text-wrapper-161">Next</div>
          </div>
        </div>
      </div>
    </div>
  );
}
