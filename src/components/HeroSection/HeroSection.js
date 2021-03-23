import React from "react";
import { Container } from "reactstrap";
import "./HeroSection.css";

const HeroSection = ({ title, subtitle }) => {
  return (
    <Container
      style={{ backgroundColor: "#e28336" }}
      className="d-flex align-items-center mb-5 py-5 pl-5"
    >
      <div style={{ marginLeft: "30px", width: "30%" }}>
        <h1 style={{ fontSize: "80px", fontWeight: "700", color: "#fff" }}>
          {title}
        </h1>
        <h6 style={{ color: "#fff" }}>{subtitle}</h6>
      </div>

      <div style={{ width: "70%" }}>
        <img
          className="hero-img"
          width="100%"
          src="/images/hero.png"
          alt="hero-img"
        />
      </div>
    </Container>
  );
};

export default HeroSection;
