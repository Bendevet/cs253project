import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.scss']
})
export class FaqSectionComponent implements OnInit {
  testimonies = [
    {name:'Bernard Superman', rank: "developer"},
    {name:'Bernard Batman', rank: "Fisherman"},
    {name:'Bernard BatGirl', rank: "Banker"},
    {name:'Bernard Robin', rank: "Engineer"},
    {name:'Bernard Flash', rank: "developer"},
    {name:'Bernard Disk', rank: "Mechanical"}
  ];

  faqs = [
    {id: 1, question:'How does it work', answer: "Once your account is created, you specify your pick-up and delivery addresses as well as various options such as the type of delivery and the system proposes you a delivery price"},
    {id: 2, question:'Who uses it', answer: "Quicky is focused on B2B customers, but our service is open to anyone who downloads the app."},
    {id: 3, question:'Where does it operate', answer: "Quicky currently operates in the Lagos Metropolitan Area."},
    {id: 4, question:'How long does delivery takes', answer: "We commit to deliver inside the Lagos LMA within 2 hours from confirmation of the order."},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
