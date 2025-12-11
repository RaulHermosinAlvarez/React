export default function LandingHeader({ profession }) {
  return (
    <header className="landing-header">
      <img
        src="./public/images/patricio.jpg"
        alt="Foto de perfil"
        className="profile-image"
      />

      <div className="header-text">
        <h1>{profession.name}</h1>
        <p>{profession.title}</p>
      </div>
    </header>
  );
}
