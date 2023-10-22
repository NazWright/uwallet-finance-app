import React from "react";
import { Nav } from "react-bootstrap";

/*TODO: Fix defaultActiveKey */
export default function Navbar() {
  return (
    <Nav defaultActiveKey="home" as="ul" className="nav">
      <Nav.Item as="li">
        <Nav.Link eventKey="home" href="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1" href="/profile">
          Manage Profile
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
