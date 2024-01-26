import React, { useState } from "react";
import "./Onboarding.css";
import { Link, useNavigate } from "react-router-dom";
import uWalletMiniImage from "../../static/img/untitled-design-36-2.png";
import { pages } from "../../data/onboardingPages";
import { getContentFromPageIndex } from "../../utils/getContentFromPageIndex";
import PageOneGraphic from "./graphics/PageOneGraphic";
import PageThreeGraphic from "./graphics/PageThreeGraphic";
import PageTwoGraphic from "./graphics/PageTwoGraphic";

export default function OnboardingPage() {
  const [pageIndex, setPageIndex] = useState(0);

  const navigate = useNavigate();

  const hasActiveEllipseClassName = (ellipseIndex) =>
    pageIndex >= ellipseIndex ? "ellipse-active" : "";

  function nextPage() {
    if (pageIndex > 2) return;

    if (pageIndex === 2) navigate("/user/onboarding");

    setPageIndex(pageIndex + 1);
    // TODO: if we are at the last page, use navigate to go to new component.
  }

  function getPageGraphic(pageIndex) {
    const pageGraphics = {
      0: <PageOneGraphic />,
      1: <PageTwoGraphic />,
      2: <PageThreeGraphic />,
    };

    return pageGraphics[pageIndex];
  }

  return (
    <div className="screen-12">
      <div className="LOG-IN-9">
        {getContentFromPageIndex(pages, pageIndex)}
        {getPageGraphic(pageIndex)}
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
            <div className="onboarding">
              <Link className="rectangle-83" />
              <div className="text-wrapper-161">Next</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
