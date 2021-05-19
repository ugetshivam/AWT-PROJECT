import React from "react";
import { Form, Button, Col, InputGroup, FormControl } from "react-bootstrap";
function CreateAccount() {
  return (
    <Form
      style={{
        marginTop: "100px",
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control placeholder="Username" />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridDOB">
          <Form.Label>DOB</Form.Label>
          <Form.Control type="date" placeholder="Date of birth" />
        </Form.Group>
      </Form.Row>

      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
}

export default CreateAccount;
