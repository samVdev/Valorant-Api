import { useEffect, useState } from "react";
import { ContainerCard } from "../componentes/containerCard";
import { Footer } from "../componentes/footer";
import { Header } from "../componentes/header";

function filtroM(URL, Setdata) {
    let Datos = []
    fetch(URL)
        .then(res => res.json())
        .then(res => {
            const respuesta = res.data
            respuesta.forEach(element => {
                if (element.tacticalDescription != null && !Datos.includes(element.tacticalDescription)) {
                    Datos.push(element.tacticalDescription)
                }
            });
            Setdata(Datos)
        })
}

function CambioSite(target, SetSite) {
    const role = target.options[target.selectedIndex].value
    SetSite(role == "Seleccionar" ? undefined : role)
}

export default function MapasWeb() {
    const sec_pag = "Mapas"
    const URL = "https://valorant-api.com/v1/maps/"
    const [Sites, SetSites] = useState([])
    let [Site, SetSite] = useState(undefined)

    useEffect(() => {
        filtroM(URL, SetSites)
    }, []);


    return <>
        <Header />

        <section className="encabezado-agentes">
            <div id="FiltroDiv">
            <label>Filtrar:</label>
                <select onChange={(e) => CambioSite(e.target, SetSite)} className="selectFilter">
                    <option>Seleccionar</option>
                    {Sites.map((element, index) => <><option id={index}>{element}</option></>)
                    }
                </select>
            </div>
            <ContainerCard seccion={sec_pag} page={sec_pag} filter={Site} />
        </section>
        <Footer />
    </>
}