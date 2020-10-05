import { Order } from "src/app/Models/order";
import { RequestActionParent } from "../actions/requestAction";
import { ActionTypes } from "../actions/actionTypes";
import { OrderResponse } from "src/app/Models/OrderResponse/orderesponse";
import { act } from "@ngrx/effects";

export const initialState: Order[] = [
  { fromName: "Ben", id: 16 },
  { id: 16, fromName: "Fasil" },
];

export const initialOrderResp: OrderResponse = {
  item: { orders: {} },
  isLoading: false
};

export function requestOrderReducer(
  state: Order[] = initialState,
  action: RequestActionParent
) {
  switch (action.type) {
    case ActionTypes.Request:
      return [...state, action.data];
    default:
      return state;
  }
}

export function trackOrderReducer(
  state: OrderResponse = initialOrderResp,
  action: RequestActionParent
) {
  switch (action.type) {
    case ActionTypes.track:
        return {...state,isLoading: true}
    case ActionTypes.trackSuccess:
      return {...state,item:action.data.item,isLoading:false};
    case ActionTypes.loading:
     return {...state,item:action.data.item}  
    default:
      return state;
  }
}
