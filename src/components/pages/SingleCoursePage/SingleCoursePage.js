import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Jumbotron } from "reactstrap";
import CourseContent from "../../Course/CourseContent/CourseContent";

const SingleCoursePage = () => {
  const [currentContent, setCurrentContent] = useState(0);
  console.log("il currentContent fuori dalls State", currentContent);

  const pageContent = [
    {
      title: "The importance of olive oil",
      textContent: "The Mediterranean diet, the Italian one to be precse.",
    },
    {
      title: "Not only pizza",
      textContent: "page 2",
    },
    {
      title: "Carbonara is not made with cream",
      textContent: "page 3",
    },
  ];

  const handleNextButtonClick = () => {
    if (currentContent < pageContent.length - 1) {
      setCurrentContent(currentContent + 1);
      console.log(currentContent);
    } else {
      setCurrentContent(pageContent.length - 1);
      console.log(currentContent);
    }
  };

  const button =
    currentContent !== pageContent.length - 1 ? (
      <Button
        onClick={handleNextButtonClick}
        className="mt-5 float-right"
        color="success"
      >
        NEXT
      </Button>
    ) : (
      <Link to="/courses/2/quiz">
        <Button className="mt-5 float-right" color="primary">
          GO TO THE QUIZ
        </Button>
      </Link>
    );

  return (
    <Container>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Italian Food</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
      <Row>
        <Col>
          <CourseContent content={pageContent[currentContent]} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h6>{`Page ${currentContent + 1}/${pageContent.length}`}</h6>
        </Col>
        <Col>{button}</Col>
      </Row>
    </Container>
  );
};

export default SingleCoursePage;
