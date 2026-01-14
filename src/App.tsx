import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import Achievements from "./Achievements";
import GiftIdeas from "./GiftIdeas";
import WorkCollegues from "./Work-Collegues";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />}  />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/gift-ideas" element={<GiftIdeas />} />
        <Route path="/work-collegues" element={<WorkCollegues />} />
      </Routes>


      <Analytics/>
    </Router>

  

  );
}

export default App;
