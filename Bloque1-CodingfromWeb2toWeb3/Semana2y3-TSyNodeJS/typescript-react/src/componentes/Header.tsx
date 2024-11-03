import { VARIABLE } from "./Constantes"

interface IHeaderProps {
    nombre:string
    dir:string
}

export default function Header(props:IHeaderProps){
    return <>
        <h1>{props.nombre}</h1>
        <h2>{VARIABLE}</h2>
        <h1>{props.dir}</h1>
    </>
}