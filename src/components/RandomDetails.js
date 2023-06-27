import { Links } from "react-router-dom";


const RandomDetails = (props) => {
console.log(props)
    return ( 
        <div>
            <img src={props.image} alt="#" />
            <h1>{props.name}</h1>
            <p>{props.firstBrew}</p>
        </div>
    );
}

export default RandomDetails;