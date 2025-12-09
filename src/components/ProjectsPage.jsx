import { useState, useEffect } from "react";
import { getProjects } from "../services/importProjects";

export default function ProjectsPage({ goToLanding }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => getProjects(setProjects), []);

  return (
    <main className="container">
      <h1>Proyectos realizados</h1>
      <ul>
        {projects.length > 0 ? (
          projects.map((p) => (
            <li key={p.id}>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
            </li>
          ))
        ) : (
          <li>Cargando proyectos...</li>
        )}
      </ul>
      <button onClick={goToLanding} style={{ marginTop: "20px" }}>
        Volver a inicio
      </button>
    </main>
  );
}

