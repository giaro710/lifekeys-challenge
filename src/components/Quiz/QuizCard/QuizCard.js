import React, { useState } from "react";
import { Button } from "reactstrap";

import AllAnswers from "../Answers/AllAnswers";

const QuizCard = (props) => {
  const [answerValue, setAnswerValue] = useState("");

  const renderAnswers = () => {
    return (
      <AllAnswers
        answers={props.question.answers}
        onChange={handleRadioChange}
        clicked={props.clickedSubmit}
        multipleChoice={props.question.type === "multipleChoice"}
      />
    );
  };

  const handleRadioChange = (e) => {
    setAnswerValue(e.target.value);
  };

  return (
    <div>
      <h5>{props.question.questionText}</h5>
      {renderAnswers()}
      <Button className="mt-5" onClick={props.handleSubmit} color="primary">
        That's my final answer
      </Button>
    </div>
  );
};

export default QuizCard;
