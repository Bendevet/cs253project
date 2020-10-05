import {createReducer} from "@ngrx/store";
import {trackOrder} from "../actions/actions";
import { on } from 'process';
import { stat } from 'fs';
import { Order } from 'src/app/Models/order';
import { ActionTypes } from '../actions/actionTypes';

export const initState:Order = {};


// export const trackOrderReducer = createReducer(
//     initState,
//     on(trackOrder, (state,{order}) => ()),
//     )

   
      