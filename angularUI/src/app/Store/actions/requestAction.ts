import {Action} from "@ngrx/store"
import { ActionTypes } from './actionTypes';
import { Order } from 'src/app/Models/order';
import { OrderResponse } from 'src/app/Models/OrderResponse/orderesponse';



export class RequestActionParent implements Action{
    type: any;
    data: any;

}

export class RequestAction extends RequestActionParent{
    readonly type = ActionTypes.Request
    constructor(public data: Order){
        super()
    }
}

export class TrackOrderAction extends RequestActionParent{
    readonly type = ActionTypes.track
    constructor(public data: string){
        super()
    }
}

export class TrackOrderActionSuccess extends RequestActionParent{
    readonly type = ActionTypes.trackSuccess
    constructor(public data:OrderResponse){
        super()
    }
}

export class Loading extends RequestActionParent{
    readonly type = ActionTypes.loading
    constructor(public isLoading: boolean){
        super();
        console.log("This was called boolean");
    }
}