import {MapsCard } from "./mapas";
import { useEffect, useState } from "react"
import { Agents } from "./agents"
import { TextoEstado } from "./DivTexto";

async function Llamar(endpoint, SetData) {
    const res = await fetch("https://valorant-api.com/v1/" + endpoint + "/")
    const datas = await res.json()
    SetData(datas.data)
}

export function ContainerCard({ seccion, page, filter}) {
    const [Data, SetData] = useState([])

    useEffect(() => {
        Llamar(seccion == "Agentes" ? "agents" : "maps", SetData)
    }, []);

    return <>
        <div className="container-card">
            <TextoEstado clases={seccion != "Mapas" ? "cnt-sec" : "cnt-sec cnt-sex-left"} page={page} texto={seccion}/>
            <div id={seccion == "Mapas" && "mapas"} className={seccion != "Mapas" ? "carrusel-cont" : "carrusel-cont-r"}>
                {seccion == "Agentes" && <Agents Data={Data} pagina={page} filtro={filter}/>}
                {seccion == "Mapas" && <MapsCard Data={Data} pagina={page} filtro={filter}/>}
            </div>
        </div>
    </>
}