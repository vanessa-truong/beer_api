import { useEffect, useState } from "react";
import NavBar from "./NavBar";



const RandomList = () => {

    const [beer, setBeer] = useState([]);

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/random/`)
        .then(res=>res.json())
        .then(json=> {
            setBeer(json);
        })
    } , [])

console.log(beer)

    return ( 
        <div>
            <img src={beer.image_url} alt="#" />
            <h1>{beer.name}</h1>
            <div className="first_brewed">
                <p>First brewed:</p>
                <p>{beer.first_brewed}</p>
                <div className="attenutation">
                    <p>Attenuation level:</p>
                <p>{beer.attenuation_level}</p>
                </div>
                <p>{beer.contributed_by}</p>
                <p>{beer.description}</p>
            </div>
            <NavBar />
        </div>
    );
}

export default RandomList;