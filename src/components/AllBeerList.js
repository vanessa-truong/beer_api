import { useState, useEffect } from "react";

//pages&Components
import AllBeerItem from "./AllBeerItem";

const AllBeerList = () => {
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers`)
      .then((res) => res.json())
      .then((json) => {
        setBeer(json);
      });
  }, []);

  console.log(beer);

  return (
    <section>
      <div className="allbeerFlex">
        {beer.map((elt, i) => {
          return (
            <AllBeerItem
              key={i}
              image={elt.image_url}
              name={elt.name}
              slogan={elt.tagline}
              produzent={elt.contributed_by}
              id={elt._id}
              allBeers={elt}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AllBeerList;
