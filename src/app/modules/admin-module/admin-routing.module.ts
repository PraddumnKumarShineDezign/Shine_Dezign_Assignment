import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

const routes: Routes = [
  {path:' ', redirectTo:'dashboard', pathMatch:'full'},
  {path: 'dashboard', component:AdminDashboardComponent},
  {path: 'add-product', component:ProductAddComponent},
  {path: 'user-list', component:UserListComponent},
  {path: 'user-edit/:id', component:EditUserComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { 
  constructor(){console.log("admin routing module loaded....")}
}
