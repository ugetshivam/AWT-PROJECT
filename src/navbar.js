import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar
          collapseOnSelect
          fixed="top"
          expand="sm"
          bg="dark"
          variant="dark"
        >
          <Navbar.Brand href="/">Fake-Critic</Navbar.Brand>
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                {/* <Nav.Link href="/">Home</Nav.Link> */}
                <Nav.Link href="/leavearev">Leave A Review</Nav.Link>
                <Nav.Link href="/sign">Sign In</Nav.Link>
                <Nav.Link href="/createaccount">Create An Account</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
export default Navigation;
