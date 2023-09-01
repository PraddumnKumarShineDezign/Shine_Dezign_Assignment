import { Component,OnInit} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
resetPasswordForm!: FormGroup;
constructor(private formBuilder: FormBuilder, private router: Router,private apiService: ApiService) { }

ngOnInit(): void {
  this.resetPasswordForm = this.formBuilder.group({
    currentPassword: ['', Validators.required],
    newPassword: ['', Validators.required],
    confirmPassword:['',Validators.required]
  });
}
onSubmit() {
  this.resetPasswordForm.markAllAsTouched();
  if (this.resetPasswordForm.valid) {
    this.apiService.resetPas(this.resetPasswordForm.value).subscribe(
      (response:any) => {
        console.log('Reset Password successful', response);
        console.log("response..........",response);
      },
      (error:any) => {
        console.error('Failed to reset', error);
      }
    );}
}
get f(): { [key: string]: AbstractControl } {
  return this.resetPasswordForm.controls;
}
}
