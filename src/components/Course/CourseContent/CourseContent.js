import React from "react";

const CourseContent = ({ content: { title }, content: { textContent } }) => {
  return (
    <>
      <h3
        style={{
          fontWeight: "600",
          textDecoration: "none",
        }}
        className="mb-4"
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
