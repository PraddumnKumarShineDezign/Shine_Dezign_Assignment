import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/on-boarding/signup/signup.component';
import { OtpComponent } from './components/on-boarding/otp/otp.component';
import { LoginComponent } from './components/on-boarding/login/login.component';
import { ResetPasswordComponent } from './components/on-boarding/reset-password/reset-password.component';
const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },  
  { path: 'signup', component: SignupComponent },
  {path:'otp',component:OtpComponent},
  {path:'login',component:LoginComponent},
  {path:'reset',component:ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
