import { Link } from "react-router-dom";
import SecondPic from "../img/proriat-hospitality-flENqflm6xU-unsplash.png";
import FirstPic from "../img/christin-hume-08tX2fsuSLg-unsplash.png";

const Home = (props) => {
  return (
    <section className="HomeSection">
      <div className="Block">
        <Link to={"/allbeers"}>
          <img src={FirstPic} alt="FirstPic" className="image" />
          <h1>All Beers</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a,
          eleifend vitae varius venenatis.
        </p>
      </div>
      <div className="Block">
        <Link to={`/random`}>
          <img src={SecondPic} alt="SecondPic" className="image" />
          <h1>Random Beer</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a,
          eleifend vitae varius venenatis.
        </p>
      </div>
    </section>
  );
};

export default Home;
