import React from "react";

const CourseContent = (props) => {
  return (
    <>
      <h3>{props.content.title}</h3>
      <p className="text-justify">{props.content.textContent}</p>
    </>
  );
};

export default CourseContent;
