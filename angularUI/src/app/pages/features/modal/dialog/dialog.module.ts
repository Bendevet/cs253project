import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { StarModule } from '../../star/star/star.module';
import { StarComponent } from '../../star/star/star.component';



@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    StarModule
  ],
})
export class DialogModule { }
