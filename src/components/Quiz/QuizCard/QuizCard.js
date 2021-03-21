import React, { useState } from "react";
import { Container, Button, Label, Input } from "reactstrap";

import SingleAnswer from "../Answers/SingleAnswer/SingleAnswer";

import AllAnswers from "../Answers/AllAnswers";

const QuizCard = (props) => {
  const renderChoices = () => {
    return props.question.answers.map((answer, index) => {
      return (
        <SingleAnswer
          key={answer.answerText}
          type={props.question.type === "multipleChoice" ? "checkbox" : "radio"}
          name={
            props.question.type === "multipleChoice"
              ? `checkbox-btn-${index}`
              : `radio-btn`
          }
          answerValue={props.answerValue}
          text={answer.answerText}
          isCorrect={answer.isCorrect}
          clickedSubmit={props.clickedSubmit}
          onAnswerChange={handleAnswerChange}
        />
      );
    });
  };

  const handleAnswerChange = (e) => {
    console.log("value", e.target.value);
    props.setAnswerValue(e.target.value);
  };

  return (
    <Container className="border rounded p-4 pl-0 mt-5">
      <h5 className="mb-2">{props.question.questionText}</h5>
      <Container onChange={handleAnswerChange}>{renderChoices()}</Container>
      <Button
        className="mt-5 mr-5 ml-1"
        size="lg"
        block
        onClick={props.handleSubmitQuestion}
        color="primary"
      >
        ANSWER
      </Button>
    </Container>
  );
};

export default QuizCard;
