import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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
  formData! : FormGroup;
  isLoading : Boolean = false;
  constructor(public formBuilder: FormBuilder) {
    
  }

  ngOnInit() {
    this.formData = this.formBuilder.group({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });
  }
  onSubmit(){
    console.log(this.formData.value);
    
  }
}
