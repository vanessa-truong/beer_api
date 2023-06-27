import BeerLogo from "../img/icons8-bier-64.png";
import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div className="NavBar">
            <Link to={`/`}><img src={BeerLogo} alt="#" /></Link>
        </div>
    );
}

export default NavBar;