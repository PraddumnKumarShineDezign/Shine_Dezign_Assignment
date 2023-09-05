import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { AdminService } from '../../admin-service/admin.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  
  //node server url path
  serverRunning:String='http://192.168.10.53:3000/';

  constructor(private _adminService:AdminService,
    private _commonService:CommonService, private router:Router){}
  data:any;
  totalUsers:any;
  ngOnInit(): void {
      this._adminService.productList().subscribe((res:any)=>{
        // console.log("getProductList",res.data);
        this.data =  res.data;
      });
  }
  sendidBybtn(productId:any){
    console.log("update",productId)
  this.router.navigate(['/admin/product-edit',productId])
  }
  ngDoCheck(): void {
      
  }
  deleteProduct(id:any){
    console.log("id",id)
  this._adminService.deleteProduct({id}).subscribe((res:any)=>{
    console.log("del",res);
    if(res.status===200){
      this._commonService.showSuccess("deleted",res.message);
      this._adminService.productList().subscribe((res:any)=>{
        // console.log("getProductList",res.data);
        this.data =  res.data;
      });
    }
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
