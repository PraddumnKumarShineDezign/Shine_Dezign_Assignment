import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  constructor(private http: HttpClient,) { }

  //product Add Api function and url
  addPostUrl = "http://192.168.10.53:3000/product/add";
  addProductData(data:any){
    return this.http.post(this.addPostUrl,data)
  }

  //user list Api url 
  userListUrl = 'http://192.168.10.53:3000/user/list';
  usersList(){
    return  this.http.get(this.userListUrl)
  }
  
  //signle user find by id 
  signleUserUrl = 'http://192.168.10.53:3000/user/userData';
  getSingleUser(id:any){
    // console.log("admin service userId", id)
    return this.http.get(`${this.signleUserUrl}/${id.id}`);
  }
  //edit user details
  editUrl = 'http://192.168.10.53:3000/user/updateProfile';
  userEdit(data: any, id:any) {
    console.log("userData",data);
    console.log("admin service userId", id)
    return this.http.put(`${this.editUrl}/${id.id}`,data);
  }
}
