import { Component,OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm!:FormGroup;
constructor(private formBuilder: FormBuilder, private router: Router,private apiService: ApiService) { }
secretKey:string='abcd';
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      password: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  onSubmit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.apiService.login(this.loginForm.value).subscribe(
        (response) => {
          let res = response.data;
  
          console.log('login successful', response);
          console.log("response..........",response);
          const encryptedFields: any = {};
  
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              const value = JSON.stringify(res[key]); 
              encryptedFields[key] = CryptoJS.AES.encrypt(value, this.secretKey).toString();
              
            }
          }
  
          console.log('Encrypted Fields:', encryptedFields);
          localStorage.setItem('UserLogindata',JSON.stringify(encryptedFields) );

const encryptedFieldsString = localStorage.getItem('UserLogindata');
console.log("dattaaaaa",encryptedFieldsString);

if (encryptedFieldsString) {
  const encryptedFields = JSON.parse(encryptedFieldsString);
  const decryptedFields: any = {};

  Object.keys(encryptedFields).forEach(field => {
    const decryptedField = CryptoJS.AES.decrypt(encryptedFields[field], this.secretKey);
    decryptedFields[field] = decryptedField.toString(CryptoJS.enc.Utf8);
  });

  console.log("Decrypted Fields:", decryptedFields);


}
        },
        (error) => {
          console.error('Login failed', error);
          
        }
      );}
  
  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
}
}
