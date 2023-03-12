import "./Footer.css";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <div className="footer-body">
        <div className="copyright">© Copyright Developer 2022.</div>
        <div className="sub-body">
          <div className="categories">
            <ul>
              <li>Contact Us</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="categories">
            <ul>
              <li>Privacy</li>
              <li>Security</li>
            </ul>
          </div>
          <div className="categories no-border">
            <ul>
              <li>Terms of Use</li>
              <li>Account</li>
            </ul>
          </div>
        </div>

        {/* <div className="social">
          <center>
            <a href="www.facebook.com/" target="_blank">
              <img src="React\zomato-app\img\fb.png" alt="Facebook" className="socialImg" />
            </a>
            <a href="www.instagram.com/" target="_blank">
              <img src="React/zomato-app/img/insta.png" alt="Instagram" className="socialImg" />
            </a>
            <a href="www.youTube.com/" target="_blank">
              <img src="" alt="YouTube" className="socialImg" />
            </a>
          </center>
        </div> */}
      </div> 
    </Container>
  );
};

export default Footer;
