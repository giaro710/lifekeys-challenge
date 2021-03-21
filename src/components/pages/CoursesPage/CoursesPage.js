import React from "react";

import { Container, Row } from "reactstrap";

import CourseCard from "../../Course/CourseCard/CourseCard";

const CoursesPage = () => {
  return (
    <>
      <div className="mb-5">
        <h1>Start learning now</h1>
        <h6>
          Do not miss the chance to learn quickly and with the best teacher.
        </h6>
      </div>

      <Container>
        <Row>
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </Row>
      </Container>
    </>
  );
};

export default CoursesPage;
