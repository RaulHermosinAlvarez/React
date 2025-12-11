export default function NewsletterInfoPage({ goToLanding }) {
  return (
    <main className="newsletter-container">
      <h1>Ejemplos de Newsletter</h1>

      <section className="newsletter-card">
        <h2>¡Se avecina un ovni!</h2>

        <img
          src="./public/images/ovni.jpg"
          alt="ovni"
          className="newsletter-image"
        />

        <p>
          ¿Habéis visto cómo evoluciona la nueva IA de OpenAI? <br />
          Gracias al nuevo motor de Sora, ¡la IA es capaz de crear imágenes mucho más realistas!
        </p>
      </section>

      <button onClick={goToLanding} className="back-btn">
        Volver a inicio
      </button>
    </main>
  );
}
