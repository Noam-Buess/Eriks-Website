import { Link } from "react-router-dom";
import "./App.css";

function HomePage() {
    return (
        <>
            <header>
                <h1 className="title">Erik Schmocker</h1>
                <div className="tabs">
                    <Link to="/" className="tab1">Home</Link>
                    <Link to="/achievements" className="tab2">Erfahrungen</Link>
                    <Link to="/contact" className="tab3">Kontakt</Link>
                    <Link to="/gift-ideas" className="tab4">Geschenkideen</Link>
                    <Link to="/work-collegues" className="tab5">Arbeitskollegen</Link>
                </div>
            </header>

            <img src="/img/ErruBild.jpg" alt="Erru Bild" className="mainImage"/>
        </>
    );
}

export default HomePage;
