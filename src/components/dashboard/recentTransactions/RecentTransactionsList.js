import React, { useState } from "react";
import allRecentTransactionsButton from "../../../static/img/path-32.png";
import expensesIcon from "../../../static/img/14-7.png";
import incomesIcon from "../../../static/img/14-6.png";
import RecentTransaction from "./RecentTransaction";

export default function RecentTransactionsList({ expenses, incomes }) {
  const [allRecentTransactionsSelected, setAllRecentTransactionsSelected] =
    useState(true);
  const [expenseOnlyTransactionsSelected, setExpenseOnlyTransactionsSelected] =
    useState(false);

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

    if (allRecentTransactionsSelected) {
      return [...expensesWithFlag, ...incomesWithFlag];
    } else {
      if (expenseOnlyTransactionsSelected) {
        return expensesWithFlag;
      } else {
        return incomesWithFlag;
      }
    }
  }

  const displayedTransactions = filterTransactions();

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

      <div className="group-37">
        <div className="overlap-18">
          <div className="payment-history-4">Expenses</div>
          <img className="element-12" alt="Element" src={expensesIcon} />
        </div>
      </div>
    </>
  );
}
