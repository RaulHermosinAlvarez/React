import LandingHeader from "./LandingHeader";
import MainLanding from "./MainLanding";

export default function LandingPage({ profession, goToProjects }) {
  return (
    <div>
      <LandingHeader profession={profession} />
      <MainLanding profession={profession} />

      <section style={{ textAlign: "center", margin: "20px" }}>
        <button onClick={goToProjects}>Ver proyectos</button>
      </section>
    </div>
  );
}
