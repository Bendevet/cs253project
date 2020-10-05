import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogData } from "src/app/Models/DialogModels/dialogdata";
import { Store } from "@ngrx/store";
import { OrderResponse } from "src/app/Models/OrderResponse/orderesponse";
import { OrderResponseItem } from "src/app/Models/OrderResponse/orderResponseItem";
import { Observable, of } from "rxjs";
import { TrackOrderAction } from 'src/app/Store/actions/requestAction';

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"],
})
export class DialogComponent implements OnInit {
  item: OrderResponseItem;
  isLoading: boolean = true;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private store: Store<{ trackOrder: OrderResponse }>
  ) {
    this.store.select("trackOrder").subscribe((res) => {
      this.item = res.item;
      this.isLoading =  res.isLoading;
    });
  }

  ngOnInit(): void {
    this.fetchOrder(this.data.orderId);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  private fetchOrder(orderId: string) {
    this.store.dispatch(new TrackOrderAction(orderId));
  }
}
