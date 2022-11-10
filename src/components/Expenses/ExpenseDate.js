import React from "react";

import "./ExpenseDate.css";

import Card from "../UI/Card";

const Date = (props) => {
    const month = props.date.toLocaleString('en-US', {month:'long'});
    const day = props.date.toLocaleString('en-US', {day:'2-digit'});
    const year = props.date.getFullYear();


  return <Card className="dateitem">
    <h4>{month}</h4>
    <h4>{year}</h4>
    <h4>{day}</h4>
  </Card>;
};

export default Date;
