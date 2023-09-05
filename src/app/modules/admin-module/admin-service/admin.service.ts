import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { API_PATH } from 'src/app/constants/api-end-point';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  constructor(private http: HttpClient,) { }

  //product Add Api function and url  "http://192.168.10.53:3000/product/add"
  addPostUrl = `${environment.baseUrl}${API_PATH.PRODUCT_ADD}`;
  addProductData(data:any){
    return this.http.post(this.addPostUrl,data)
  }

  //user list Api url "http://192.168.10.53:3000/user/list"
  userListUrl = `${environment.baseUrl}${API_PATH.USER_LIST}`;
  usersList(){
    return  this.http.get(this.userListUrl)
  }
  
  //signle user find by id url 'http://192.168.10.53:3000/user/userData'
  signleUserUrl = `${environment.baseUrl}${API_PATH.USER_DATA}`;
  getSingleUser(id:any){
    // console.log("admin service userId", id)
    return this.http.get(`${this.signleUserUrl}/${id.id}`);
  }
  //edit user details URL 'http://192.168.10.53:3000/user/updateProfile'
  editUrl = `${environment.baseUrl}${API_PATH.USER_UPDATE_PROFILE}`;
  userEdit(data: any, id:any) {
    // console.log("userData",data);
    // console.log("admin service userId", id)
    return this.http.put(`${this.editUrl}/${id.id}`,data);
  }
  
  //delete user function URL 'http://192.168.10.53:3000/user/deleteUser'
  deleteUserUrl = `${environment.baseUrl}${API_PATH.DELETE_USER}`;
  deleteUser(id:any) {
    // console.log("DelId",id)
    return this.http.delete(`${this.deleteUserUrl}/${id.id}`,{});
  }


  //product List URL 'http://192.168.10.53:3000/product/allProductList'
  productListUrl = `${environment.baseUrl}${API_PATH.ALL_PRODUCT_LIST}`;
  productList() {
    return this.http.get(this.productListUrl);
  }
  

  //====single post find ======='http://192.168.10.53:3000/product/getSingleProduct'//
  singleProductUrl = `${environment.baseUrl}${API_PATH.GET_SINGLE_PRODUCT}`;
  getSginleProduct(id:any){
    // console.log("productId",id)
    return this.http.get(`${this.singleProductUrl}/${id.id}`,{});
  }
  //edit product details URL 'http://192.168.10.53:3000/product/updateProduct'
  productEditUrl = `${environment.baseUrl}${API_PATH.EDIT_PRODUCT}`;
  productEdit(data: any, id:any) {
    console.log("userData",data);
    console.log("admin service userId", id)
    return this.http.put(`${this.productEditUrl}/${id.id}`,data);
  }
  
  //=== delete product Api Url ===='http://192.168.10.53:3000/product/deleteProduct'//
  productDeleteUrl = `${environment.baseUrl}${API_PATH.DELETE_PRODUCT}`;
  deleteProduct(id:any){
    return this.http.delete(`${this.productDeleteUrl}/${id.id}`,{})
  }


}
