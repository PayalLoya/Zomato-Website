import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const url = "http://localhost:8000/auth/login";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">
              <Link to="/register" style={{"text-decoration": "none" , color: "white"}}> Sign up </Link>
            </Button>
            <Button variant="danger">Login</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}
