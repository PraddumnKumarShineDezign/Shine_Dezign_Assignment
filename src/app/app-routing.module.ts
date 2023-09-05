import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/on-boarding/signup/signup.component';
import { OtpComponent } from './components/on-boarding/otp/otp.component';
import { LoginComponent } from './components/on-boarding/login/login.component';
import { ForgetPasswordComponent } from './components/on-boarding/forget-password/forget-password.component';
import { OnUpdatePasswordComponent } from './components/on-boarding/on-update-password/on-update-password.component';
import { ChangePasswordComponent } from './components/on-boarding/change-password/change-password.component';
import { AdminModule } from './modules/admin-module/admin.module';
import { AdminGuard } from 'src/app/guards/auth.guards';

const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },  
  { path: 'signup', component: SignupComponent },
  {path:'otp',component:OtpComponent},
  {path:'login',component:LoginComponent},
  {path:'forget-password',component:ForgetPasswordComponent},
  {path:'forget-updatePassword/:id',component:OnUpdatePasswordComponent},
  {path:'change-password',component:ChangePasswordComponent},
  //load admin module lazy
  { path:'admin', canActivate:[AdminGuard], loadChildren: () => AdminModule },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
