import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Topbar = () => {
  return (
    <div className="mt-3 border-bottom">
      <Navbar className="pl-0 pr-0" color="faded" light>
        <NavbarBrand
          style={{
            fontWeight: "800",
            fontSize: "25px",
            textDecoration: "none",
          }}
          className="logo mr-auto"
          href="/courses"
        >
          Courses<span style={{ color: "#e28336" }}>.</span>
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Topbar;
