import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://192.168.10.53:3000/signup';
  private otpUrl = 'http://192.168.10.53:3000/verify/otpverification';
  private loginUrl ="http://192.168.10.53:3000/login/loginUser";
  private forgetPassword = "";
  private resetPassword = "http://192.168.10.2:3000/onboarding/resetPassword";
  constructor(private http: HttpClient) { }
  signUp(data: any): Observable<any> {
    console.log("data",data);
    return this.http.post(this.apiUrl, data);
  }

  otp(data:any):Observable<any>{
    return this.http.post(this.otpUrl,data)
  }

  login(data:any):Observable<any>{
    return this.http.post(this.loginUrl,data)
  }

  forgetPas(data:any):Observable<any>{
    return this.http.post(this.forgetPassword,data)
  }

  resetPas(data:any):Observable<any>{
    return this.http.post(this.resetPassword,data)
  }
}

