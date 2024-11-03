import { useQuery } from "react-query"


export function Lista() {

    // En vez de declarar un objeto "query", se pueden declarar solo las propiedades que se necesiten
    const {data, isLoading, isError} = useQuery(["query1"], () => {
        return ["juan", "pedro"]
    })

    if (isLoading) {
        return <div>Cargando...</div>
    }

    if (isError) {
        return <div>Error</div>
    }

    return <p>
        <ul>
            {
                data.map((item, index) => 
                    <li key={index}>{item}</li>
                )
            }
        </ul>
    </p>
}