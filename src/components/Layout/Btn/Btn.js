import React from "react";
import { Button } from "reactstrap";

const Btn = ({ onClick, text, floatRight, disabled, block, marginX }) => {
  return (
    <Button
      style={{
        background: "#e28336",
        border: "none",
        fontWeight: 500,
        textDecoration: "none",
        width: marginX ? "80%" : null,
        margin: marginX ? "auto" : null,
      }}
      onClick={onClick}
      className={`mt-5 mb-3 ${floatRight ? "float-right" : ""}`}
      disabled={disabled}
      block={block}
    >
      {text}
    </Button>
  );
};

export default Btn;
