import { useState, useEffect } from "react";
import { getProjects } from "../services/importProjects";

export default function ProjectsPage({ goToLanding }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => getProjects(setProjects), []);

  return (
    <main className="projects-container">
      <h1>Proyectos realizados</h1>

      <div className="projects-grid">
        {projects.length > 0 ? (
          projects.map((p) => (
            <div className="project-card" key={p.id}>
              <img src={"/public/images/" + p.image} alt={p.name} />

              <div className="project-info">
                <h3>{p.name}</h3>
                <p>{p.description}</p>

                
                  <a className="btn" target="_blank">
                    Ver proyecto
                  </a>
                
              </div>
            </div>
          ))
        ) : (
          <p>Cargando proyectos...</p>
        )}
      </div>

      <button onClick={goToLanding} className="back-btn">
        Volver a inicio
      </button>
    </main>
  );
}


