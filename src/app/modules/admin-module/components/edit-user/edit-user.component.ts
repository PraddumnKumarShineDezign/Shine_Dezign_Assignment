import { Component } from '@angular/core';
import {   Validators, FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute} from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { AdminService } from '../../admin-service/admin.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {

  userId:any;
  constructor(private fb :FormBuilder, private _adminService:AdminService,
    private _commonService:CommonService,private route:Router, private myroute:ActivatedRoute) {
      this.myroute.params.subscribe(params => {
        // console.log("pareams",params)
        
        // this.userId = params['id'];
        // console.log("userId",this.userId)
         this.userId = params // ['id']; Access the user ID from the params object
        
      });
    }
  
  userEdit = this.fb.group({
    firstName: ['',[
      Validators.required,
      Validators.pattern('[a-zA-Z0-9]+$'),
      Validators.minLength(3),
      Validators.maxLength(20),
    ]],
    lastName: ['',[
      Validators.required,
      Validators.pattern('[a-zA-Z0-9]+$'),
      Validators.minLength(3),
      Validators.maxLength(20),
    ]],
    phone: ['', [Validators.required, 
      // Validators.pattern("^[0-9}$")
    ]],
    role:['',[Validators.required]]
  });

  get validateFiled(){
    return this.userEdit.controls;
  }
  
  //print form value
  // printValue():void{
  // console.log("formValue",this.userSignUp.value);
  // }
  
  selectedRole:string = '';
 roles:any;
  ngOnInit() {
    //prefilled update form filled
    this._adminService.getSingleUser(this.userId).subscribe((res:any)=>{
      console.log("single user",res);
      // console.log("res",res.getRole.role);
      
      this.userEdit = this.fb.group({
        firstName: [res.data['firstname'],[
          Validators.required,
          Validators.pattern('[a-zA-Z0-9]+$'),
          Validators.minLength(3),
          Validators.maxLength(20),
        ]],
        lastName: [res.data['lastname'],[
          Validators.required,
          Validators.pattern('[a-zA-Z0-9]+$'),
          Validators.minLength(3),
          Validators.maxLength(20),
        ]],
        phone: [res.data['phone'], [Validators.required, 
          // Validators.pattern('[0-9]+$')
        ]],
        role:[res.data['role'],[Validators.required]]
      });
    })
 
 }

 edit(){
  this.userEdit.markAllAsTouched();
  if(this.userEdit.valid) 
  {
    this._adminService.userEdit(this.userEdit.value,this.userId).subscribe((result:any)=>{
      // console.log("api result",result);
      
      if(result.status===401){
        this._commonService.showError("An error occured !  !!",result.message )
      }
      if(result.status===200){
        this._commonService.showSuccess("Updated successfully !!", result.message);
        setTimeout(()=>{
          this.route.navigate(['/admin/dashboard']);
        },2000);
       
      }
      // this.userEdit.reset();
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
