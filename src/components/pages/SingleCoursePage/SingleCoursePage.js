import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Container, Row, Col } from "reactstrap";
import Jumbo from "../../../hoc/Jumbo/Jumbo";
import CourseContent from "../../Course/CourseContent/CourseContent";
import { findCourse } from "../../../helpers/helpers";

const SingleCoursePage = ({ courses }) => {
  const [currentContent, setCurrentContent] = useState(0);

  const { id: paramsId } = useParams();
  const course = findCourse(courses, paramsId);

  const pageContents = course.content;

  const handleNextButtonClick = () => {
    if (currentContent < pageContents.length - 1) {
      setCurrentContent(currentContent + 1);
    } else {
      setCurrentContent(pageContents.length - 1);
    }
  };

  const button =
    currentContent !== pageContents.length - 1 ? (
      <Button
        onClick={handleNextButtonClick}
        className="mt-5 float-right"
        color="success"
      >
        NEXT
      </Button>
    ) : (
      <Link to={`/courses/${course.id}/quiz`}>
        <Button className="mt-5 float-right" color="primary">
          GO TO THE QUIZ
        </Button>
      </Link>
    );

  return (
    <div className="mb-5">
      <Jumbo title={course.title} subtitle={course.subtitle} />
      <Container>
        <Row>
          <Col>
            <CourseContent content={pageContents[currentContent]} />
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>{`Page ${currentContent + 1}/${pageContents.length}`}</h6>
          </Col>
          <Col>{button}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingleCoursePage;
