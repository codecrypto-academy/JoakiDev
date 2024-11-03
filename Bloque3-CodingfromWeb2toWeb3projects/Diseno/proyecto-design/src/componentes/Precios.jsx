import datos from "../datos.json";

function CardPrecio({data}) {
    return <div className="card w-100 m-1">
        <div className="card-header">
            <h4 className="text-center">{data.titulo}</h4>
        </div>
        <div className="card-body">
            <ul className="list-unstyled">
                {
                    data.features.map((item, index) => 
                        <li key={index} className="mt-1">{item}</li>
                    )
                }
            </ul>
            <button className="btn btn-lg btn-outline-primary w-100">{data.texto}</button>
        </div>
    </div>
}

export function Precios() {
    return <div className="my-4 d-flex justify-content-between">
        {
            datos.precios.map((item, index) =>    
                <CardPrecio key={index} data={item}></CardPrecio>
            )
        }
    </div>
}