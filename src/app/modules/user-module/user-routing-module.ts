import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
{path:'',redirectTo:'dashboard',pathMatch:'full'},
{path:'dashboard',component:UserDashboardComponent},
{path:'product',component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
