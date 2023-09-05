import { Component, OnInit } from '@angular/core';
import {   Validators, FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute} from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { AdminService } from '../../admin-service/admin.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit{
  productId:any;
  constructor(private fb: FormBuilder, private _apiService:AdminService, private router:Router,
    private _commonService:CommonService,private myroute:ActivatedRoute) {
      this.myroute.params.subscribe(params => {
        // console.log("pareams product id",params)
        // this.userId = params['id'];
        // console.log("userId",this.userId)
         this.productId = params // ['id']; Access the user ID from the params object
        // console.log("ProductId",this.productId)
      });
    }

  ProductEditForm = this.fb.group({
    productName: ['',
     [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
     Validators.pattern(/^[a-zA-Z\s]*$/)]
    ],
    description: ['', [Validators.required,Validators.minLength(20),
      Validators.maxLength(200),
      //  Validators.pattern(/^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/`"'\-=|]*$/)
      ]],
    price: [, [Validators.required,
      Validators.pattern(/^[0-9]*$/),
      Validators.minLength(0),
      Validators.maxLength(20),]],
    quantity: [,
     [Validators.required,
      Validators.pattern(/^[0-9]*$/),
      Validators.minLength(0),
      Validators.maxLength(20),]],
    // status: ['', [Validators.required]],
    image: ['', [Validators.required]],
  });
  //get validation all form feilds
  get validateFiled(){
    return this.ProductEditForm.controls;
  }

   //print form value
  //  printValue():void{
  //   console.log("PrintFormValue",this.ProductAddForm.value);
  //   }

    //get user and pre-filled 
    serverRunning:String='http://192.168.10.53:3000/';
    productImage:any;
    ngOnInit() {
      //prefilled update form filled
      this._apiService.getSginleProduct(this.productId).subscribe((res:any)=>{
        // console.log("single product",res);
        this.productImage = res.data.image;
        this.ProductEditForm = this.fb.group({
          productName: [res.data['productName'],
           [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
           Validators.pattern(/^[a-zA-Z\s]*$/)]
          ],
          description: [res.data['description'], [Validators.required,Validators.minLength(20),
            Validators.maxLength(200),
            //  Validators.pattern(/^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/`"'\-=|]*$/)
            ]],
          price: [res.data['price'], [Validators.required,
            Validators.pattern(/^[0-9]*$/),
            Validators.minLength(0),
            Validators.maxLength(20),]],
          quantity: [res.data['quantity'],
           [Validators.required,
            Validators.pattern(/^[0-9]*$/),
            Validators.minLength(0),
            Validators.maxLength(20),]],
          // status: ['', [Validators.required]],
          image: ['', [Validators.required]],
        });
      })
   
   }
  
  
    //image upload code 
  selectedFile:any = null;
  
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.selectedFile = file;
  }
   
  //submit funtion
  onSubmit() {
    this.ProductEditForm.markAllAsTouched();
   if (this.ProductEditForm.valid) {
    const formData: FormData = new FormData();
    formData.append('productName', this.ProductEditForm.get('productName')?.value ?? '');
    formData.append('description', this.ProductEditForm.get('description')?.value ?? '');
    formData.append('price', this.ProductEditForm.get('price')?.value ?? '');
    formData.append('quantity', this.ProductEditForm.get('quantity')?.value ?? '');
    formData.append('image', this.selectedFile);
    this._apiService.productEdit(formData,this.productId).subscribe((result:any)=>{
      console.log("api result",result);
      if(result.status === 200){
        this._commonService.showSuccess('success',result.message);
      }
    },
    (error: HttpErrorResponse) => {
      // Handle the error response here
      console.error('Error occurred:', error);
      this._commonService.showError('error',error.error.message)
    }
   
    );
   } 
}

profileImage:boolean=false;
notChangeImage:any
//onchange image funtion
onChangeImage(){
  this.profileImage = true
}
//dashbaord got ot click 
onGoToDashbaord(){
this.router.navigate(['/admin/dashboard'])
}
}
