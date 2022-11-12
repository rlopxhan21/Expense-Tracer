import React, { useState } from "react";

import "./Expense.css";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const selectedYearHandler = (selectedyear) => {
    setFilteredYear(selectedyear);
  };

  const filteredexpenses = props.int_data.filter(expense => {
    return expense.date.getFullYear() === parseInt(filteredYear);
  })

  let expensequery = <h2>No expense Found</h2>

  if (filteredexpenses.length > 0) {
    expensequery = filteredexpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          item={expense.item}
          date={expense.date}
          price={expense.price}
        />
      );
    })
  }

  return (
    <Card className="expense__main">
      <ExpenseFilter
        onSelectedYear={selectedYearHandler}
        initialYear={filteredYear}
      />
      {expensequery}
    </Card>
  );
};

export default Expense;
