export interface IPersona {
    nif:number,
    nombre:string
}

export interface IOrder {
    fecha:Date
    orderId:number
    customerId:number
    details: IOrderDetails[]
}

export interface IOrderDetails {
    orderId:number
    customerId:number
    quantity:number
    price:number
}