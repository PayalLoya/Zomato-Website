import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const url = "https://login-api-6rvm.onrender.com/auth/login";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.auth === false) {
          this.setState({ message: data.token });
        } else {
          sessionStorage.setItem("ltk", data.token);
          this.props.history.push("/");
        }
      });
  };
  render() {
    return (
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={this.state.email}
                  placeholder="name@example.com"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">
              <Link
                to="/register"
                style={{ "text-decoration": "none", color: "white" }}
              >
                Sign up
              </Link>
            </Button>
            <Button variant="danger" onClick={this.handleSubmit}>
              Login
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}
