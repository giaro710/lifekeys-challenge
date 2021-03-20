import React from "react";
import { Container } from "reactstrap";

const Layout = (props) => {
  return (
    <div className="mt-5">
      <Container>{props.children}</Container>
    </div>
  );
};

export default Layout;
