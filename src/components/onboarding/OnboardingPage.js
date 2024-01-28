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
      0: <PageOneGraphic width="30rem" height="30rem" />,
      1: <PageTwoGraphic />,
      2: <PageThreeGraphic />,
    };

    return pageGraphics[pageIndex];
  }

  return (
    <div className="onboarding-graphic-one">
      <div className="content-section d-flex w-100 align-items-center flex-column p-5">
        {getContentFromPageIndex(pages, pageIndex)}
        <div className="justify-content-center w-100 d-flex">
          {getPageGraphic(pageIndex)}
        </div>
        <div className="elipsis-group">
          <div className="group-114">
            <div className={`ellipse-19 ${hasActiveEllipseClassName(0)}`} />
            <div className={`ellipse-11 ${hasActiveEllipseClassName(1)}`} />
            <div className={`ellipse-20 ${hasActiveEllipseClassName(2)}`} />
          </div>
        </div>
        <div className="next-button">
          <div className="rectangle-83 mt-3" onClick={() => nextPage()}>
            <div className="text-wrapper-161">Next</div>
          </div>
        </div>
        <img
          className="mini-uwallet-logo"
          alt="Untitled design"
          src={uWalletMiniImage}
        />
      </div>
    </div>
  );
}
