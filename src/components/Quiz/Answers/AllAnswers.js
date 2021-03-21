import React, { useState } from "react";
import SingleAnswer from "./SingleAnswer/SingleAnswer";

const AllAnswers = (props) => {
  const renderChoices = () => {
    return props.answers.map((answer, index) => {
      return (
        <SingleAnswer
          key={answer.answerText}
          type={props.multipleChoice ? "checkbox" : "radio"}
          name={props.multipleChoice ? `checkbox-btn-${index}` : `radio-btn`}
          value={answer.answerText}
          text={answer.answerText}
          isCorrect={answer.isCorrect}
          clicked={props.clicked}
        />
      );
    });
  };

  return (
    <div>
      <h5>
        Select the correct answer{" "}
        {props.multipleChoice ? "Attention: more than one is correct" : null}
      </h5>
      <div onChange={props.onChange}>{renderChoices()}</div>
    </div>
  );
};

export default AllAnswers;
