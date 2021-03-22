import React from "react";
import { Container, Jumbotron } from "reactstrap";

const Jumbo = ({ color, title, subtitle }) => {
  return (
    <div className="my-5">
      <Jumbotron fluid style={{ background: color, color: "#fff" }}>
        <Container fluid>
          <h1
            style={{ fontWeight: "600", color: "#fff" }}
            className="display-3 ml-4"
          >
            {title}
          </h1>
          <p className="lead ml-4" style={{ color: "#fff" }}>
            {subtitle}
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
