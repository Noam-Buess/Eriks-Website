import "./App.css";
import { Link } from "react-router-dom";

function Achievements() {
    return (
        <>
        <header>
            <h1 className="title">Erfahrungen</h1>
            <div className="tabs">
                <Link to="/" className="tab1">Home</Link>
                <Link to="/achievements" className="tab2">Erfahrungen</Link>
                <Link to="/contact" className="tab3">Kontakt</Link>
                <Link to="/gift-ideas" className="tab4">Geschenkideen</Link>
                <Link to="/work-collegues" className="tab5">Arbeitskollegen</Link>
            </div>
        </header>
        <br></br>
        <div className="content">
            <p>
                Casinogewinn: 400 CHF
            </p>
            <p>
                Lehrstelle bei Coop Genossenschaft
            </p>
            <p>
                Abschluss in der Sekundarschule (Sekundar)
            </p>
            <p>
                Berufsmatura noch nicht rausgeflogen
            </p>
            <br></br>
            <p>
                weitere Erfahrungen folgen...
            </p>
        </div>
            
        </>
    )
}
export default Achievements;

