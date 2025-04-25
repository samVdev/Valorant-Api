import { useEffect, useState } from "react";
import { Footer } from "../componentes/footer";
import { Header } from "../componentes/header";
import { useParams } from "react-router-dom";
import { Agents, SOVA_REPEAT_BUG } from "../componentes/agents";
import { MapsCard } from "../componentes/mapas";
import { TextoEstado } from "../componentes/DivTexto";


const URL = `https://valorant-api.com/v1/`

function Buscando(endpoint, SetData, busqueda, SetEstado) {
    let longitud = busqueda.length;
    console.log(busqueda)
    fetch(endpoint)
        .then(res => res.json())
        .then(res => {
            let data = res.data
            data.forEach(element => {
                if (element.uuid != SOVA_REPEAT_BUG) {
                    let personaje = element.displayName;
                    let percortado = personaje.substring(0, longitud)

                    if (busqueda.length <= personaje.length) {
                        if (busqueda.toLowerCase() === percortado.toLowerCase()) {
                            SetEstado((prevState)=> ({...prevState, resultados: true}))
                            SetData(prevState => [...prevState, element]) // asi se añade un nuevo elemento a un useState con un array
                        }
                    }
                }
            });
        })
        SetEstado((prevState)=> ({...prevState, busqueda: true}))
}

export default function Busqueda() {

    const [Agentes, SetAgente] = useState([])

    const [Mapas, SetMapas] = useState([])

    const [Estado, SetEstado] = useState({
        resultados: false,
        busqueda: false
    })

    const search = useParams()
    // Que hace? el useParams() usa lo que este después del ":", en el url, 
    // como parámetro y lo envía al componente. Entonces podemos asignárselo a una constante que luego usarlo.

    useEffect(() => {
        Buscando(URL + "agents/", SetAgente, search.busqueda, SetEstado)
        Buscando(URL + "maps/", SetMapas, search.busqueda, SetEstado)
    },[])


    return <>
        <Header />
        <section className="encabezado-agentes" id="Resultados">

            {Agentes.length > 0
                && <>
                    <TextoEstado clases={"cnt-sec cnt-sex-left"} page={"resultados"} texto={"Agentes:"}/>
                    <div className="carrusel-cont-r">
                        <Agents Data={Agentes} pagina="Agentes" />
                    </div>
                </>
            }

            {Mapas.length > 0
                && <>
                    <TextoEstado clases={"cnt-sec cnt-sex-left"} page={"resultados"} texto={"Mapas:"}/>
                    <div className="carrusel-cont-r">
                        <MapsCard Data={Mapas} pagina="Mapas" />
                    </div>
                </>
            }

            {!Estado.resultados && Estado.busqueda
                ? <TextoEstado clases={"cnt-sec cnt-sex-left"} page={"resultados"} texto={"No hay resultados"}/>
                : <></>
            }
        </section>
        <Footer />
    </>
}
