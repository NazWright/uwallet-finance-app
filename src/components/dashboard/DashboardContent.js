import React, { useState } from "react";
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
  const [selectedAccountId, setSelectedAccountId] = useState(
    accounts[0]["account_id"]
  );

  let accountColor; // consistency for the card color, to my balance, spending activity, etc..

  const selectedAccount = accounts.filter(
    (account) => account["account_id"] === selectedAccountId
  )[0];
  const { balances } = selectedAccount;

  function selectCard(event, accountId) {
    event.preventDefault();
    console.info("loading information for accountId: ", accountId);
    if (accountId !== selectedAccountId) {
      setSelectedAccountId(accountId);
    }
  }

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
            {accounts.map((account, index) => {
              const cardIndex = index === 0 ? 3 : 2;
              const accountId = account["account_id"];
              return (
                <CreditCard
                  key={accountId}
                  index={cardIndex}
                  cardNumber={account.mask}
                  validThru={"** / **"}
                  cardHolderName={cardHolderName}
                  onClickHandler={(event) => selectCard(event, accountId)}
                />
              );
            })}
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
