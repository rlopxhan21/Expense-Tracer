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
      {!isEditing && <input type='button' value='Add New Expenses' onClick={formHandler} className='submitbutton'/>}
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
