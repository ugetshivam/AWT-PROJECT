import React from "react";
import { Form, Button, Col, InputGroup, FormControl } from "react-bootstrap";
function Sign() {
  return (
    <Form>
      <Form.Row className="align-items-center">
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup" srOnly>
            Username
          </Form.Label>
          <InputGroup className="mb-2">
            <InputGroup.Prepend>
              <InputGroup.Text>@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="inlineFormInputGroup" placeholder="Username" />
          </InputGroup>
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInput" srOnly>
            Password
          </Form.Label>
          <Form.Control
            type="password"
            className="mb-2"
            id="inlineFormInput"
            placeholder="Password"
          />
        </Col>
        <Col xs="auto">
          <Form.Check
            type="checkbox"
            id="autoSizingCheck"
            className="mb-2"
            label="Remember me"
          />
        </Col>
        <Col xs="auto">
          <Button type="submit" className="mb-2">
            Submit
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
}

export default Sign;
