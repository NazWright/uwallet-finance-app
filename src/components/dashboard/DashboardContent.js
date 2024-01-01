import React from "react";
import SpendingActivity from "./SpendingActivity";
import SendRequestMoney from "./SendRequestMoney";
import RecentTransactionsList from "./recentTransactions/RecentTransactionsList";
import CreditCard from "../shared/credit-card/CreditCard";
import MyBalance from "./MyBalance";
import AdditionalCards from "./AdditionalCards";
import Footer from "./Footer";

export default function DashboardContent({
  addNewCardHandler,
  accounts,
  transactions,
  cardHolderName,
}) {
  const account = accounts[0];
  const { balances } = account;

  return (
    <>
      <div className="overlap-14">
        {/*Dashboard content start */}
        <div className="overlap-15">
          <SpendingActivity />
          <SendRequestMoney />
          <RecentTransactionsList expenses={transactions} incomes={[]} />
          {/* Credit card */}
          <div className="scroll-group-3">
            <CreditCard
              addNewCardHandler={addNewCardHandler}
              index={3}
              cardNumber={account.mask}
              validThru={"** / **"}
              cardHolderName={cardHolderName}
            />
          </div>
          {/* Credit card End */}
          <MyBalance balance={balances.available + balances.current} />
        </div>
        <AdditionalCards addNewCardHandler={addNewCardHandler} />
        <Footer />
      </div>
    </>
  );
}
