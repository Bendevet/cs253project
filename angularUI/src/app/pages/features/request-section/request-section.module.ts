import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestSectionComponent } from './request-section.component';



@NgModule({
  declarations: [RequestSectionComponent],
  imports: [
    CommonModule
  ],
  exports:[
    RequestSectionComponent
  ]
})
export class RequestSectionModule { }
