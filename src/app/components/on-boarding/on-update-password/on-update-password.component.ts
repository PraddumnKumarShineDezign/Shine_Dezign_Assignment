import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-on-update-password',
  templateUrl: './on-update-password.component.html',
  styleUrls: ['./on-update-password.component.scss']
})
export class OnUpdatePasswordComponent {

  constructor(private fb: FormBuilder, private _apiService:ApiService) {}

  onUpdateForgetPasswordForm = this.fb.group({
    otp: ['',
     [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6),
     Validators.pattern(/^[0-9]*$/)]
    ],
    newPassword: ['',
    [
     Validators.required,
     Validators.minLength(8),
     Validators.maxLength(20),
     Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/)]
   ],
   confirmPassword: ['',
   [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(20),
    Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/)]
  ],
  });
  //get validation all form feilds
  get validateFiled(){
    return this.onUpdateForgetPasswordForm.controls;
  }

   //submit funtion
   onSubmit() {
    this.onUpdateForgetPasswordForm.markAllAsTouched();
   if (this.onUpdateForgetPasswordForm.valid) {
    console.log("mobi",this.onUpdateForgetPasswordForm.value)
    console.log("forPassword Onsubmit")
    this._apiService.updateForgetPass(this.onUpdateForgetPasswordForm.value).subscribe((result:any)=>{
      console.log("api result",result);
      // this.router.navigate(['/emailverify'])
      // this.ProductAddForm.reset();
    });
    
     
   } 
}
}
