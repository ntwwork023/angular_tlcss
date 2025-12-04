import {Component, inject, model, signal} from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog.html',
  imports: [MatDialogClose,MatDialogTitle, MatDialogContent, MatButtonModule, MatDialogActions],
})

export class DialogDataExampleProfileDialog {
  data = inject(MAT_DIALOG_DATA);
  readonly dialog = inject(MatDialog);
  readonly dialogRef = inject(MatDialogRef<DialogDataExampleProfileDialog>);
  
  ngOnInit() {
    console.log(this.data);
  }

   SendData(): void { 
   this.dialogRef.close({data: "Test Success"});
  }
}


