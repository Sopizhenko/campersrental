import logo from "../../assets/logo.svg";
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className="logo">
            <img src={logo} alt="Logo"/>
        </Link>
    );
};

export default Logo;