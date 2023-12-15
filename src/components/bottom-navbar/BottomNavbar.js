import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { IoHomeOutline, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa";

export default function BottomNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary bottom-navbar">
      <Container>
        <Nav className="me-auto d-flex flex-row w-100 justify-content-evenly">
          <Nav.Link href="#home">
            <IoHomeOutline />
          </Nav.Link>
          <Nav.Link href="#link">
            <IoChatbubbleEllipsesOutline />
          </Nav.Link>
          <Nav.Link href="#link">
            <BsGraphUp />
          </Nav.Link>
          <Nav.Link href="#link">
            <FaRegLightbulb />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
