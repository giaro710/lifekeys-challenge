import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Jumbo from "../../Layout/Jumbo/Jumbo";
import Btn from "../../Layout/Btn/Btn";

import { findCourse } from "../../../helpers/helpers";

const GeneralPage = ({ courses, childContent, btnNext, btn2 }) => {
  // content could be content or questions
  const [currentItem, seCurrentItem] = useState(0);

  const { id: paramsId } = useParams();
  const course = findCourse(courses, paramsId);
  console.log(course.color);

  const content = course.childContent;

  const handleNextButtonClick = () => {
    if (currentItem < content.length - 1) {
      seCurrentItem(currentItem + 1);
    } else {
      seCurrentItem(content.length - 1);
    }
  };

  const button =
    currentItem !== content.length - 1 ? (
      <Btn onClick={handleNextButtonClick} text={btnNext} floatRight />
    ) : (
      <Link to={`/courses/${course.id}/quiz`}>
        <Btn onClick={handleNextButtonClick} text={btn2} floatRight />
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
            <component content={content[currentItem]} />
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>{`Page ${currentItem + 1}/${content.length}`}</h6>
          </Col>
          <Col>{button}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default GeneralPage;
