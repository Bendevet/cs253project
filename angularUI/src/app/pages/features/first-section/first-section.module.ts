import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstSectionComponent } from './first-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FirstSectionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    FirstSectionComponent
  ]
})
export class FirstSectionModule { }
