import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AdminService } from '../../admin-service/admin.service';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  
  constructor(private fb: FormBuilder, private _apiService:AdminService, private router:Router,
    private _commonService:CommonService) {}

  ProductAddForm = this.fb.group({
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
    return this.ProductAddForm.controls;
  }

   //print form value
  //  printValue():void{
  //   console.log("PrintFormValue",this.ProductAddForm.value);
  //   }
  
    //image upload code 
  selectedFile:any = null;
  
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.selectedFile = file;
  }
   
  //submit funtion
  onSubmit() {
    this.ProductAddForm.markAllAsTouched();
   if (this.ProductAddForm.valid) {
    const formData: FormData = new FormData();
    formData.append('productName', this.ProductAddForm.get('productName')?.value ?? '');
    formData.append('description', this.ProductAddForm.get('description')?.value ?? '');
    formData.append('price', this.ProductAddForm.get('price')?.value ?? '');
    formData.append('quantity', this.ProductAddForm.get('quantity')?.value ?? '');
    formData.append('image', this.selectedFile);
    this._apiService.addProductData(formData).subscribe((result:any)=>{
      console.log("api result",result);
      if(result.status === 200){
        this._commonService.showSuccess('success',result.message);
      }else{
        this._commonService.showError('success',result.message);
      
      }
      // this.router.navigate(['/emailverify'])
      // this.ProductAddForm.reset();
    },
    // (error: HttpErrorResponse) => {
    //   // Handle the error response here
    //   console.error('Error occurred:', error.error.message);
    //   this._commonService.showError('error',error.error.message)
    // }
    );
    // Log individual entries in formData
    // for (const pair of formData.entries()) {
    //   console.log(pair[0], pair[1]);
    // }
    // Print FormData values using entries() and forEach()
    // formData.forEach((value, key) => {
    //   console.log(`FormData - ${key}: ${value}`);
    // });

    // console.log("FormDatra",formData);
  //  console.log("formValue",this.ProductAddForm.value);
     
   } 
}

//dashbaord got ot click 
onGoToDashbaord(){
this.router.navigate(['/admin/dashboard'])
}
}
