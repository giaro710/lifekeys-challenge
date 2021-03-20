import React from "react";

import { dataStructure } from "../../../data";

import { Container, CardDeck, Row, Col } from "reactstrap";

import CourseCard from "../../Course/CourseCard/CourseCard";

const CoursesPage = () => {
  // const renderCourses = () => {
  //   for (const property in dataStructure) {
  //     console.log(property);
  //     console.log(dataStructure[property].title);
  //     return (
  //       <div>
  //         <h2>{dataStructure[property].title}</h2>
  //         <CourseCard
  //           id={dataStructure[property].id}
  //           title={dataStructure[property].title}
  //         />
  //       </div>
  //     );
  //   }
  // };

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
          <CourseCard />
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
