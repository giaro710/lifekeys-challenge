import React from "react";
import { Link, useParams } from "react-router-dom";
import Jumbo from "../../Layout/Jumbo/Jumbo";
import Btn from "../../Layout/Btn/Btn";
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
      <Container className="border border-5 rounded p-5 mb-5">
        <h1
          className="text-center mt-3"
          style={{ color: "#e28336", textDecoration: "underline" }}
        >
          Congratulations
        </h1>
        <h6 className="text-center mt-5" style={{ lineHeight: "40px" }}>
          Now you master{" "}
          <span
            style={{ color: course.color, fontWeight: "600", fontSize: "30px" }}
          >
            {course.title}
          </span>
          .<br></br>
          But remember that each new acquaintance is not a point of arrival but
          of departure. <br></br>We wish you Good onward Journey
        </h6>

        <h6 className="text-center mt-5" style={{ fontWeight: "600" }}>
          - Aim for what you don't know and you will get far -
        </h6>

        <Link to="/courses" style={{ textDecoration: "none" }}>
          <Btn text="Back to all courses" block />
        </Link>
      </Container>
    </Container>
  );
};

export default CongratulationsPage;
