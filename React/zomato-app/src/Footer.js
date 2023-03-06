import "./Footer.css";

const Footer = () => {
    return(
        <footer>
            <div>
                <h3>Copyright Developer 2022.</h3>
                <div>
                    <ul>
                        <li>Contact Us</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Privacy</li>
                        <li>Security</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Terms of Use</li>
                        <li>Account</li>
                    </ul>
                </div>

                <div className="social">
                    <center>
                        <a href="www.facebook.com" target="_blank">
                            <img src="React\zomato-app\img\fb.png" alt="Facebook"/>
                        </a>
                        <a href="www.instagram.com" target="_blank">
                            <img src="../img/instagram.png" alt="Instagram"/>
                        </a>
                        <a href="www.youTube.com" target="_blank">
                            <img src="../img/youtube.png" alt="YouTube"/>
                        </a>
                    </center>
                </div>
            </div>
        </footer>
    );
};

export default Footer;