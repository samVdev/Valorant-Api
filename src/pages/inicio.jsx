
import { Link } from "react-router-dom";
import { ContainerCard } from "../componentes/containerCard";
import { Footer } from "../componentes/footer";
import { Header } from "../componentes/header";
export default function Inicio() {
    return <>
        <Header />
        <section id="encabezado">
        <img src='valo.png' className="en-img" alt="" loading="lazy"/>
            <div id='en-texto'>
                <h1 className="en-titulo">Valorant</h1>
                <p className="en-descrip">Combina tu estilo y experiencia en un escenario global y competitivo. Tienes 13 rondas para atacar y defender tu lado con armas precisas y habilidades tácticas. </p>
                <Link className="hd-btn" to="https://playvalorant.com/es-mx/" target="_blank" rel="noreferrer">Riot Games</Link>
            </div>
        </section>
        
        <div id="ContenedorApi">
            
            <ContainerCard seccion = "Agentes" page="Inicio"/>
            <ContainerCard seccion = "Mapas" page="Inicio"/> 
        </div>
        <Footer/>
    </>
}
