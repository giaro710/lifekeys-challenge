import React from "react";
import { Container, Jumbotron } from "reactstrap";

const Jumbo = ({ title, subtitle }) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3 ml-4">{title}</h1>
          <p className="lead ml-4">{subtitle}</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
