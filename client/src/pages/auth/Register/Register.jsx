import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const Register = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="username">
        <InputGroup hasValidation>
          <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Username"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please choose a username.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Button type="submit">Register</Button>
    </Form>
  );
};

export default Register;
