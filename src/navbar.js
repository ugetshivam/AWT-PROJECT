import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Container,
  Dropdown,
  ButtonGroup,
  Button,
} from "react-bootstrap";
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
          <Navbar.Brand href="/" className="shimmer">
            Fake-Critic
          </Navbar.Brand>
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                {/* <Nav.Link href="/">Home</Nav.Link> */}
                <Dropdown as={ButtonGroup}>
                  <Button variant="dark" href="/leavearev">
                    Games
                  </Button>
                  <Dropdown.Toggle
                    split
                    variant="dark"
                    id="dropdown-split-basic"
                  />
                  <Dropdown.Menu>
                    <div className="dropGames">
                      <h4>Top Games Right Now</h4>
                      <Dropdown.Item href="/lou">
                        Last of Us Part II{" "}
                        <img
                          src="https://cdn.vox-cdn.com/thumbor/ak2hDHzblpvcoUlk_Yl53CHMbEw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20058797/ellie.jpeg"
                          height="50px"
                          width="50px"
                        ></img>
                      </Dropdown.Item>
                      <Dropdown.Item href="/metro">
                        Metro Exodus{" "}
                        <img
                          src="https://image.api.playstation.com/vulcan/img/rnd/202010/2814/jhNIE3yH1SNEe9CmxTVHAdme.png"
                          height="50px"
                          width="50px"
                        ></img>
                      </Dropdown.Item>
                      <Dropdown.Item href="ResVill">
                        Resident Evil Village{" "}
                        <img
                          src="https://image.api.playstation.com/vulcan/ap/rnd/202101/0812/FkzwjnJknkrFlozkTdeQBMub.png"
                          height="50px"
                          width="50px"
                        ></img>
                      </Dropdown.Item>
                      <Dropdown.Item href="/returnal">
                        Returnal{" "}
                        <img
                          src="https://image.api.playstation.com/vulcan/ap/rnd/202011/1621/fYZQHZ42eXXUt7c6D5YjLrq5.png"
                          height="50px"
                          width="50px"
                        ></img>
                      </Dropdown.Item>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
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
