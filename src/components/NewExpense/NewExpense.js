import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

const NewExpense = props => {
  return (
    <Card className="newexpense">
      <ExpenseForm onNewExpenseData={props.onNewExpenseData}/>
    </Card>
  );
};

export default NewExpense;
