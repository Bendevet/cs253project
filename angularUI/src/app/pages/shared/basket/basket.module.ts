import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BasketComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[
    BasketComponent
  ]
})
export class BasketModule { }
