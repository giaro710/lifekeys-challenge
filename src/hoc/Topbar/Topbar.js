import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Topbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="mt-3 border-bottom">
      <Navbar className="pl-0 pr-0" color="faded" light>
        <NavbarBrand
          style={{ fontWeight: "800", fontSize: "25px" }}
          className="logo"
          href="/courses"
          className="mr-auto"
        >
          Courses<span style={{ color: "#e28336" }}>.</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/courses">Courses</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Topbar;
