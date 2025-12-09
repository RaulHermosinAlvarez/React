export default function NewsletterInfoPage({ goToLanding }) {
    return (
        <main className="container">
            <h1>Newsletter Mensual</h1>
            <section style={{ margin: "20px 0"}}>
                <p>
                    Suscribiéndote a nuestro newsletter mensual, recibirás contenido exclusivo sobre administración de sistemas, tips de seguridad y ejemplos prácticos.
                
                </p>
                <p>Por ejemplo, cada mes compartimos:</p>
                <ul>
                    <li>La base de un programa o script para automatizar tareas en servidores</li>
                    <li>Guías paso a paso para configurar redes y servicios de forma segura.</li>
                    <li>Actualizaciones sobre nuevas herramientas y buenas prácticas en administración de sistemas</li>
                </ul>
                <p>
                    Mantente actualizado y mejora tus habilidades cada mes directamente en tu correo.
                </p>
            </section>

            <button onClick={goToLanding} style={{marginTop: "20px"}}>Volver a inicio</button>
        </main>
    );
}