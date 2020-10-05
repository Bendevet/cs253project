import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatwedoSectionComponent } from './whatwedo-section.component';



@NgModule({
  declarations: [WhatwedoSectionComponent],
  imports: [
    CommonModule
  ],
  exports:[
    WhatwedoSectionComponent
  ]
})
export class WhatwedoSectionModule { }
