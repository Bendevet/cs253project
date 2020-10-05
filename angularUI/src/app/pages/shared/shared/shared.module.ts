import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../container/container.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports:[
    ContainerComponent,
    MatCardModule
  ]
})
export class SharedModule { }
