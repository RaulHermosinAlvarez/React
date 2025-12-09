export function getProjects(setProjects) {
  fetch("/data/proyectos.json")
    .then((r) => r.json())
    .then((data) => setProjects(data))
    .catch((error) => console.error("Error cargando proyectos:", error));
}
