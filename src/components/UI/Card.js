import React from "react";

import "./Card.css";

const Card = (props) => {
  const newClasses = "card " + props.className;

  return <div className={newClasses}>{props.children}</div>;
};

export default Card;
