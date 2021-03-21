import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import Jumbo from "../../../hoc/Jumbo/Jumbo";
import QuizCard from "../../Quiz/QuizCard/QuizCard";

import { findCourse } from "../../../helpers/helpers";

const QuizPage = ({ courses }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [clickedSubmit, setClickedSubmit] = useState(false);

  const { id: paramsId } = useParams();
  const course = findCourse(courses, paramsId);

  const questions = course.questions;

  // const questions = [
  //   {
  //     questionText: "piace la cucina italiana?",
  //     type: "boolean",
  //     answers: [
  //       {
  //         answerText: "true",
  //         isCorrect: true,
  //       },
  //       {
  //         answerText: "false",
  //         isCorrect: false,
  //       },
  //     ],
  //   },
  //   {
  //     questionText: "ketchup sugli spaghetti?",
  //     type: "singleChoice",
  //     answers: [
  //       {
  //         answerText: "Sempre, fa bene",
  //         isCorrect: false,
  //       },
  //       {
  //         answerText: "Ogni tanto mi piace",
  //         isCorrect: false,
  //       },
  //       {
  //         answerText: "Mai e poi mai",
  //         isCorrect: true,
  //       },
  //     ],
  //   },
  //   {
  //     questionText: "sigaretta dopo colazione?",
  //     type: "multipleChoice",
  //     answers: [
  //       {
  //         answerText: "Qualche volta aiuta",
  //         isCorrect: true,
  //       },
  //       {
  //         answerText: "Smetti di fumare",
  //         isCorrect: false,
  //       },
  //       {
  //         answerText: "D'obbligo",
  //         isCorrect: true,
  //       },
  //     ],
  //   },
  // ];

  const handleNextButtonClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(questions.length - 1);
    }
    setClickedSubmit(false);
  };

  const handleSubmitQuestion = () => {
    setClickedSubmit(true);
  };

  const button =
    currentQuestion !== questions.length - 1 ? (
      <Button
        onClick={handleNextButtonClick}
        className="mt-5 float-right"
        color="success"
        disabled={!clickedSubmit}
      >
        NEXT QUESTION
      </Button>
    ) : (
      <Link to="/courses/2/end">
        <Button className="mt-5 float-right" color="primary">
          END
        </Button>
      </Link>
    );

  return (
    <>
      <Jumbo title={course.title} subtitle={course.subtitle} />
      <div>
        <h1>Let's discover how much you know about it</h1>
        <h2>
          Test your knowledge of the argument to consolidate what you've learned
        </h2>
        <Container>
          <Row>
            <Col>
              <QuizCard
                question={questions[currentQuestion]}
                handleSubmit={handleSubmitQuestion}
                clickedSubmit={clickedSubmit}
              />
            </Col>
          </Row>
          <Row>
            <Col>{button}</Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default QuizPage;
