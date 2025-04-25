
export function TextoEstado({ texto, clases, page}) {
    return <div className={clases}>
        {page == "Inicio" && <hr className="cnt-hr"></hr>}
        <h2 className="cnt-text">{texto}</h2>
        {page != "Inicio" && <hr className="cnt-hr"></hr>}
    </div>
}