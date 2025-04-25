export function Load({text}) {
    return <>
        <section id="cargando">
            <h3>{"Cargando " + text}</h3>
            <div className="rueda"></div>
        </section>         
    </>
}
