import React, { useState } from "react";
import allRecentTransactionsButton from "../../../static/img/path-32.png";
import expensesIcon from "../../../static/img/14-7.png";
import incomesIcon from "../../../static/img/14-6.png";
import RecentTransaction from "./RecentTransaction";
import activeButtonImagePath from "../../../static/img/path-30-1.png";

export default function RecentTransactionsList({ expenses, incomes }) {
  /* all | expenses | incomes */
  const [selectedFilter, setSelectedFilter] = useState("all");

  function filterTransactions() {
    const expensesWithFlag = expenses.map((expense) => {
      return {
        ...expense,
        isExpense: true,
      };
    });

    const incomesWithFlag = incomes.map((income) => {
      return {
        ...income,
        isExpense: true,
      };
    });

    return selectedFilter === "all"
      ? [...expensesWithFlag, ...incomesWithFlag]
      : selectedFilter === "expenses"
      ? expensesWithFlag
      : incomesWithFlag;
  }

  const displayedTransactions = filterTransactions();

  return (
    <div>
      <div className="payment-history">Recent Transactions</div>
      <img className="path-16" alt="Path" src={allRecentTransactionsButton} />

      <>
        <button
          style={{ border: "none", background: "transparent" }}
          className="payment-history-2"
          onClick={(event) => {
            setSelectedFilter("all");
          }}
        >
          All
        </button>
      </>

      <>
        <div className="rectangle-13" />

        <div className="overlap-group-wrapper">
          <button
            style={{ border: "none" }}
            onClick={(event) => {
              setSelectedFilter("incomes");
            }}
          >
            <div className="payment-history-3">Incomes</div>
            <img className="element-3" alt="Element" src={incomesIcon} />
          </button>
        </div>
      </>

      <div className="scroll-group-2">
        {displayedTransactions.map((transaction) => {
          return (
            <RecentTransaction
              key={transaction.transaction_id}
              merchant={transaction.merchant_name}
              amount={transaction.amount}
              currency={transaction.iso_currency_code}
              dateAndTime={transaction.authorized_datetime}
              isExpense={transaction.isExpense}
            />
          );
        })}
      </div>

      <>
        <div className="rectangle-14" />
        <div className="group-37">
          <button
            style={{ border: "none" }}
            onClick={(event) => {
              setSelectedFilter("expenses");
            }}
          >
            <div className="payment-history-4">Expenses</div>
            <img className="element-12" alt="Element" src={expensesIcon} />
          </button>
        </div>
      </>
    </div>
  );
}
