import React from "react";
import "./CourseContent.css";

const CourseContent = ({ content: { title }, content: { textContent } }) => {
  return (
    <>
      <h3
        style={{
          fontWeight: "600",
          // fontSize: "25px",
          textDecoration: "none",
        }}
      >
        {title}
      </h3>
      <p
        className="text-justify"
        style={{ lineHeight: "40px", fontSize: "1.2rem", fontWeight: "300" }}
      >
        {textContent}
      </p>
    </>
  );
};

export default CourseContent;
