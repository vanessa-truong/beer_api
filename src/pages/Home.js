import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import SecondPic from "../img/proriat-hospitality-flENqflm6xU-unsplash.png";
import FirstPic from "../img/christin-hume-08tX2fsuSLg-unsplash.png";

const Home = (props) => {
    return ( 
        <section className="HomeSection">
            <div>
                <Link to={'/allbeers'}>
                <img src={FirstPic} alt="FirstPic" />
                <h1>All Beer</h1>
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis.</p>
            </div>
            <div>
                <Link to={`/random`}>
                <img src={SecondPic} alt="SecondPic" />
                <h1>Random Beer</h1>
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis.</p>
            </div>
        </section>
    );
}

export default Home;