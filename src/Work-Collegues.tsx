import "./App.css"
import { Link } from "react-router-dom";

function WorkCollegues() {
    return (
        <>
            <header>
                <h1 className="title">Arbeitskollegen</h1>
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
                <strong><a href="https://noambuesssteckbrief.vercel.app" className="noam">Noam Buess -- Coop</a></strong>
            </div>
        </>
    )
}
export default WorkCollegues;