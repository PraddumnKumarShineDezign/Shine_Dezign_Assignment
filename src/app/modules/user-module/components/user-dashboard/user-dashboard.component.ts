import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent {
  constructor(private router:Router,private userService :UserServiceService){}
data:any;
  ngOnInit(): void {
    this.userService.productList().subscribe((res:any)=>{
      this.data =  res.data;
      console.log(this.data);
    });

    
}


redirectToProducts() {
  this.router.navigate(['/user/product']);
}}
