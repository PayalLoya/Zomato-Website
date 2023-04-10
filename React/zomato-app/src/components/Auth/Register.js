import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const url = "https://login-api-6rvm.onrender.com/auth/register";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      phone: "",
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
      .then(this.props.history.push("/login"));
  };

  render() {
    return (
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={this.state.email} placeholder="name@example.com" onChange={this.handleChange}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"  name="password" value={this.state.password} onChange={this.handleChange}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput4"
              >
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" name="phone" value={this.state.phone} onChange={this.handleChange}/>
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="danger" onClick={this.handleSubmit}>Create Account</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}
