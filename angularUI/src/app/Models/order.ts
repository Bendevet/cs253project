import { Driver } from './driver';

export interface Order{
    fromAddress?:String,
    fromName?:string,
    fromPhone?: string,
    toName?: string
    toPhone?: string,
    toAddress?:string,
    ordersNumber?: string,
    orderStatus?: string
    id?:Number
    priority?: boolean
    instantPayment?: boolean,
    driver?: Driver
    status?: boolean,
    amount?: string
}