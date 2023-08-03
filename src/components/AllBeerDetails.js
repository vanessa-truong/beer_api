import { Link, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import back from "../img/Back.png";

const AllBeerDetails = () => {
  const location = useLocation();
  // console.log(location);

  return (
    <div>
      <img
        src={location.state.image_url}
        alt="image"
        className="img_detailspage"
      />
      <div className="text_block">
        <h1>{location.state.name}</h1>
        <h3 className="slogan">{location.state.tagline}</h3>
        <div className="beer_data">
          <p>First brewed:</p>
          <p>{location.state.first_brewed}</p>
        </div>
        <div className="beer_data">
          <p>Attenuation level:</p>
          <p>{location.state.attenuation_level}</p>
        </div>
        <p className="description">{location.state.description}</p>
        <Link to={`/allbeers`}>
          <img src={back} alt="back" className="back" />
        </Link>
      </div>
      <NavBar />
    </div>
  );
};

export default AllBeerDetails;
