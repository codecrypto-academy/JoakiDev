import datos from "../datos.json";

export function Carrusel() {
    return <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
            {
                datos.carrusel.map((item, index) =>
                    <div key={index} className={"carousel-item " + (index == 0 ? "active" : "")} >
                        <div className="d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                            <h1 className="bg-secondary text-primary p-3">{item.texto}</h1>
                        </div>
                        <img src={item.url} className="d-block w-100" alt={item.alt}></img>
                    </div>
                )
            }
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
}