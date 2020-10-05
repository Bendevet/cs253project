import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from 'src/app/Models/order';
import { Store, select } from '@ngrx/store';
import { RequestAction } from 'src/app/Store/actions/requestAction';
import { ActionTypes } from 'src/app/Store/actions/actionTypes';


@Component({
  selector: 'app-request-section',
  templateUrl: './request-section.component.html',
  styleUrls: ['./request-section.component.scss']
})
export class RequestSectionComponent implements OnInit {

  orders:Observable<Order[]>;
  constructor(private store:Store<{orders:Order[]}>) {

   }

  ngOnInit(): void {
    this.store.pipe(
      select('orders')
    ).subscribe(val=>{
      this.orders = of(val);
    });
  }

  addToState():void{}

}
