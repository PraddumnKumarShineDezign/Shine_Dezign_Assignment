import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  errorMessage:string='';
  constructor(private fb: FormBuilder, private _apiService:ApiService, private _commonService:CommonService, private router:Router) {}

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
    // console.log("mobi",this.changePasswordForm.value)
    console.log("forPassword Onsubmit")
    this._apiService.changePasswords(this.changePasswordForm.value).subscribe((result:any)=>{
      console.log("api result",result);
      console.log("api status",result.status);
      if(result.status === 200){
        this._commonService.showSuccess('success',result.message);
      }
    },
    (error: HttpErrorResponse) => {
      // Handle the error response here
      console.error('Error occurred:', error.error.message);
      this._commonService.showError('error',error.error.message)
    }
    );
    
     
   } 
}
}
