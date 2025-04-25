import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

export const SOVA_REPEAT_BUG = "ded3520f-4264-bfed-162d-b080e2abccf9"

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1200, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 720, min: 0 },
        items: 1
    }
};

export function Agents({ Data, pagina, filtro }) {


    let listagents = Data.map((element) => element.uuid != SOVA_REPEAT_BUG
        && <div className="card-bg" key={element.uuid} style={{backgroundImage: `url("${element.background}")` }}>
            <Link to={`/agents/${element.uuid}`}>
                <img className="card-img-png" src={element.bustPortrait} alt="" loading="lazy"/>
            </Link>
        </div>
    )

    let listagentsFiltro = Data.map((element) => element.uuid != SOVA_REPEAT_BUG && filtro == element.role.displayName
        && <div className="card-bg" key={element.uuid} style={{backgroundImage: `url("${element.background}")` }}>
            <Link to={`/agents/${element.uuid}`}>
                <img className="card-img-png" src={element.bustPortrait} alt="" loading="lazy"/>
            </Link>
        </div>
    )

    const divmore = <div className="card-bg">
    <Link to="/agents"><h4>Más Agentes</h4></Link>
    </div>
    if (pagina == "Agentes") {
        return <>{filtro != undefined ? listagentsFiltro : listagents}</>
    } else {
        listagents = listagents.slice(0, 4)
        listagents.push(divmore)
        return <Carousel responsive={responsive} className={"card-container"} removeArrowOnDeviceType={["tablet", "mobile"]}>
            {listagents}

        </Carousel>
    }
}
