import React from "react";
// import bottomLine12 from "../../static/img/bottom-line-12.png";
// import bottomLine14 from "../../static/img/bottom-line-14.png";
// import path14 from "../../static/img/path-10-5.png";
// import rectangle11 from "../../static/img/path-10-5.png";
// import sendMoneyIcon from "../../static/img/untitled-design-26-45.png";
// import line4 from "../../static/img/line-4.png";
// import requestMoneyIcon from "../../static/img/untitled-design-26-46.png";
// import path15 from "../../static/img/path-27-1.png";
// import allRecentTransactionsButton from "../../static/img/path-32.png";
// import untitledDes5 from "../../static/img/untitled-design-26-44.png";
// import debtToAccountIcon from "../../static/img/untitled-design-26-54.png";
// import creditToAccountIcon from "../../static/img/untitled-design-26-51.png";
// import expensesIcon from "../../static/img/14-7.png";
// import incomesIcon from "../../static/img/14-6.png";
// import { Link } from "react-router-dom";

import allRecentTransactionsButton from "../../../static/img/path-32.png";
import debtToAccountIcon from "../../../static/img/untitled-design-26-54.png";
import creditToAccountIcon from "../../../static/img/untitled-design-26-51.png";
import expensesIcon from "../../../static/img/14-7.png";
import incomesIcon from "../../../static/img/14-6.png";

export default function RecentTransactionsList() {
  return (
    <>
      <div className="payment-history">Recent Transactions</div>
      <img className="path-16" alt="Path" src={allRecentTransactionsButton} />
      <div className="rectangle-13" />
      <div className="payment-history-2">All</div>
      <div className="rectangle-14" />
      <div className="overlap-group-wrapper">
        <div className="overlap-18">
          <div className="payment-history-3">Incomes</div>
          <img className="element-3" alt="Element" src={incomesIcon} />
        </div>
      </div>
      <div className="scroll-group-2">
        <div className="group-22">
          <div className="overlap-19">
            <div className="box" />
            <div className="rectangle-15" />
            <div className="rectangle-16" />
            <div className="group-23">
              <div className="overlap-group-6">
                <div className="group-24">
                  <div className="icon" />
                  <div className="element-march">5 March, 18:33</div>
                  <div className="deposit-from-ATL">Book Store</div>
                  <div className="text-wrapper-43">USD</div>
                  <div className="element-4">-431.79</div>
                </div>
                <img
                  className="untitled-design-6"
                  alt="Untitled design"
                  src={debtToAccountIcon}
                />
              </div>
            </div>
            <div className="group-25">
              <div className="overlap-20">
                <div className="group-26">
                  <div className="icon" />
                  <div className="element-march">1 March, 09:15</div>
                  <div className="deposit-from-ATL">Transfer - 00529</div>
                  <div className="text-wrapper-43">USD</div>
                  <div className="element-5">+50.00</div>
                </div>
                <img
                  className="untitled-design-7"
                  alt="Untitled design"
                  src={creditToAccountIcon}
                />
              </div>
            </div>
            <div className="group-27">
              <div className="overlap-group-6">
                <div className="group-24">
                  <div className="icon" />
                  <div className="element-march">21 Feb, 12:33</div>
                  <div className="deposit-from-ATL">Chic Fil-A</div>
                  <div className="text-wrapper-43">USD</div>
                  <div className="element-6">-12.49</div>
                </div>
                <img
                  className="untitled-design-6"
                  alt="Untitled design"
                  src={debtToAccountIcon}
                />
              </div>
            </div>
            <div className="group-28">
              <div className="overlap-group-6">
                <div className="group-24">
                  <div className="icon" />
                  <div className="element-march">20 Feb, 12:15</div>
                  <div className="deposit-from-ATL">Chic Fil-A</div>
                  <div className="text-wrapper-43">USD</div>
                  <div className="element-6">-12.49</div>
                </div>
                <img
                  className="untitled-design-6"
                  alt="Untitled design"
                  src={debtToAccountIcon}
                />
              </div>
            </div>
            <div className="rectangle-17" />
            <div className="rectangle-18" />
            <div className="rectangle-19" />
            <div className="rectangle-20" />
            <div className="rectangle-21" />
            <div className="rectangle-22" />
            <div className="rectangle-23" />
            <div className="group-29">
              <div className="overlap-21">
                <div className="group-30">
                  <div className="icon" />
                  <div className="element-march">15 Feb, 06:30</div>
                  <div className="deposit-from-ATL">Refund - University</div>
                  <div className="text-wrapper-43">USD</div>
                  <div className="element-7">+1200.00</div>
                </div>
                <img
                  className="untitled-design-7"
                  alt="Untitled design"
                  src={creditToAccountIcon}
                />
              </div>
            </div>
            <div className="group-31">
              <div className="overlap-group-6">
                <div className="group-24">
                  <div className="icon" />
                  <div className="element-march">14 Feb, 12:00</div>
                  <div className="deposit-from-ATL">Meal Swipe</div>
                  <div className="text-wrapper-43">USD</div>
                  <div className="element-8">-6.50</div>
                </div>
                <img
                  className="untitled-design-6"
                  alt="Untitled design"
                  src={debtToAccountIcon}
                />
              </div>
            </div>
            <div className="group-32">
              <div className="overlap-22">
                <div className="group-33">
                  <div className="icon" />
                  <div className="element-march">1 Feb, 09:00</div>
                  <div className="deposit-from-ATL">Transfer</div>
                  <div className="text-wrapper-43">USD</div>
                  <div className="element-9">+25.00</div>
                </div>
                <img
                  className="untitled-design-8"
                  alt="Untitled design"
                  src={creditToAccountIcon}
                />
              </div>
            </div>
            <div className="group-34">
              <div className="overlap-group-6">
                <div className="group-24">
                  <div className="icon" />
                  <div className="element-march">28 Jan, 17:55</div>
                  <div className="deposit-from-ATL">Campus Dining</div>
                  <div className="text-wrapper-43">USD</div>
                  <div className="element-10">-15.36</div>
                </div>
                <img
                  className="untitled-design-6"
                  alt="Untitled design"
                  src={debtToAccountIcon}
                />
              </div>
            </div>
            <div className="group-35">
              <div className="overlap-21">
                <div className="group-36">
                  <div className="icon" />
                  <div className="element-march">15 Jan, 15:15</div>
                  <div className="deposit-from-ATL">Transfer</div>
                  <div className="text-wrapper-43">USD</div>
                  <div className="element-11">+50.00</div>
                </div>
                <img
                  className="untitled-design-6"
                  alt="Untitled design"
                  src={creditToAccountIcon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="group-37">
        <div className="overlap-18">
          <div className="payment-history-4">Expenses</div>
          <img className="element-12" alt="Element" src={expensesIcon} />
        </div>
      </div>
    </>
  );
}
