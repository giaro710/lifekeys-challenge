import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import Jumbo from "../../Layout/Jumbo/Jumbo";
import Btn from "../../Layout/Btn/Btn";
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
      <Btn
        onClick={handleNextButtonClick}
        text="NEXT QUESTION"
        disabled={!clickedSubmit}
        floatRight
      />
    ) : (
      <Link to={`/courses/${course.id}/end`}>
        <Btn
          onClick={handleNextButtonClick}
          text="CONCLUSION"
          floatRight
          disabled={!clickedSubmit}
        />
      </Link>
    );

  return (
    <div className="mb-5">
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
    </div>
  );
};

export default QuizPage;
