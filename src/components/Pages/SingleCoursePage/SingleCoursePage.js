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
        <Btn text="GO TO THE TEST" floatRight />
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
      </Container>
      <Container className="d-flex justify-content-between align-items-center p-3">
        <div>
          <h6 style={{ color: "#787575" }} className="mb-0">{`Page ${
            currentContent + 1
          }/${pageContents.length}`}</h6>
        </div>
        <div>{button}</div>
      </Container>
    </div>
  );
};

export default SingleCoursePage;
