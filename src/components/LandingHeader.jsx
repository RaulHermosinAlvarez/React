export default function LandingHeader({profession}) {
    return(
        <header className="header">
            <h1>{profession.name}</h1>
            <p>{profession.title}</p>
        </header>
    )

}