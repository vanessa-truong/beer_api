import Logo from "../img/Logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to={`/`}>
        <img src={Logo} alt="kreis" className="logo" />
      </Link>
    </div>
  );
};

export default NavBar;
