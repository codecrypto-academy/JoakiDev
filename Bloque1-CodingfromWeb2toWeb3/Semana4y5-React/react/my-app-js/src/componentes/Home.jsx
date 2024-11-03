import { Outlet, Link } from "react-router-dom"
import { Header } from "./Header"

export function Home() {
    return <div>
        <Header/>
        <Outlet/>
    </div>
}