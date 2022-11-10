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

  return (
    <Card className="expense__main">
      <ExpenseFilter
        onSelectedYear={selectedYearHandler}
        initialYear={filteredYear}
      />
      {props.int_data.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            item={expense.item}
            date={expense.date}
            price={expense.price}
          />
        );
      })}
    </Card>
  );
};

export default Expense;
