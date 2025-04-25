import { useEffect, useState } from "react";
import { ContainerCard } from "../componentes/containerCard";
import { Footer } from "../componentes/footer";
import { Header } from "../componentes/header";
import { SOVA_REPEAT_BUG } from "../componentes/agents";

function filtroA(URL, Setdata) {
    let Datos = []
    fetch(URL)
        .then(res => res.json())
        .then(res => {
            const respuesta = res.data
            respuesta.forEach(element => {
                if (element.uuid != SOVA_REPEAT_BUG && !Datos.includes(element.role.displayName)) {
                    Datos.push(element.role.displayName)
                }
            });
            Setdata(Datos)
        })
}

function CambioRole(target, SetRol) {
    const role = target.options[target.selectedIndex].value
    SetRol(role == "Seleccionar" ? undefined : role)
}

export default function AgentesWeb() {
    const [Roles, SetRoles] = useState([])
    const sec_pag = "Agentes"
    let [roleSelect, SetRol] = useState(undefined)
    const URL = "https://valorant-api.com/v1/agents/"

    useEffect(() => {
        filtroA(URL, SetRoles)
    }, []);

    return <>
        <Header />
        <section className="encabezado-agentes">
            <div id="FiltroDiv">
                <label>Filtrar:</label>
                <select onChange={(e) => CambioRole(e.target, SetRol)} className="selectFilter">
                <option>Seleccionar</option>
                {Roles.map((element, index) => <><option id={index} key={index}>{element}</option></>)
                }
            </select>
            </div>
            <ContainerCard seccion={sec_pag} page={sec_pag} filter={roleSelect} />
        </section>
        <Footer />
    </>
}