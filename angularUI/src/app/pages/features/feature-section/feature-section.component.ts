import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from 'src/app/Models/order';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-feature-section',
  templateUrl: './feature-section.component.html',
  styleUrls: ['./feature-section.component.scss']
})
export class FeatureSectionComponent implements OnInit {
  features = [
    {icon:'eva-clock-outline', feature: "On-Demand"},
    {icon:'eva-lock-outline', feature: 'Parcel Safety'},
    {icon:'eva-credit-card-outline', feature: 'Card payment'},
    {icon:'eva-car-outline', feature: 'Multivehicle'},
    {icon:'eva-file-text-outline', feature: 'Receipt'},
    {icon:'eva-shopping-bag-outline', feature: 'Delivery report'}
  ]

  orders:Observable<Order[]>;

  constructor(private store:Store<{orders:Order[]}>) { }

  ngOnInit(): void {
    this.store.pipe(
      select("orders")
    ).subscribe(val=>this.orders = of(val))
  }

}
