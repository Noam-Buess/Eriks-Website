import { Link } from "react-router-dom";
import "./App.css";

const HomePage: React.FC = () => {
    return (
        <>
            <header>
                <h1 className="title">Erik Schmocker</h1>
                <div className="tabs">
                    <Link to="/" className="tab">Home</Link>
                    <Link to="/achievements" className="tab">Achievements</Link>
                    <Link to="/contact" className="tab">Contact</Link>
                </div>
            </header>

            <img src="img/ErruBild.jpg" alt="Erru Bild" className="mainImage"></img>

        </>
    )
}

export default HomePage;