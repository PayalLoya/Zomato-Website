import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header>
            <div id="appName">
                <Link to="/">
                    Zomato
                </Link>
            </div>
            <div id="account">
                <button className="btn btn-danger register">SignUp</button>
                <button className="btn btn-danger login">Login</button>
            </div>
        </header>
    );
};

export default Header;