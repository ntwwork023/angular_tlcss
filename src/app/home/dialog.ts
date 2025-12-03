import {Component, inject} from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog.html',
  imports: [MatDialogClose,MatDialogTitle, MatDialogContent, MatButtonModule, MatDialogActions],
})

export class DialogDataExampleDialog {
  data = inject(MAT_DIALOG_DATA);
  ngOnInit() {
    console.log(this.data);
  }
}

