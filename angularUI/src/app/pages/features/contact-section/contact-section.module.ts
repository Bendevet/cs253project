import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactSectionComponent } from './contact-section.component';



@NgModule({
  declarations: [ContactSectionComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ContactSectionComponent
  ]
})
export class ContactSectionModule { }
