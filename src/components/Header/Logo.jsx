import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src="/Logo.svg" alt="TravelTrucks" />
    </Link>
  );
};

export default Logo;
