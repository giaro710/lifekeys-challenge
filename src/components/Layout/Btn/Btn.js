import React from "react";
import { Button } from "reactstrap";

const Btn = ({ onClick, text, floatRight, disabled }) => {
  return (
    <Button
      style={{ background: "#e28336", border: "none", fontWeight: 500 }}
      onClick={onClick}
      className={`mt-5 ${floatRight ? "float-right" : ""}`}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default Btn;
