import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

// Objeto para trabajar con Metamask
const { ethereum } = window

export function Balance() {
    const { register, handleSubmit } = useForm()
    // Estados para guardar la información que al principio estarán nulos, pero las funciones
    // "set" (setCuenta, setBalance) se usarán para darles valor
    const [cuenta, setCuenta] = useState(null)
    const [balance, setBalance] = useState(null)
    
    const [resultado, setResultado] = useState(null)

    // useEffect: mecanismo que ejecuta código según las dependencias que aparezcan en el array.
    // Si el array está vacío, solo se ejecutará una vez
    useEffect(() => {
        // Llamada al Metamask para obtener las cuentas
        ethereum && ethereum.request({method:'eth_requestAccounts'}).then(cuenta => {
            // Establecemos la cuenta con la función set
            setCuenta(cuenta[0])
            // Si se cambia de cuenta, establecemos la nueva cuenta con la función set
            // Ethereum detecta si se cambia la cuenta conectada en Metamask con 'accountsChanged'
            ethereum.on('accountsChanged', (i) => {
                setCuenta(i[0])
            })
        })
    // Este use Effect solo se ejecuta una vez por tener este array vacío
    },[])

    // Este useEffect se ejecutará cada vez que cambie la cuenta, ya que aparece como dependencia en su array
    useEffect(() => {
        if (cuenta) {
            const provider = new ethers.BrowserProvider(ethereum)
            provider.getBalance(cuenta).then(balance => {
                console.log(ethers.formatEther(balance))
                setBalance(ethers.formatEther(balance))
            })
        }
    }, [cuenta])

    async function submit(data) {
        // Inicializar para borrar mensajes anteriores y que no se acumulen
        setResultado(null)
        const parametros = {
            from: cuenta,
            to: data.address,
            value: ethers.formatEther(data.amount)
        }
        
        try {
            const txHash = await ethereum.request({
                method: 'eth_sendTransaction', 
                params: [parametros]
            })
            setResultado(txHash)
        } catch (error) {

        }
    }

    if(!ethereum){
        return <div>No hay metamask</div>
    }

    return (
        <div>
            <p>Cuenta: { cuenta ? cuenta : 'Cargando...' }</p>
            <p>Saldo: { balance ? balance : 'Cargando...' }</p>
            <form className="form-inline" onSubmit={handleSubmit(submit)}>
                <div className="form-group mb-3">
                    <label htmlFor="address">Address</label>
                    <input id="address" className="form-control" {...register("address")}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="amount">Amount</label>
                    <input id="amount" className="form-control" {...register("amount")}/>
                </div>
                <button type="submit" className="btn btn-primary mb-3">Send</button>
            </form>
            {resultado && <div className="alert alert-info m-3">{resultado}</div>}
        </div>
    )
}