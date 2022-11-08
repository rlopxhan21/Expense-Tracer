import "./ExpenseItem.css";

import Card from "../UI/Card";
import Date from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <Card className="expenseitem">
      <Date date={props.date} />
      <div>{props.item}</div>
      <div>${props.price}</div>
    </Card>
  );
};

export default ExpenseItem;
