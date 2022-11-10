import "./ExpenseFilter.css";

import Card from "../UI/Card";

const ExpenseFilter = (props) => {
  const enteredYearHandler = (event) => {
    props.onSelectedYear(event.target.value);
  };

  return (
    <Card className="expensefilter">
      <p>Filter by Year</p>
      <select onChange={enteredYearHandler} value={props.initialYear}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </Card>
  );
};

export default ExpenseFilter;
