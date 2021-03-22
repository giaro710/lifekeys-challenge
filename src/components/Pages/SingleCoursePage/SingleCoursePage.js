import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Jumbo from "../../Layout/Jumbo/Jumbo";
import Btn from "../../Layout/Btn/Btn";
import CourseContent from "../../Course/CourseContent/CourseContent";
import { findCourse } from "../../../helpers/helpers";

const SingleCoursePage = ({ courses }) => {
  const [currentContent, setCurrentContent] = useState(0);

  const { id: paramsId } = useParams();
  const course = findCourse(courses, paramsId);
  console.log(course.color);

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
      <Btn onClick={handleNextButtonClick} text="NEXT" floatRight />
    ) : (
      <Link to={`/courses/${course.id}/quiz`}>
        <Btn onClick={handleNextButtonClick} text="GO TO THE QUIZ" floatRight />
      </Link>
    );

  return (
    <div className="mb-5">
      <Jumbo
        color={course.color}
        title={course.title}
        subtitle={course.subtitle}
      />

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
