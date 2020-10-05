import {createAction, props} from '@ngrx/store'
import { ActionTypes } from './actionTypes'
import { Order } from 'src/app/Models/order'

export const trackOrder = createAction(ActionTypes.track,props<{order:Order}>())
