import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-section',
  templateUrl: './service-section.component.html',
  styleUrls: ['./service-section.component.scss']
})
export class ServiceSectionComponent implements OnInit {
  services = [
    {asset:'../../../assets/images/parcels.png', service: "Parcels Delivery"},
    {asset:'../../../assets/images/groceries.png', service: "Groceries Delivery"},
    {asset:'../../../assets/images/restaurants.png', service: "Food Delivery"},
    {asset:'../../../assets/images/pharmacies.png', service: "Drug Delivery"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
