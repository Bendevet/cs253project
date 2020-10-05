import { Component, OnInit } from "@angular/core";
import { HttpservicesService } from "src/app/services/httpservices.service";
import { Store } from "@ngrx/store";
import { OrderResponse } from "src/app/Models/OrderResponse/orderesponse";
import { TrackOrderAction } from "src/app/Store/actions/requestAction";
import { Observable, of } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "../modal/dialog/dialog.component";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TrackOrderEffect } from "src/app/effects/trackOrderEffect";

@Component({
  selector: "app-first-section",
  templateUrl: "./first-section.component.html",
  styleUrls: ["./first-section.component.scss"],
})
export class FirstSectionComponent implements OnInit {
  trackForm = new FormGroup({
    trackNumber: new FormControl("", Validators.required),
  });

  orderResponse: OrderResponse;

  constructor(
    private httpService: HttpservicesService,
    private store: Store<{ trackOrder: OrderResponse }>,
    public dialog: MatDialog,
    private effect: TrackOrderEffect
  ) {}

  ngOnInit(): void {}

  trackOrder() {
    const dialogRef = this.dialog.open(DialogComponent, {
       width: '450px',
       height:'750px',
       data: {orderId: this.trackForm.controls.trackNumber.value}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
