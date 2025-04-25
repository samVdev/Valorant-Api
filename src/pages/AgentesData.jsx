import { useEffect, useState } from "react";
import { Footer } from "../componentes/footer";
import { Header } from "../componentes/header";
import { useParams } from "react-router-dom";
import { Load } from "./load";

export default function AgentesData() {

    const [Agente, SetAgente] = useState(null)

    const uuid = useParams()
    // Que hace? el useParams() usa lo que este después del ":", en el url, 
    // como parámetro y lo envía al componente. Entonces podemos asignárselo a una constante que luego usarlo.

    const URL = `https://valorant-api.com/v1/agents/${uuid.id}`

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(res => SetAgente(res.data))
    }, []);

    return <>
        <Header />
        <section className="cont-info-agent">
            {Agente != null
                ? <>
                    <div className="img-agent-info" style={{backgroundImage: `url("${Agente.background}")` }}>
                        <img className="card-img-png" src={Agente.bustPortrait} alt="" loading="lazy"/>
                    </div>
                    <div className="info-agent">
                        <h1>{Agente.displayName}</h1>
                        <p>{Agente.description}</p>
                        <div className="info-role">
                            <img src={Agente.displayIcon} alt="" loading="lazy"></img>
                            <div >
                                <h3>{Agente.role.displayName}</h3>
                                <img src={Agente.role.displayIcon} alt="" loading="lazy"></img>
                            </div>
                        </div>
                        <h3>Habilidades:</h3>
                        <div className="info-hab">
                            {Agente.abilities.map(element => <>
                            <div>
                                <img src={element.displayIcon} alt="" loading="lazy"></img>
                                <h4>{element.displayName}</h4>
                            </div>
                            </>)}
                        </div>
                    </div>
                </>
                : <Load text= "Agente"/>
            }
        </section>
        <Footer />
    </>
}