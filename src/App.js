import { useState } from "react";

import "./App.css";

import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIALIZATION_DATA = [
  {
    id: 1,
    item: "Woolworths Eggs & Milks",
    date: new Date(2022, 6, 4),
    price: 45,
  },
  {
    id: 2,
    item: "Big W Kitchen & Manchester",
    date: new Date(2022, 8, 4),
    price: 245,
  },
  {
    id: 3,
    item: "K-mart General Clothing",
    date: new Date(2022, 4, 6),
    price: 100,
  },
];

const App = () => {
  const [expenseData, setExpenseData] = useState(INITIALIZATION_DATA);

  const newExpenseDataHandler = (expensedata) => {
    console.log(expensedata);
    setExpenseData((prevExpenses) => {
      return [expensedata, ...prevExpenses];
    });
  };
  return (
    <div className="main_body">
      <NewExpense onNewExpenseData={newExpenseDataHandler} />
      <Expense int_data={expenseData} />
    </div>
  );
};

export default App;
