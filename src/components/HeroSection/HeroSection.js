import React from "react";
import { Container } from "reactstrap";

const HeroSection = ({ title, subtitle }) => {
  return (
    <Container
      style={{ backgroundColor: "#e28336", color: "white" }}
      className="mb-5 py-5"
    >
      <h1 style={{ fontWeight: "700" }}>{title}</h1>
      <p>{subtitle}</p>
    </Container>
  );
};

export default HeroSection;
