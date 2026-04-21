import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-adv',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-adv.html',
  styleUrl: './reactive-form-adv.css',
})
export class ReactiveFormAdv {

  userForm! : FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.email, Validators.required])
    })
      
      this.userForm = this.formBuilder.group({
        name: [[Validators.required]],
        email: ['',[Validators.email, Validators.required]],
        city:[''],
        isDocumented: [false],
        documentName: [''],
        documentNo: []
      })

      this.userForm.controls['isDocumented'].valueChanges.subscribe({
        next:(isChecked:boolean)=>{
          debugger;
          if(isChecked == true){
            this.userForm.controls['documentName'].enable();
            this.userForm.controls['documentNo'].enable();
          }else
          {
            this.userForm.controls['documentName'].disable();
            this.userForm.controls['documentNo'].disable();
            this.userForm.controls['documentName'].setValue("")
            this.userForm.controls['documentNo'].setValue("")
          }
        }
      })
  }
}
//write various scenarioes like this