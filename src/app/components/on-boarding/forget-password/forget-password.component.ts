import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  
  errorMessage:string='';
  constructor(private fb: FormBuilder, private _apiService:ApiService, private router:Router, private _commonService:CommonService) {}
  
  forgetPasswordForm = this.fb.group({
    phone: ['',
     [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
     Validators.pattern(/^[0-9]*$/)]
    ],
  });
  //get validation all form feilds
  get validateFiled(){
    return this.forgetPasswordForm.controls;
  }

   //submit funtion
   onSubmit() {
    this.forgetPasswordForm.markAllAsTouched();
   if (this.forgetPasswordForm.valid) {
    // console.log("forPassword Onsubmit")
    this._apiService.forgetPasswordFun(this.forgetPasswordForm.value).subscribe((result:any)=>{
      console.log("api result",result);
      // this.ProductAddForm.reset();
      if(result.status === 200){
        this._commonService.showSuccess('success',result.message);
      this.router.navigate(['/forget-updatePassword'])
      
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
