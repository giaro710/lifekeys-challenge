import React from "react";
import { Link, useParams } from "react-router-dom";
import Jumbo from "../../Layout/Jumbo/Jumbo";
import { Container, Button } from "reactstrap";
import { findCourse } from "../../../helpers/helpers";

const CongratulationsPage = ({ courses }) => {
  const { id: paramsId } = useParams();
  const course = findCourse(courses, paramsId);

  return (
    <Container>
      <Jumbo
        color={course.color}
        title={course.title}
        subtitle={course.subtitle}
      />

      <h1 className="text-center mt-3">Congratulations</h1>
      <h4 className="text-center mt-5" style={{ lineHeight: "40px" }}>
        Now you master <span style={{ color: "#e28336" }}>{course.title}</span>.
        <br></br>But remember that each new acquaintance is not a point of
        arrival but of departure. <br></br>We wish you Good onward Journey
      </h4>

      <h4 className="text-center mt-5">
        Aim for what you don't know you will get far
      </h4>

      <Link to="/courses">
        <Button>Courses</Button>
      </Link>
    </Container>
  );
};

export default CongratulationsPage;
