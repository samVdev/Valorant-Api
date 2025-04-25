import Carousel from "react-multi-carousel"
import { Link } from "react-router-dom";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
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

export function MapsCard({ Data, pagina, filtro}) {

    let listmapas = Data.map((element) =>
        <div className="card-maps-mode" key={element.uuid}  style={{backgroundImage: `url("${element.splash}")` }}>
            <h4 className="card-maps-mode-name" >{element.displayName}</h4>
        </div>
    )

    let listmapasfiltrado = Data.map((element) => element.tacticalDescription == filtro
       && <div className="card-maps-mode" key={element.uuid} style={{backgroundImage: `url("${element.splash}")`}}>
       <h4 className="card-maps-mode-name" >{element.displayName}</h4>
   </div>
    )

    const divmore = <div className="card-maps-mode">
        <Link to="/Mapas"><h4 className="card-maps-mode-name" >Más mapas</h4></Link>
    </div>

    if (pagina == "Mapas") {
        return <>
            <div className="card-container-maps">
                {filtro != undefined ? listmapasfiltrado :listmapas}
            </div>
        </>
    }
    else {
        listmapas = listmapas.slice(0, 3)
        listmapas.push(divmore)
        return <Carousel responsive={responsive} className={"card-container"} removeArrowOnDeviceType={["tablet", "mobile"]}>
            {listmapas}
        </Carousel>
    }


}
