import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

import { DialogDataExampleDialog } from './dialog';

@Component({
  selector: 'app-home',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  formData! : FormGroup;
  isLoading : Boolean = false;
  // dialog = inject(MatDialog);

  constructor(public formBuilder: FormBuilder,public dialog: MatDialog) {
    
  }

  ngOnInit() {
    this.formData = this.formBuilder.group({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });
  }
  onSubmit(){
    this.openDialog();
    if(this.formData.valid){
      console.log(this.formData.controls['email'].value, this.formData.controls['password'].value);
    } else{
      
    }   
  }
   openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data:{
        email: this.formData.controls['email'].value,
        password: this.formData.controls['password'].value,
        formData: this.formData.value,
      },
      disableClose: false,
    });
  }
}
