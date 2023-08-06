import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const AllBeerItem = (props) => {
  return (
    <div className="allBeerWholeBlock">
      <div className="allbeerFlexBlock">
        <img src={props.image} alt="image" className="allbeerImg" />
      </div>
      <div className="allBeerListText">
        <h1>{props.name}</h1>
        <h3 className="slogan">{props.slogan}</h3>
        <p className="created_by">Created by: {props.produzent}</p>
        <Link
          className="details"
          to={`/allbeers/${props.id}`}
          state={props.allBeers}
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default AllBeerItem;
