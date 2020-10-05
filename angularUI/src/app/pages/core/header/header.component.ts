import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menus =[
    // {id:'#place-request-wrap', feature: "Place Request"},
    {id:'#features-wrap', feature: "Features"},
    {id:'#services-wrap', feature: "Services"},
    {id:'#faqs-wrap', feature: "Faqs"},
    {id:'#contacts-wrap', feature: "Contact Us"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
