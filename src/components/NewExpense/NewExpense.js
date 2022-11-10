import { useState } from "react";

import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const formHandler = () => {
    setIsEditing(true);
  };

  const hideFormHandler = () => {
    setIsEditing(false);
  };

  return (
    <Card className="newexpense">
      {!isEditing && <button onClick={formHandler}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onNewExpenseData={props.onNewExpenseData}
          onHideForm={hideFormHandler}
        />
      )}
    </Card>
  );
};

export default NewExpense;
