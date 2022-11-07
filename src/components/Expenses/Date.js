import React from "react";

import "./Date.css";

import Card from "../UI/Card";

const Date = (props) => {
    const month = props.date.toLocaleDateString('en-US', {month:'long'});
    const day = props.date.toLocaleDateString('en-US', {day:'numeric'});
    const year = props.date.toLocaleDateString('en-US', {year:'numeric'});


  return <Card className="dateitem">
    <h4>{month}</h4>
    <h4>{year}</h4>
    <h4>{day}</h4>
  </Card>;
};

export default Date;
