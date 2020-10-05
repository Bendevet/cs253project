import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Models/order';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('700ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('700ms', style({ opacity: 0 }))
      ])
    ]),
    
  ]
})
export class LandingComponent implements OnInit {

  isShow: boolean;

  faqs = [
    {id: 1, question:'How does it work', answer: "Once your account is created, you specify your pick-up and delivery addresses as well as various options such as the type of delivery and the system proposes you a delivery price"},
    {id: 2, question:'Who uses it', answer: "Quicky is focused on B2B customers, but our service is open to anyone who downloads the app."},
    {id: 3, question:'Where does it operate', answer: "Quicky currently operates in the Lagos Metropolitan Area."},
    {id: 4, question:'How long does delivery takes', answer: "We commit to deliver inside the Lagos LMA within 2 hours from confirmation of the order."},
  ];

  

  constructor() { 
    
  }

  ngOnInit(): void {
  }


  show(){
      this.isShow = !this.isShow;
  }

  

}
