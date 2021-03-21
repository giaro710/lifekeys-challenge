import React from "react";
import { Container, Input } from "reactstrap";

import "./SingleAnswer.css";

const SingleAnswer = ({
  type,
  name,
  answerValue,
  text,
  isCorrect,
  clickedSubmit,
}) => {
  const displayResultColor = () => {
    let resultClass = "";
    if (answerValue === "on") {
      if (clickedSubmit && isCorrect) {
        return (resultClass = "green");
      } else if (clickedSubmit && !isCorrect) {
        return (resultClass = "red");
      } else {
        return (resultClass = "");
      }
    }
  };

  return (
    <Container className={`border rounded my-5 ${displayResultColor()}`}>
      <Input
        className="ml-4"
        type={type}
        name={name}
        disabled={clickedSubmit ? true : false}
      />
      <p className="ml-5">{text}</p>
      {/* <p className={`${displayResultColor()} ml-5`}>{text}</p> */}
    </Container>
  );
};

export default SingleAnswer;
