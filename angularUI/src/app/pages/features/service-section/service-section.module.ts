import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceSectionComponent } from './service-section.component';



@NgModule({
  declarations: [ServiceSectionComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ServiceSectionComponent
  ]
})
export class ServiceSectionModule { }
