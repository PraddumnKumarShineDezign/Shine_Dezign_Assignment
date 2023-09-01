import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/on-boarding/signup/signup.component';
import { OtpComponent } from './components/on-boarding/otp/otp.component';
import { LoginComponent } from './components/on-boarding/login/login.component';
import { ResetPasswordComponent } from './components/on-boarding/reset-password/reset-password.component';
import { ForgetPasswordComponent } from './components/on-boarding/forget-password/forget-password.component';
import { OnUpdatePasswordComponent } from './components/on-boarding/on-update-password/on-update-password.component';
import { ChangePasswordComponent } from './components/on-boarding/change-password/change-password.component';
const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },  
  { path: 'signup', component: SignupComponent },
  {path:'otp',component:OtpComponent},
  {path:'login',component:LoginComponent},
  {path:'reset',component:ResetPasswordComponent},
  {path:'forget-password',component:ForgetPasswordComponent},
  {path:'forget-updatePassword',component:OnUpdatePasswordComponent},
  {path:'change-password',component:ChangePasswordComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
