import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { AdminService } from '../../admin-service/admin.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  constructor(private _adminService:AdminService,
    private _commonService:CommonService, private router:Router){}
  data:any;
  totalUsers:any;
  ngOnInit(): void {
      this._adminService.usersList().subscribe((res:any)=>{
        // console.log("getUserList",res.data);
        this.data =  res.data;
      });

      //user count status 
      // this._adminService.userCount().subscribe((countUsers:any)=>{
      //   console.log("Count Users",countUsers.TotalUserRecords)
      //   this.totalUsers = countUsers.TotalUserRecords;
      // })
  }
  sendidBybtn(userId:any){
    // console.log("update",userId)
  this.router.navigate(['/admin/user-edit',userId])
  }
  ngDoCheck(): void {
      
  }
 deleteUser(id:any){
    console.log("id",id)
  
  this._adminService.deleteUser({id}).subscribe((res:any)=>{
    console.log("del",res);
    if(res.status===200){
      this._commonService.showSuccess("user account deleted", 'deleted account');
      window.location.reload();
      // this.router.navigate(['/admin/dashboard'])
    }
    // else{
    // this.toastr.showError("!Oh error occured", 'user account not deleted')
    
    // }

  },
  (error: HttpErrorResponse) => {
    // Handle the error response here
    console.error('Error occurred:', error);
    console.error('Error occurred:', error.error.message);
    this._commonService.showError('error',error.error.message)
  }
  )
 }
 searchText:any;
}
