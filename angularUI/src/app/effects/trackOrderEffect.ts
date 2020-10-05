import { Injectable } from "@angular/core";
import { HttpservicesService } from "../services/httpservices.service";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { ActionTypes } from "../Store/actions/actionTypes";
import { mergeMap, map, catchError, tap, delay } from "rxjs/operators";
import {
  TrackOrderActionSuccess,
  Loading,
  TrackOrderAction,
} from "../Store/actions/requestAction";
import { EMPTY } from "rxjs";

@Injectable()
export class TrackOrderEffect {
  @Effect()
  trackOrder$ = this.action$.pipe(
    ofType<TrackOrderAction>(ActionTypes.track),
    mergeMap((data) =>
      this.httpService.trackOrder(data.data).pipe(
        delay(1000),
        map(
          (order) => new TrackOrderActionSuccess(order),
          catchError((err) => EMPTY)
        )
      )
    )
  );

  constructor(
    private httpService: HttpservicesService,
    private action$: Actions
  ) {}
}
