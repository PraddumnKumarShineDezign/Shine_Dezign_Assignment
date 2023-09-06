import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserRoutingModule } from './user-routing-module';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
@NgModule({
  declarations: [
  UserDashboardComponent,
  SidebarComponent
  ],
  imports: [
   RouterModule,
   UserRoutingModule,
   CommonModule
  ],
  providers: [
   
  ],
  
})
export class UserModule { }
