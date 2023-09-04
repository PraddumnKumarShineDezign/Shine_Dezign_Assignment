import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { EditUserComponent } from './components/edit-user/edit-user.component';
@NgModule({
  declarations: [
    AdminDashboardComponent,
    ProductAddComponent,
    AccessDeniedComponent,
    UserListComponent,
    SearchPipe,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { 
  constructor(){console.log("Admin Module Loaded.........")}
}
