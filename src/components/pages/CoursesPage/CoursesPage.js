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
        <CourseCard
          key={course.id}
          id={course.id}
          title={course.title}
          subtitle={course.subtitle}
          image={course.img}
        />
      );
    });
  };

  return (
    <>
      <Container
        style={{ backgroundColor: "#e28336", color: "white" }}
        className="mb-5 py-5"
      >
        <h1 style={{ fontWeight: "700" }}>Start learning now</h1>
        <p>
          Do not miss the chance to learn quickly and with the best teachers.
        </p>
      </Container>

      <Container className="d-flex justify-content-between flex-wrap">
        {renderCards()}
      </Container>
    </>
  );
};

export default CoursesPage;
