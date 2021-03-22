import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import Jumbo from "../../Layout/Jumbo/Jumbo";
import QuizCard from "../../Quiz/QuizCard/QuizCard";

import { findCourse } from "../../../helpers/helpers";

const QuizPage = ({ courses }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [clickedSubmit, setClickedSubmit] = useState(false);
  const [answerValue, setAnswerValue] = useState("");

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
    setAnswerValue("");
  };

  const handleQuestionSubmit = () => {
    if (answerValue === "") {
      return;
    }
    setClickedSubmit(true);
  };

  const button =
    currentQuestion !== questions.length - 1 ? (
      <Button
        style={{ background: "#e28336", border: "none" }}
        onClick={handleNextButtonClick}
        className="my-5 float-right"
        color="success"
        disabled={!clickedSubmit}
      >
        NEXT QUESTION
      </Button>
    ) : (
      <Link to={`/courses/${course.id}/end`}>
        <Button
          style={{ background: "#e28336", border: "none" }}
          className="my-5 float-right"
          disabled={!clickedSubmit}
        >
          CONCLUSION
        </Button>
      </Link>
    );

  return (
    <>
      <Jumbo
        color={course.color}
        title={course.title}
        subtitle={course.subtitle}
      />
      <div>
        <h1 className="text-center">Final test</h1>
        <Container>
          <Row>
            <Col>
              <QuizCard
                question={questions[currentQuestion]}
                handleQuestionSubmit={handleQuestionSubmit}
                clickedSubmit={clickedSubmit}
                answerValue={answerValue}
                setAnswerValue={setAnswerValue}
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
