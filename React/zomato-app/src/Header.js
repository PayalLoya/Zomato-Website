import "./Header.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar className="header">
      <Container fluid>
        <Link to ="/" className="appName">Zomato</Link>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="account">
            <a href="#login" className="signUp">
              Sign Up
            </a>
          </Navbar.Text>
          <Navbar.Text className="account">
            <a href="#login" className="logIn">
              Log In
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
