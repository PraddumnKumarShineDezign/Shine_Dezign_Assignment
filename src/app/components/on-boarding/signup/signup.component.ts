import { Component,OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
function passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const value = control.value;
  const hasDigit = /[0-9]/.test(value);
  const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value);
  const hasUpperCase = /[A-Z]/.test(value);
  const hasLowerCase = /[a-z]/.test(value);

  if (!hasDigit || !hasSpecialChar || !hasUpperCase || !hasLowerCase) {
    return { invalidPassword: true };
  }

  return null;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registrationForm!: FormGroup;
  userId!: string;
  constructor(private formBuilder: FormBuilder, private router: Router,private apiService: ApiService,private authService:AuthService) { }

  
  ngOnInit(): void {
    
    this.registrationForm = this.formBuilder.group({
      firstname: ['',[ Validators.required,Validators.minLength(3)]],
      lastname: ['', [Validators.required,Validators.minLength(3)]],
      password: ['', [Validators.required,Validators.minLength(6),Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/)]],
      email: ['', Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,63}$") ],
      phone: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      countryCode:['',[Validators.required]]
    });
  }

  onSubmit() {
    this.registrationForm.markAllAsTouched();
      if(this.registrationForm.valid){
        this.apiService.signUp(this.registrationForm.value).subscribe(
        (response) => {
          console.log('Signup successful', response);
          const userId = response.data._id;
          console.log(userId);
          // const idd = this.authService.setUserId(userId);
          const idd= this.authService.userIdSubject.next(userId);
          console.log(idd);
          this.authService.userIdSubject.subscribe(sserr=>{
            console.log("ObservableVal",sserr)
          }

          )
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
