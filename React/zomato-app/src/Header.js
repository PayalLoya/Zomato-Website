import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const url = "https://login-api-6rvm.onrender.com/auth/userInfo";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: "",
    };
  }

  handleLogOut = () => {
    sessionStorage.removeItem("ltk");
    sessionStorage.setItem("loginStatus", "logout");
    this.setState({ userData: "" });
    this.props.history.push("/");
  };

  conditionalHeader = () => {
    if (this.state.userData.name) {
      let data = this.state.userData;
      let outArray = [data.name, data.email, data.phone];
      sessionStorage.setItem("userInfo", outArray);
      sessionStorage.setItem("loginStatus", "login");
      return (
        <>
          <Navbar.Text className="account">
            Hi, {this.state.userData.name}
          </Navbar.Text>
          <Navbar.Text className="account" onClick={this.handleLogOut}>
            LogOut
          </Navbar.Text>
        </>
      );
    } else {
      return (
        <>
          <Navbar.Text className="account">
            <Link to="/register" className="signUp">
              Sign Up
            </Link>
          </Navbar.Text>
          <Navbar.Text className="account">
            <Link to="/login" className="logIn">
              Log In
            </Link>
          </Navbar.Text>
        </>
      );
    }
  };

  render() {
    return (
      <>
        <Navbar className="header">
          <Container fluid>
            <Link to="/" className="appName">
              Zomato
            </Link>
          </Container>
          <Navbar.Collapse className="justify-content-end">
            {this.conditionalHeader()}
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }

  componentDidMount() {
    fetch(url, {
      method: "GET",
      headers: {
        "x-auth-token": sessionStorage.getItem("ltk"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          userData: data,
        });
      });
  }
}

export default withRouter(Header);
