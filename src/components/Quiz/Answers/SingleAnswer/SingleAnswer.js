import React from "react";
import { Input } from "reactstrap";

import "./SingleAnswer.css";

const RadioAnswer = ({ type, name, value, text, isCorrect, clicked }) => {
  const displayResultColor = () => {
    let resultClass = "";
    if (clicked && isCorrect) {
      return (resultClass = "green");
    } else if (clicked && !isCorrect) {
      return (resultClass = "red");
    } else {
      return (resultClass = "");
    }
  };

  return (
    <>
      <Input
        type={type}
        name={name}
        value={value}
        disabled={clicked ? true : false}
      />
      <p className={`${displayResultColor()}`}>{text}</p>
    </>
  );
};

export default RadioAnswer;
