import { useMutation } from "react-query"

export function Tx() {
    const {mutate, isLoading, isError} = useMutation(() => {
        console.log("He ejecutado la funcion")
    })
    const {mutate:m1, isLoading:isL2, isError:isE2} = useMutation(() => {
        console.log("He ejecutado la funcion 2")
    })
    const funcion3 = useMutation(() => {
        console.log("He ejecutado la funcion 3")
    })

    return <div>
        <button onClick={() => mutate()}>Llamar F1</button>
        <button onClick={() => m1()}>Llamar F2</button>
        <button onClick={() => funcion3.mutate()}>Llamar F3</button>
    </div>
}