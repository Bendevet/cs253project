import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  @Input() star:number = 0;

  constructor() {
   }

  ngOnInit(): void {
    console.log(this.star)
  }

}
