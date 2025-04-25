import { Link } from "react-router-dom";

export function Footer() {
    return <footer>
        <ul className="list-inline">
            <Link to="/">Inicio</Link>
            <Link to="/agents">Agentes</Link>
            <Link to="/Mapas">Mapas</Link>
            <Link to="https://playvalorant.com/es-mx/">Riot Games</Link>
        </ul>
        <p className="copyright">Company Name © 2018</p>
    </footer>
}