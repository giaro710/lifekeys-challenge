import React from "react";
// import { Container, Row } from "reactstrap";
import { Container } from "reactstrap";
import HeroSection from "../../HeroSection/HeroSection";

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
      <HeroSection
        title="Start learning now"
        subtitle="Do not miss the chance to learn quickly and with the best teachers."
      />
      <Container className="d-flex justify-content-between flex-wrap">
        {renderCards()}
      </Container>
    </>
  );
};

export default CoursesPage;
