import React from "react";
import { Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <Nav defaultActiveKey="/home" as="ul" className="nav">
      <Nav.Item as="li">
        <Nav.Link href="/profile">Manage Profile</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
