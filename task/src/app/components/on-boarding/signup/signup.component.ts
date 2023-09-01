import { Component,OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registrationForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router,private apiService: ApiService) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstname: ['',[ Validators.required,Validators.minLength(3)]],
      lastname: ['', [Validators.required,Validators.minLength(3)]],
      password: ['', [Validators.required,Validators.minLength(6)]],
      email: ['', Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,63}$") ],
      phone: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
    });
  }

  onSubmit() {
    this.registrationForm.markAllAsTouched();
      if(this.registrationForm.valid){
        this.apiService.signUp(this.registrationForm.value).subscribe(
        (response) => {
          console.log('Signup successful', response);
          console.log("response..........",response);
          this.router.navigate(['/otp']);
        },
        (error) => {
          console.error('Signup failed', error);
          
        }
      );}
  }
  get f(): { [key: string]: AbstractControl } {
    return this.registrationForm.controls;
}
}
