import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-on-update-password',
  templateUrl: './on-update-password.component.html',
  styleUrls: ['./on-update-password.component.scss']
})
export class OnUpdatePasswordComponent implements OnInit{
  userId:any;
  errorMessage:string='';
  constructor(private fb: FormBuilder, private _apiService:ApiService, private _commonService:CommonService, private myroute:ActivatedRoute) {
    this.myroute.params.subscribe(params => {
      console.log("pareams product id",params)
      // this.userId = params['id'];
      // console.log("userId",this.userId)
       this.userId = params['id'] // ['id']; Access the user ID from the params object
       this.onUpdateForgetPasswordForm.get('id')?.setValue(this.userId);
      // console.log("ProductId",this.productId)
    });
  }

  onUpdateForgetPasswordForm = this.fb.group({
    otp: ['',
     [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6),
     Validators.pattern(/^[0-9]*$/)]
    ],
    id: ['',[Validators.required]],
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
  
  ngOnInit(): void {
    this._commonService.onUserId.subscribe((res)=>{
      // console.log("OnUpdateId",res._id)

      this.userId = res._id;
      // console.log("uIdis",this.userId)
    
    })
  }

   //submit funtion
   onSubmit() {
    this.onUpdateForgetPasswordForm.markAllAsTouched();
   if (this.onUpdateForgetPasswordForm.valid) {
    
    // console.log("mobi",this.onUpdateForgetPasswordForm.value)
    // console.log("forPassword Onsubmit")
    this._apiService.updateForgetPass(this.onUpdateForgetPasswordForm.value).subscribe((result:any)=>{
      // console.log("api result",result);
      if(result.status === 200){
        this._commonService.showSuccess('success',result.message);
      }
      
    },
    (error: HttpErrorResponse) => {
      // Handle the error response here
      console.error('Error occurred:', error);
      console.error('Error occurred:', error.error.message);
      this._commonService.showError('error',error.error.message)
    }
    );
   } 
}
}
