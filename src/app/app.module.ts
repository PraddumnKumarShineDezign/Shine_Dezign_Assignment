import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './components/on-boarding/login/login.component';
import { SignupComponent } from './components/on-boarding/signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OtpComponent } from './components/on-boarding/otp/otp.component';
import { ReactiveFormsModule} from '@angular/forms';
import {  HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ForgetPasswordComponent } from './components/on-boarding/forget-password/forget-password.component';
import { OnUpdatePasswordComponent } from './components/on-boarding/on-update-password/on-update-password.component';
import { ChangePasswordComponent } from './components/on-boarding/change-password/change-password.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { HeaderComponent } from './layout/header/header.component';
// import { SidebarComponent } from './layout/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    OtpComponent,
    ForgetPasswordComponent,
    OnUpdatePasswordComponent,
    ChangePasswordComponent,
    HeaderComponent,
    // SidebarComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      positionClass :'toast-top-right',
      
  }),
  ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
