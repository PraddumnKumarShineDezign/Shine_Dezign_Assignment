import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  
  constructor(private router:Router){}

  //show compoennt varibales 
  // userList:boolean=false;
  // addProduct:boolean=false;
  // productList:boolean=false;
  // productEdit:boolean=false;
  
  // //user list function
  // onUserList(){
  //   this.userList = true ;  
  //   this.addProduct  =false;
  //   this.productEdit = false;
  //   this.productList = false;
    
  // }
  
  // //add product function 
  // onAddProdcut(){
  //   this.addProduct  =true;
  //   this.userList = false;
  //   this.productEdit = false;
  
  // }

  // //product list 
  // onProductList(){
  //   this.productList   =true;
  //   this.userList = false;
  //   this.addProduct  =false;
  //   this.productEdit = false;
  
  // }

  // //product edit component 
  // onProductEdit(){
  //   this.productEdit = true;
  //   this.productList = false;
  //   this.userList = false;
  //   this.addProduct  = false;
  // }
  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
