import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredItem, setEnteredItem] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const itemHandler = (event) => {
    setEnteredItem(event.target.value);
  };

  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expensedata = {
      id: Math.random().toString(),
      item: enteredItem,
      price: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onNewExpenseData(expensedata);

    setEnteredItem("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const cancelHandler = () => {
    props.onHideForm();
  };

  return (
    <form className="expenseform" onSubmit={submitHandler}>
      <div className="expenseform_input">
        <label htmlFor="itemname">Item</label>
        <input
          id="itemname"
          type="textbox"
          placeholder="Item to add..."
          onChange={itemHandler}
          value={enteredItem}
          className='input-field'
          required
        ></input>
      </div>
      <div className="expenseform_input">
        <label htmlFor="itemname">Amount</label>
        <input
          id="itemname"
          type="number"
          onChange={amountHandler}
          value={enteredAmount}
          pattern="[0-9]"
          className='input-field'
          required
        ></input>
      </div>
      <div className="expenseform_input">
        <label htmlFor="itemname">Date</label>
        <input
          id="itemname"
          type="date"
          onChange={dateHandler}
          value={enteredDate}
          className='input-field'
          required
        ></input>
      </div>
      <input type="submit" value="Add Expense" className="submitbutton" />
      <input type="button" value='Cancel' className="submitbutton" onClick={cancelHandler} />
    </form>
  );
};

export default ExpenseForm;
