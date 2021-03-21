import React, { useState } from "react";
import { Container, Button } from "reactstrap";

import SingleAnswer from "../Answers/SingleAnswer/SingleAnswer";

import AllAnswers from "../Answers/AllAnswers";

const QuizCard = (props) => {
  const [answerValue, setAnswerValue] = useState("");

  // const renderAnswers = () => {
  //   return (
  //     <AllAnswers
  //       answers={props.question.answers}
  //       onChange={handleRadioChange}
  //       clicked={props.clickedSubmit}
  //       multipleChoice={props.question.type === "multipleChoice"}
  //     />
  //   );
  // };

  const renderChoices = () => {
    return props.question.answers.map((answer, index) => {
      return (
        <Container className="mt-3 border rounded">
          <SingleAnswer
            key={answer.answerText}
            type={
              props.question.type === "multipleChoice" ? "checkbox" : "radio"
            }
            name={
              props.question.type === "multipleChoice"
                ? `checkbox-btn-${index}`
                : `radio-btn`
            }
            value={answer.answerText}
            text={answer.answerText}
            isCorrect={answer.isCorrect}
            clicked={props.clickedSubmit}
          />
        </Container>
      );
    });
  };

  const handleAnswerChange = (e) => {
    setAnswerValue(e.target.value);
  };

  return (
    <Container className="border rounded p-4 mt-5">
      <h5 className="mb-2">{props.question.questionText}</h5>
      {/* {renderAnswers()} */}
      <Container onChange={handleAnswerChange}>{renderChoices()}</Container>
      <Button className="mt-5" onClick={props.handleSubmit} color="primary">
        That's my final answer
      </Button>
    </Container>
  );
};

export default QuizCard;
