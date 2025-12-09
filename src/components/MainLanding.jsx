export default function MainLanding({profession}) {
return(
    <main className="container">
        <section className="presentacion">
            <h2>Sobre mí</h2>
            <p>
                Soy administrador de sistemas con experiencia en la gestión de servidores
                Linux y Windows, redes y seguridad informática. Me especializo en mantener
                infraestructuras estables, seguras y eficientes.
            </p>
        </section>


        <section className="servicios">
            <h2>Servicios</h2>
            <ul>
                {profession.services && profession.services.length > 0 ? (
                    profession.services.map((service, index) => (
                        <li key={index}>{service}</li>
            ))
          ) : (
            <li>Cargando servicios...</li>
          )}
            </ul>
        </section>

    </main>
)
}