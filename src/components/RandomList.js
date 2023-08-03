import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import back from "../img/Back.png";
import NavBar from "./NavBar";

const RandomList = () => {
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/random/`)
      .then((res) => res.json())
      .then((json) => {
        setBeer(json);
      });
  }, []);

  console.log(beer);

  return (
    <div>
      <img src={beer.image_url} alt="#" className="img_detailspage" />
      <div className="text_block">
        <h1>{beer.name}</h1>
        <h3 className="slogan">{beer.tagline}</h3>
        <div className="beer_data">
          <p>First brewed:</p>
          <p>{beer.first_brewed}</p>
        </div>
        <div className="beer_data">
          <p>Attenuation level:</p>
          <p>{beer.attenuation_level}</p>
        </div>
        <p className="description">{beer.description}</p>
        <Link to={`/`}>
          <img src={back} alt="back" className="back" />
        </Link>
      </div>
      <NavBar />
    </div>
  );
};

export default RandomList;
