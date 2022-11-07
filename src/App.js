import React from "react";

import "./App.css";

import Expense from "./components/Expenses/Expense";

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
  }
];

const App = () => {
  return (
    <div className="main_body">
      <Expense int_data={INITIALIZATION_DATA} />
    </div>
  );
};

export default App;
