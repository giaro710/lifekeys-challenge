import React from "react";
// import { Container, Row } from "reactstrap";
import {
  Container,
  Row,
  Col,
  // Card,
  // CardBody,
  // Button,
  // CardTitle,
  // CardText,
  // CardImg,
} from "reactstrap";

import CourseCard from "../../Course/CourseCard/CourseCard";

const CoursesPage = ({ courses }) => {
  const renderCards = () => {
    return courses.map((course) => {
      return (
        <Col key={course.id}>
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            subtitle={course.subtitle}
            image={course.img}
          />
        </Col>
      );
    });
  };

  return (
    <>
      <Container className="mb-5">
        <h1>Start learning now</h1>
        <h6>
          Do not miss the chance to learn quickly and with the best teacher.
        </h6>
      </Container>

      <Container>
        <Row>{renderCards()}</Row>
      </Container>
    </>
  );
};

export default CoursesPage;
