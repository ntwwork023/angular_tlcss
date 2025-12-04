import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogDataExampleProfileDialog } from './dialog';

@Component({
  selector: 'app-profile',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './profile.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Profile { 
  formProfile! : FormGroup;
  isLoading : Boolean = false;
  constructor(public formBuilder: FormBuilder,private dialog: MatDialog) {
    
  }

  ngOnInit() {
    this.formProfile = this.formBuilder.group({
      username: new FormControl('',[Validators.required]),
      about: new FormControl(''),
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      region: new FormControl('', [Validators.required]),
      pcode: new FormControl('', [Validators.required]),
      comments: new FormControl(''),
      candidates: new FormControl(''),
      offers: new FormControl(''),
      peverything: new FormControl(''),
      pemail: new FormControl(''),
      pnothing: new FormControl('')
  });
}
  onSubmit(){
    this.openDialog();
    if(this.formProfile.valid){
      console.log(this.formProfile.controls['username'].value);
    } else{
      
    }   
  }
  
  openDialog() {
     const dialogRef = this.dialog.open(DialogDataExampleProfileDialog, {
        data:{
          formProfile: this.formProfile.value,
        },
        disableClose: false,
        
      });
      dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        console.log(`Dialog result: ${result.data}`);
      }
    });
    }
}
