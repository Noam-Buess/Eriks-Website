import "./App.css";
import { Link } from "react-router-dom";

function ContactPage() {
    return (
        <>
        <header>
                <h1 className="title">Kontakt</h1>
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
                <strong>Email: </strong>
                <a href="mailto:erik.schmocker@gmail.com">erik.schmocker@gmail.com</a>
            </p>

        </div>
            
        </>
    )
} 
export default ContactPage;  