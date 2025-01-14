import logo from "../../assets/logo.svg";

const Logo = () => {
    return (
        <a className="logo" href="/">
            <img src={logo} alt="Logo" />
        </a>
    );
};

export default Logo;