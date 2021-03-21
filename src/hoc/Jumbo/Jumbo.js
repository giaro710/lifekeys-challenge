import React from "react";
import { Container, Jumbotron } from "reactstrap";

const Jumbo = ({ title, subtitle }) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">{title}</h1>
          <p className="lead">{subtitle}</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
