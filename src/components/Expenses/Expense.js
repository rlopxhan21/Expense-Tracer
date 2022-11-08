import React from "react";

import "./Expense.css";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const Expense = (props) => {
  return (
    <Card className="expense__main">
      <ExpenseFilter />
      <ExpenseFilter />

      <ExpenseItem
        item={props.int_data[0].item}
        date={props.int_data[0].date}
        price={props.int_data[0].price}
      />
      <ExpenseItem
        item={props.int_data[1].item}
        date={props.int_data[1].date}
        price={props.int_data[1].price}
      />
      <ExpenseItem
        item={props.int_data[2].item}
        date={props.int_data[2].date}
        price={props.int_data[2].price}
      />
    </Card>
  );
};

export default Expense;
