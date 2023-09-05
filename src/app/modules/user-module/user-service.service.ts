import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  //Product list api and URL
  productListUrl='http://192.168.10.53:3000/product/recentFiveProduct'
  productList(){
    return this.http.get(this.productListUrl);
  }

  allProduct='http://192.168.10.53:3000/product/listBasedOnPageAndSearch'
    // Create HttpParams to build query parameters
 // Modify allProd function to accept pageNum and limit as query parameters
 allProd(pageNum: number, limit: number) {
  // Create HttpParams to build query parameters
  let params = new HttpParams()
    .set('pageNum', pageNum.toString())
    .set('limit', limit.toString());

  // Include the parameters in the HTTP request
  return this.http.get(this.allProduct, { params: params });
}
}
