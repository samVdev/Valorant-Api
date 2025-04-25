import { Link, useNavigate } from "react-router-dom";

export function Header() {
    let navigate = useNavigate()

    function buscando(event) {

        let ventana = window.location.pathname

        if (event.charCode == 13) {
            navigate(`/Search/${event.target.value}`);
            if (ventana.substring(0, 8) == "/Search/") {
                window.location.reload()
            }
        }
    }
    return <>
        <header>
            <Link to="/"><img src="https://www.pngall.com/wp-content/uploads/13/Valorant-Logo-PNG-Cutout.png" className="hd-img" alt="" loading="lazy"/></Link>
            <label htmlFor="check" className="chek-btn">☰</label>
            <input type="checkbox" id="check"></input>
            <nav className="hd-nav">
                <Link to="/">Inicio</Link>
                <Link to="/agents">Agentes</Link>
                <Link to="/Mapas">Mapas</Link>
                <Link to="https://valorant-api.com/" target="_blank" rel="noreferrer">Api</Link>
                <div id="ctn-buscador">
                    <label htmlFor="Buscar" className="chek-btn-search"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                    </label>
                    <input type="checkbox" id="Buscar"></input>
                    <input type="text" id="Buscador" onKeyPress={(e) => buscando(e)} />
                </div>
            </nav>
        </header>

    </>
}