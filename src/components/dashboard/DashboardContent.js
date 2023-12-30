import React from "react";
import SpendingActivity from "./SpendingActivity";
import SendRequestMoney from "./SendRequestMoney";
import RecentTransactionsList from "./recentTransactions/RecentTransactionsList";
import CreditCard from "../shared/credit-card/CreditCard";
import MyBalance from "./MyBalance";
import AdditionalCards from "./AdditionalCards";
import Footer from "./Footer";

export default function DashboardContent() {
  return (
    <>
      <div className="overlap-14">
        {/*Dashboard content start */}
        <div className="overlap-15">
          <SpendingActivity />
          <SendRequestMoney />
          <RecentTransactionsList />
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
        <Footer />
      </div>
    </>
  );
}
