import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './components/on-boarding/login/login.component';
import { SignupComponent } from './components/on-boarding/signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OtpComponent } from './components/on-boarding/otp/otp.component';
import { ReactiveFormsModule} from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { ResetPasswordComponent } from './components/on-boarding/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    OtpComponent,
    ResetPasswordComponent
    
  ],
  imports: [
    BrowserModule,
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
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
