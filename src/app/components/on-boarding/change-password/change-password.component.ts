import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

  constructor(private fb: FormBuilder, private _apiService:ApiService) {}

  changePasswordForm = this.fb.group({
    currentPassword: ['',
     [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
      Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/)]
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
    return this.changePasswordForm.controls;
  }

   //submit funtion
   onSubmit() {
    this.changePasswordForm.markAllAsTouched();
   if (this.changePasswordForm.valid) {
    console.log("mobi",this.changePasswordForm.value)
    console.log("forPassword Onsubmit")
    this._apiService.changePasswords(this.changePasswordForm.value).subscribe((result:any)=>{
      console.log("api result",result);
      // this.router.navigate(['/emailverify'])
      // this.ProductAddForm.reset();
    });
    
     
   } 
}
}
