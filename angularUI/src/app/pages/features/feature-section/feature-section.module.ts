import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureSectionComponent } from './feature-section.component';



@NgModule({
  declarations: [FeatureSectionComponent],
  imports: [
    CommonModule
  ],
  exports:[
    FeatureSectionComponent
  ]
})
export class FeatureSectionModule { }
