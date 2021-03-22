import React, { useState } from "react";
import { Container, Button, Label, Input } from "reactstrap";

import SingleAnswer from "../Answers/SingleAnswer/SingleAnswer";

const QuizCard = ({
  question,
  answerValue,
  clickedSubmit,
  setAnswerValue,
  handleQuestionSubmit,
}) => {
  const renderChoices = () => {
    return question.answers.map((answer, index) => {
      return (
        <SingleAnswer
          key={answer.answerText}
          type={question.type === "multipleChoice" ? "checkbox" : "radio"}
          name={
            question.type === "multipleChoice"
              ? `checkbox-btn-${index}`
              : `radio-btn`
          }
          answerValue={answerValue}
          text={answer.answerText}
          isCorrect={answer.isCorrect}
          clickedSubmit={clickedSubmit}
          onAnswerChange={handleAnswerChange}
        />
      );
    });
  };

  const handleAnswerChange = (e) => {
    setAnswerValue(e.target.value);
  };

  return (
    <Container className="border rounded p-4 pl-0 mt-5">
      <h3 className="mb-2">{question.questionText}</h3>
      <Container onChange={handleAnswerChange}>{renderChoices()}</Container>
      <Button
        className="mt-5 mr-5 ml-1"
        block
        onClick={handleQuestionSubmit}
        color="primary"
      >
        ANSWER
      </Button>
    </Container>
  );
};

export default QuizCard;
