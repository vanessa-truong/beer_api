import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";

const AllBeerDetails = () => {

    const location = useLocation();
    // console.log(location);

    return ( 
    <div>
        <img src={location.state.image_url} alt="image" />
        <h1>{location.state.name}</h1>
        <div className="first_brewed">
        <p>First brewed:</p>
        <p>{location.state.first_brewed}</p>
        </div>
        <div className="attenuation">
        <p>Attenuation level</p>
        <p>{location.state.attenuation_level}</p>
        <p>{location.state.contributed_by}</p>
        <p>{location.state.description}</p>
        </div>
        <NavBar />
    </div>
    );
}

export default AllBeerDetails;