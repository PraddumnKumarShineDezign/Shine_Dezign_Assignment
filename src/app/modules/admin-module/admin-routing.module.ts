import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AdminGuard } from 'src/app/guards/auth.guards';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
const routes: Routes = [
  {path:' ', redirectTo:'dashboard', pathMatch:'full'},
  {path: 'dashboard', canActivate:[AdminGuard], component:AdminDashboardComponent},
  {path: 'add-product', canActivate:[AdminGuard], component:ProductAddComponent},
  {path: 'user-list', canActivate:[AdminGuard], component:UserListComponent},
  {path: 'user-edit/:id', canActivate:[AdminGuard], component:EditUserComponent},
  {path: 'product-list', canActivate:[AdminGuard], component:ProductListComponent},
  {path: 'product-edit/:id', canActivate:[AdminGuard], component:ProductEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { 
  constructor(){console.log("admin routing module loaded....")}
}
