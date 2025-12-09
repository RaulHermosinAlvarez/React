import {useState, useEffect} from 'react';
import { getProfession } from './services/importInformation';
import LandingPage from './components/LandingPage2';
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";
import "./App.css";
import NewsletterInfoPage from './components/NewsletterInfoPage';

export default function App() {
    const [profession, setProfession] = useState({})
    const [page, setPage] = useState("landing");
    useEffect(() => getProfession(setProfession), [])

    return (
    <div>
      {/* Navegación */}
      <nav style={{ padding: "10px", textAlign: "center" }}>
        <button onClick={() => setPage("landing")}>Inicio</button>
        <button onClick={() => setPage("projects")}>Proyectos</button>
        <button onClick={() => setPage("contact")}>Contacte</button>
        <button onClick={() => setPage("newsletterinfo")}>Newsletter</button>
      </nav>

      {/* Contenido según página */}
      {page === "landing" && <LandingPage profession={profession} goToProjects={() => setPage("projects")} />}
      {page === "projects" && <ProjectsPage goToLanding={() => setPage("landing")} />}
      {page === "contact" && <ContactPage goToLanding={() => setPage("landing")} />}
      {page === "newsletterinfo" && <NewsletterInfoPage goToLanding={() => setPage("landing")} />}
    </div>
    );
}