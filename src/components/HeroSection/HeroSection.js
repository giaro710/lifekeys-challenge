import React from "react";
import { Container } from "reactstrap";

const HeroSection = ({ title, subtitle }) => {
  return (
    <Container
      style={{ backgroundColor: "#e28336" }}
      className="d-flex  align-items-center mb-5 py-5"
    >
      <div style={{ marginLeft: "30px" }}>
        <h1 style={{ fontSize: "80px", fontWeight: "700", color: "#fff" }}>
          {title}
        </h1>
        <p style={{ color: "#fff" }}>{subtitle}</p>
      </div>
      <div>
        <img src="/images/hero.png" alt="hero-img" />
      </div>
    </Container>
  );
};

export default HeroSection;
