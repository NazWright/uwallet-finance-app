import React from "react";
import SpendingActivity from "./SpendingActivity";
import SendRequestMoney from "./SendRequestMoney";
import RecentTransactionsList from "./recentTransactions/RecentTransactionsList";
import CreditCard from "../shared/credit-card/CreditCard";
import MyBalance from "./MyBalance";
import AdditionalCards from "./AdditionalCards";

export default function DashboardContent() {
  return (
    <>
      <div className="overlap-14">
        {/*Dashboard content start */}
        <div className="overlap-15">
          <SpendingActivity />
          <SendRequestMoney />
          <RecentTransactionsList />
          <div className="rectangle-24" />
          {/*Bottom Navbar Icons*/}
          <img className="element-13" alt="Element" src="/img/15-6.png" />
          <img className="element-14" alt="Element" src="/img/17-6.png" />
          <img className="element-15" alt="Element" src="/img/16-6.png" />
          <img className="element-16" alt="Element" src="/img/18-6.png" />

          {/* Credit card */}
          <div className="scroll-group-3">
            <CreditCard
              index={3}
              cardNumber={4765}
              validThru={"02 / 25"}
              cardHolderName={"Emery Murrain"}
            />
          </div>
          {/* Credit card End */}
          <MyBalance />
        </div>
        <AdditionalCards />
      </div>
    </>
  );
}
